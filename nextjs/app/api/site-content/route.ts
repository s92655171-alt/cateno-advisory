import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
export const dynamic = "force-dynamic";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    try {
      const r = await fetch(`${url}/rest/v1/site_content?id=eq.1&select=content`, {
        headers: { apikey: key, Authorization: `Bearer ${key}` }, cache: "no-store"
      });
      if (r.ok) {
        const rows = await r.json();
        if (rows?.[0]?.content) return NextResponse.json(rows[0].content, { headers: {"Cache-Control":"no-store"} });
      }
    } catch {}
  }
  try {
    const p = path.join(process.cwd(), "public", "content.json");
    return NextResponse.json(JSON.parse(await fs.readFile(p, "utf8")), { headers: {"Cache-Control":"no-store"} });
  } catch {
    return NextResponse.json({error:"Website content is not configured."}, {status:503});
  }
}
