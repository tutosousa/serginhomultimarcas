-- ===========================================================
-- SERGINHO MULTIMARCAS — permissões do Storage (upload de fotos)
--
-- COMO USAR (uma vez só, depois do supabase-setup.sql):
-- 1. No menu lateral do Supabase, abra "Storage"
-- 2. Clique em "New bucket"
-- 3. Nome EXATO: fotos
-- 4. Ligue a opção "Public bucket"
-- 5. Clique em "Create bucket"
-- 6. Volte no "SQL Editor" → "New query", cole este arquivo, clique "Run"
--
-- O mesmo bucket serve pras fotos das duas lojas — não precisa de um
-- bucket separado por cidade.
-- ===========================================================

drop policy if exists "Leitura publica de fotos" on storage.objects;
create policy "Leitura publica de fotos"
on storage.objects for select
using ( bucket_id = 'fotos' );

drop policy if exists "Upload autenticado de fotos" on storage.objects;
create policy "Upload autenticado de fotos"
on storage.objects for insert
to authenticated
with check ( bucket_id = 'fotos' );

drop policy if exists "Update autenticado de fotos" on storage.objects;
create policy "Update autenticado de fotos"
on storage.objects for update
to authenticated
using ( bucket_id = 'fotos' );

drop policy if exists "Delete autenticado de fotos" on storage.objects;
create policy "Delete autenticado de fotos"
on storage.objects for delete
to authenticated
using ( bucket_id = 'fotos' );
