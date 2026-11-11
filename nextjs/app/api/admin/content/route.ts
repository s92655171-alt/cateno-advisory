import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
// Runtime bindings are read from the Cloudflare Worker environment.
export const dynamic = "force-dynamic";

async function authorize(req: NextRequest) {
  const env = getCloudflareContext().env as unknown as Record<string, string | undefined>;
  const url = env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const anon = env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  const service = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const allow = (env.CATENO_ADMIN_EMAILS || process.env.CATENO_ADMIN_EMAILS || "").split(",").map(x=>x.trim().toLowerCase()).filter(Boolean);
  const missing = [
    !url ? "NEXT_PUBLIC_SUPABASE_URL" : "",
    !anon ? "NEXT_PUBLIC_SUPABASE_ANON_KEY" : "",
    !service ? "SUPABASE_SERVICE_ROLE_KEY" : "",
    !allow.length ? "CATENO_ADMIN_EMAILS" : ""
  ].filter(Boolean);
  if (missing.length) return {error:`Server configuration is incomplete. Missing: ${missing.join(", ")}`,status:503 as const};
  const token = req.headers.get("authorization")?.replace(/^Bearer\s+/i,"");
  if (!token) return {error:"Authentication required.",status:401 as const};
  const check = await fetch(`${url}/auth/v1/user`, {headers:{apikey:anon,Authorization:`Bearer ${token}`},cache:"no-store"});
  if (!check.ok) return {error:"Session expired. Please sign in again.",status:401 as const};
  const user = await check.json();
  const email = String(user?.email || "").toLowerCase();
  if (!email || !allow.includes(email)) return {error:"This account is not authorized.",status:403 as const};
  return {url,service,email};
}

export async function GET(req: NextRequest) {
  const a = await authorize(req);
  if ("error" in a) return NextResponse.json({error:a.error},{status:a.status});
  const r = await fetch(`${a.url}/rest/v1/site_content?id=eq.1&select=content,updated_at`, {
    headers:{apikey:a.service,Authorization:`Bearer ${a.service}`},cache:"no-store"
  });
  if (!r.ok) return NextResponse.json({error:"Could not load content."},{status:502});
  const rows = await r.json();
  if (rows?.[0]?.content) return NextResponse.json({content:rows[0].content,updatedAt:rows[0].updated_at});
  const fallback = await fetch(new URL("/content.json",req.url),{cache:"no-store"});
  return NextResponse.json({content:fallback.ok?await fallback.json():{},updatedAt:null});
}

export async function PUT(req: NextRequest) {
  const a = await authorize(req);
  if ("error" in a) return NextResponse.json({error:a.error},{status:a.status});
  let content: unknown;
  try { content=(await req.json())?.content; } catch { return NextResponse.json({error:"Invalid JSON."},{status:400}); }
  if (!content || typeof content!=="object" || Array.isArray(content)) return NextResponse.json({error:"Content must be a JSON object."},{status:400});
  if (JSON.stringify(content).length>500000) return NextResponse.json({error:"Content exceeds 500 KB."},{status:413});
  const r=await fetch(`${a.url}/rest/v1/site_content?on_conflict=id`,{
    method:"POST",
    headers:{apikey:a.service,Authorization:`Bearer ${a.service}`,"Content-Type":"application/json",Prefer:"resolution=merge-duplicates,return=representation"},
    body:JSON.stringify({id:1,content,updated_by:a.email,updated_at:new Date().toISOString()})
  });
  if(!r.ok) return NextResponse.json({error:"Could not save content to Supabase."},{status:502});
  return NextResponse.json({ok:true,message:"Website content saved."});
}
