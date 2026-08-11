"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, FileText, Save, Upload } from "lucide-react";

import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AdminNewBeritaPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("UMKM");
  const [eventDate, setEventDate] = useState(new Date().toISOString().split("T")[0]);
  const [content, setContent] = useState("");

  const [coverUrl, setCoverUrl] = useState("/Asset/Image/Berita1.png");
  const [contentUrl, setContentUrl] = useState("/Asset/Image/Berita1.png");

  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [isUploadingContent, setIsUploadingContent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ["UMKM", "Kebersihan", "Pemberdayaan", "Kesehatan", "Giat Kelurahan", "Lainnya"];

  const handleUploadCover = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingCover(true);
    try {
      const fileName = `cover-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const { data, error } = await supabase.storage
        .from("berita-images")
        .upload(fileName, file, { cacheControl: "3600", upsert: true });

      if (!error && data) {
        const { data: publicUrlData } = supabase.storage
          .from("berita-images")
          .getPublicUrl(data.path);
        setCoverUrl(publicUrlData.publicUrl);
      } else {
        if (error) {
          alert("Upload cover ke Supabase Storage ('berita-images') gagal: " + error.message);
        }
        setCoverUrl(URL.createObjectURL(file));
      }
    } catch {
      setCoverUrl(URL.createObjectURL(file));
    } finally {
      setIsUploadingCover(false);
    }
  };

  const handleUploadContent = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingContent(true);
    try {
      const fileName = `content-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const { data, error } = await supabase.storage
        .from("berita-images")
        .upload(fileName, file, { cacheControl: "3600", upsert: true });

      if (!error && data) {
        const { data: publicUrlData } = supabase.storage
          .from("berita-images")
          .getPublicUrl(data.path);
        setContentUrl(publicUrlData.publicUrl);
      } else {
        if (error) {
          alert("Upload foto konten ke Supabase Storage ('berita-images') gagal: " + error.message);
        }
        setContentUrl(URL.createObjectURL(file));
      }
    } catch {
      setContentUrl(URL.createObjectURL(file));
    } finally {
      setIsUploadingContent(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Judul dan isi berita wajib diisi!");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/admin/berita", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          category,
          event_date: eventDate,
          cover_image_url: coverUrl,
          content_image_url: contentUrl,
          content: content.trim(),
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        alert("Berita berhasil dipublikasikan!");
        router.push("/admin/berita");
        router.refresh();
      } else {
        alert(json.message || "Gagal menyimpan berita.");
      }
    } catch {
      alert("Terjadi kesalahan jaringan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-slate-400 hover:text-white gap-2 mb-2"
            render={<Link href="/admin/berita" />}
          >
            <ArrowLeft className="h-4 w-4" /> Kembali ke Daftar Berita
          </Button>
          <h1 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Tambah Berita Kegiatan Baru
          </h1>
        </div>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="border-slate-800 bg-slate-950 text-slate-100 rounded-3xl p-4 md:p-6 space-y-6">
          {/* Judul Berita */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Judul Berita *
            </label>
            <Input
              required
              placeholder="Masukkan judul berita kegiatan..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-11 bg-slate-900 border-slate-800 text-white rounded-2xl"
            />
          </div>

          {/* Grid Kategori & Tanggal */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Kategori Berita *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-11 bg-slate-900 border border-slate-800 text-white rounded-2xl px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-primary" /> Tanggal Kegiatan *
              </label>
              <Input
                type="date"
                required
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="h-11 bg-slate-900 border-slate-800 text-white rounded-2xl"
              />
            </div>
          </div>

          {/* Upload Foto 1 (Cover) & Foto 2 (Content) */}
          <div className="grid gap-6 sm:grid-cols-2 pt-2 border-t border-slate-800/80">
            {/* Foto 1: Cover */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Foto 1: Cover Berita (Thumbnail)
              </label>
              <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/60 p-4 text-center space-y-3">
                {coverUrl && (
                  <img
                    src={coverUrl}
                    alt="Cover Preview"
                    className="h-32 w-full object-cover rounded-xl border border-slate-800"
                  />
                )}
                <label className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-200 cursor-pointer hover:bg-slate-700 transition-colors">
                  <Upload className="h-3.5 w-3.5 text-primary" />
                  <span>{isUploadingCover ? "Mengunggah..." : "Pilih Foto Cover"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUploadCover}
                    className="hidden"
                  />
                </label>
                <p className="text-[11px] text-slate-500">Foto ke-1 untuk kartu thumbnail / berita list</p>
              </div>
            </div>

            {/* Foto 2: Content */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Foto 2: Foto Konten Dalam Artikel
              </label>
              <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/60 p-4 text-center space-y-3">
                {contentUrl && (
                  <img
                    src={contentUrl}
                    alt="Content Preview"
                    className="h-32 w-full object-cover rounded-xl border border-slate-800"
                  />
                )}
                <label className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-200 cursor-pointer hover:bg-slate-700 transition-colors">
                  <Upload className="h-3.5 w-3.5 text-primary" />
                  <span>{isUploadingContent ? "Mengunggah..." : "Pilih Foto Konten"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUploadContent}
                    className="hidden"
                  />
                </label>
                <p className="text-[11px] text-slate-500">Foto ke-2 untuk bagian dalam isi berita</p>
              </div>
            </div>
          </div>

          {/* Isi Berita */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Isi Lengkap Berita *
            </label>
            <textarea
              required
              rows={8}
              placeholder="Tuliskan seluruh isi berita kegiatan di sini..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-2xl bg-slate-900 border border-slate-800 p-4 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary leading-relaxed"
            />
          </div>

          {/* Submit Action */}
          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 rounded-2xl font-bold gap-2 px-6 shadow-md"
            >
              <Save className="h-4 w-4" />
              {isSubmitting ? "Publikasi..." : "Publikasikan Berita"}
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
}
