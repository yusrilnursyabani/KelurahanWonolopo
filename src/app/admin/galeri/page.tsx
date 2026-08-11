"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  Filter,
  Image as ImageIcon,
  Plus,
  Search,
  Trash2,
  Upload,
} from "lucide-react";

import { supabase } from "@/lib/supabase/client";
import type { GaleriItem } from "@/lib/mock-store";
import { ActionModal } from "@/components/common/action-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AdminGaleriPage() {
  const [galeriList, setGaleriList] = useState<GaleriItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Kegiatan Kelurahan");
  const [eventDate, setEventDate] = useState(new Date().toISOString().split("T")[0]);
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter States
  const [filterCategory, setFilterCategory] = useState("Semua");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Animated Modal State
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    message?: string;
    type?: "success" | "error" | "warning" | "info";
  }>({
    isOpen: false,
    title: "",
  });

  const categories = [
    "Kegiatan Kelurahan",
    "UMKM",
    "Kebersihan & Lingkungan",
    "Pemberdayaan",
    "Keagamaan",
    "Infrastruktur",
    "Budaya & Kebersihan",
    "Lainnya",
  ];

  const fetchGaleri = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/galeri");
      const json = await res.json();
      if (json.success) {
        setGaleriList(json.data);
      }
    } catch {
      // Fallback
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGaleri();
  }, []);

  const MAX_SIZE = 5 * 1024 * 1024;
  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setModalConfig({
        isOpen: true,
        title: "Format File Tidak Valid",
        message: "Format file tidak valid! Gunakan JPG, PNG, atau WEBP.",
        type: "warning",
      });
      return;
    }

    if (file.size > MAX_SIZE) {
      setModalConfig({
        isOpen: true,
        title: "Ukuran File Terlalu Besar",
        message: "Ukuran file terlalu besar! Maksimal 5 MB.",
        type: "warning",
      });
      return;
    }

    setIsUploading(true);
    try {
      const fileName = `galeri-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const { data, error } = await supabase.storage
        .from("galeri-images")
        .upload(fileName, file, { cacheControl: "3600", upsert: true });

      if (!error && data) {
        const { data: publicUrlData } = supabase.storage
          .from("galeri-images")
          .getPublicUrl(data.path);
        setImageUrl(publicUrlData.publicUrl);
      } else {
        if (error) {
          setModalConfig({
            isOpen: true,
            title: "Upload Storage Gagal",
            message: error.message,
            type: "error",
          });
        }
        setImageUrl(URL.createObjectURL(file));
      }
    } catch (err) {
      console.warn("Upload Catch Error:", err);
      setImageUrl(URL.createObjectURL(file));
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddGaleri = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) {
      setModalConfig({
        isOpen: true,
        title: "Foto Belum Dipilih",
        message: "Harap pilih dan unggah foto galeri terlebih dahulu!",
        type: "warning",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/admin/galeri", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim() || "Dokumentasi Kegiatan Wonolopo",
          image_url: imageUrl,
          category,
          event_date: eventDate,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setModalConfig({
          isOpen: true,
          title: "Foto Galeri Berhasil Ditambahkan",
          message: "Dokumentasi foto kegiatan telah berhasil ditambahkan ke galeri.",
          type: "success",
        });
        setTitle("");
        setImageUrl("");
        fetchGaleri();
      } else {
        setModalConfig({
          isOpen: true,
          title: "Gagal Menambahkan Galeri",
          message: json.message || "Gagal menyimpan foto galeri.",
          type: "error",
        });
      }
    } catch {
      setModalConfig({
        isOpen: true,
        title: "Kesalahan Jaringan",
        message: "Terjadi kesalahan koneksi server.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteGaleri = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/galeri/${id}`, { method: "DELETE" });
      if (res.ok) {
        setGaleriList((prev) => prev.filter((item) => item.id !== id));
        setModalConfig({
          isOpen: true,
          title: "Foto Galeri Berhasil Dihapus",
          message: "Foto dokumentasi dan berkas storage terkait telah dihapus secara permanen.",
          type: "success",
        });
      } else {
        setModalConfig({
          isOpen: true,
          title: "Gagal Menghapus Foto",
          message: "Terjadi kesalahan saat menghapus foto galeri.",
          type: "error",
        });
      }
    } catch {
      setModalConfig({
        isOpen: true,
        title: "Kesalahan Jaringan",
        message: "Gagal menghapus foto galeri.",
        type: "error",
      });
    }
  };

  const filteredGaleri = galeriList.filter((item) => {
    const matchesCategory = filterCategory === "Semua" || item.category === filterCategory;
    const matchesSearch = !searchQuery || item.title?.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesDate = true;
    if (startDate) {
      matchesDate = matchesDate && new Date(item.event_date) >= new Date(startDate);
    }
    if (endDate) {
      matchesDate = matchesDate && new Date(item.event_date) <= new Date(endDate);
    }

    return matchesCategory && matchesSearch && matchesDate;
  });

  return (
    <div className="space-y-8">
      {/* Animated Action Modal Notification */}
      <ActionModal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        message={modalConfig.message}
        type={modalConfig.type}
      />

      {/* Header */}
      <div className="border-b border-slate-200/80 pb-4">
        <h1 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
          <ImageIcon className="h-6 w-6 text-amber-600" />
          Manajemen Galeri Foto Kegiatan
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Unggah dokumentasi foto kegiatan kelurahan, atur tanggal pelaksanaan, serta kelompokkan per kategori.
        </p>
      </div>

      {/* Form Upload Galeri Card */}
      <Card className="border-slate-200/80 bg-white text-slate-900 rounded-3xl p-5 md:p-6 space-y-5 shadow-xs">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Plus className="h-5 w-5 text-primary" /> Tambah Dokumentasi Galeri Foto Baru
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <form onSubmit={handleAddGaleri} className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
            {/* Left: Drag Drop / Upload Box */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Upload Berkas Foto (`galeri-images`) *
              </label>
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center flex flex-col items-center justify-center min-h-[180px] space-y-3">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="h-36 w-full object-cover rounded-xl border border-slate-200 bg-white"
                  />
                ) : (
                  <div className="space-y-2">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                      <Upload className="h-6 w-6" />
                    </div>
                    <p className="text-xs text-slate-500">Pilih berkas foto kegiatan kelurahan (JPG/PNG/WEBP, Maks 5MB)</p>
                  </div>
                )}

                <label className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors shadow-xs">
                  <Upload className="h-4 w-4 text-amber-600" />
                  <span>{isUploading ? "Mengunggah..." : "Pilih File Gambar"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUploadFile}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Right: Metadata Inputs */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judul / Keterangan Foto
                </label>
                <Input
                  placeholder="Misal: Kerja Bakti Massal RW 03..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="h-10 bg-slate-50 border-slate-200 text-slate-900 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-primary" /> Tanggal Kegiatan (`event_date`) *
                </label>
                <Input
                  type="date"
                  required
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="h-10 bg-slate-50 border-slate-200 text-slate-900 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Kategori Galeri (`category`) *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-10 bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !imageUrl}
                className="w-full h-10 rounded-2xl font-bold gap-2 shadow-xs mt-2"
              >
                <Upload className="h-4 w-4" />
                {isSubmitting ? "Menyimpan..." : "Simpan Foto ke Galeri"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Filter Bar (Category & Date Range Filter) */}
      <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="font-heading text-base font-bold text-slate-900 flex items-center gap-2">
            <Filter className="h-4 w-4 text-amber-600" /> Filter & Filter Range Tanggal
          </h2>
          <span className="text-xs font-semibold text-slate-500">
            Total {filteredGaleri.length} Foto
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Cari judul foto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 bg-slate-50 border-slate-200 text-slate-900 rounded-xl text-xs"
            />
          </div>

          {/* Kategori Select */}
          <div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full h-9 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 text-xs focus:outline-none"
            >
              <option value="Semua">Semua Kategori</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Range Tanggal */}
          <div className="flex items-center gap-2">
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="h-9 bg-slate-50 border-slate-200 text-slate-900 rounded-xl text-xs"
              placeholder="Mulai Tanggal"
            />
            <span className="text-slate-400 text-xs">-</span>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="h-9 bg-slate-50 border-slate-200 text-slate-900 rounded-xl text-xs"
              placeholder="Sampai Tanggal"
            />
          </div>
        </div>
      </div>

      {/* Grid Galeri Admin */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="p-12 text-center text-slate-500">Memuat foto galeri...</div>
        ) : filteredGaleri.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGaleri.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden border border-slate-200/80 bg-white text-slate-900 rounded-3xl group shadow-xs"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image_url}
                    alt={item.title || "Foto Galeri"}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-0.5 text-[11px] font-bold text-amber-700 border border-slate-200 shadow-xs">
                    {item.category}
                  </span>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-heading text-sm font-bold text-slate-900 line-clamp-1">
                      {item.title || "Dokumentasi Kegiatan"}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-primary" />
                      Tanggal Kegiatan: {item.event_date}
                    </p>
                  </div>

                  <div className="flex items-center justify-end border-t border-slate-100 pt-3">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteGaleri(item.id)}
                      className="h-8 rounded-xl px-2.5 text-xs font-semibold gap-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Hapus</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center text-slate-500">
            Tidak ada foto galeri yang sesuai dengan filter.
          </div>
        )}
      </div>
    </div>
  );
}
