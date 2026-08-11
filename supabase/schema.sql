-- SQL DDL Schema untuk Website Kelurahan Wonolopo (Supabase Database & Storage)

-- 1. Tabel Berita
CREATE TABLE IF NOT EXISTS public.berita (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  cover_image_url TEXT,
  content_image_url TEXT,
  content TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Giat Kelurahan',
  event_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index pada slug berita untuk pencarian cepat
CREATE INDEX IF NOT EXISTS idx_berita_slug ON public.berita(slug);
CREATE INDEX IF NOT EXISTS idx_berita_category ON public.berita(category);

-- 2. Tabel Komentar (Leave a Reply)
CREATE TABLE IF NOT EXISTS public.comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  berita_id UUID NOT NULL REFERENCES public.berita(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  comment_text TEXT NOT NULL,
  is_anonymous BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_comments_berita_id ON public.comments(berita_id);

-- 3. Tabel Galeri Foto
CREATE TABLE IF NOT EXISTS public.galeri (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Kegiatan Kelurahan',
  event_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_galeri_category ON public.galeri(category);
CREATE INDEX IF NOT EXISTS idx_galeri_event_date ON public.galeri(event_date);

-- 4. Kebijakan Row Level Security (RLS) untuk Tabel Database
ALTER TABLE public.berita ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.galeri ENABLE ROW LEVEL SECURITY;

-- Allow Public Read/Write Access (diatur & diproteksi oleh JWT Middleware Next.js)
DROP POLICY IF EXISTS "Public Access Berita" ON public.berita;
CREATE POLICY "Public Access Berita" ON public.berita FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Access Comments" ON public.comments;
CREATE POLICY "Public Access Comments" ON public.comments FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Access Galeri" ON public.galeri;
CREATE POLICY "Public Access Galeri" ON public.galeri FOR ALL USING (true) WITH CHECK (true);

-- 5. Supabase Storage Buckets & Policies Setup
INSERT INTO storage.buckets (id, name, public) 
VALUES ('berita-images', 'berita-images', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('galeri-images', 'galeri-images', true)
ON CONFLICT (id) DO NOTHING;

-- Kebijakan Storage Public Access
DROP POLICY IF EXISTS "Public Read Access for berita-images" ON storage.objects;
CREATE POLICY "Public Read Access for berita-images" ON storage.objects
  FOR SELECT USING (bucket_id = 'berita-images');

DROP POLICY IF EXISTS "Public Insert Access for berita-images" ON storage.objects;
CREATE POLICY "Public Insert Access for berita-images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'berita-images');

DROP POLICY IF EXISTS "Public Read Access for galeri-images" ON storage.objects;
CREATE POLICY "Public Read Access for galeri-images" ON storage.objects
  FOR SELECT USING (bucket_id = 'galeri-images');

DROP POLICY IF EXISTS "Public Insert Access for galeri-images" ON storage.objects;
CREATE POLICY "Public Insert Access for galeri-images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'galeri-images');
