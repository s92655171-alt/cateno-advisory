-- Run in Supabase SQL Editor.
create table if not exists public.site_content (
  id integer primary key check (id = 1),
  content jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by text
);
alter table public.site_content enable row level security;
revoke all on table public.site_content from anon, authenticated;
grant all on table public.site_content to service_role;
insert into public.site_content (id,content)
values (1,'{"T":{"en":{},"de":{}},"S":[],"IND":{"en":[],"de":[]},"CONFIG":{"email":""}}'::jsonb)
on conflict (id) do nothing;
