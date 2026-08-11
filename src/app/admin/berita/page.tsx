"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  FileText,
  PlusCircle,
  Search,
  Trash2,
} from "lucide-react";

import type { BeritaItem } from "@/lib/mock-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminBeritaListPage() {
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null);

  const fetchBerita = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/berita");
      const json = await res.json();
      if (json.success) {
        setBeritaList(json.data);
      }
    } catch {
      // Fallback
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBerita();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus berita ini?")) return;

    setIsDeletingId(id);
    try {
      const res = await fetch(`/api/admin/berita/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBeritaList((prev) => prev.filter((b) => b.id !== id));
      }
    } catch {
      alert("Gagal menghapus berita.");
    } finally {
      setIsDeletingId(null);
    }
  };

  const filteredList = beritaList.filter((item) => {
    const matchesCategory = selectedCategory === "Semua" || item.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-5">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Manajemen Berita & Artikel
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Kelola publikasi kegiatan, artikel berita, dan dokumentasi foto Kelurahan Wonolopo.
          </p>
        </div>

        <Button
          className="rounded-2xl gap-2 font-bold shadow-md self-start sm:self-auto"
          render={<Link href="/admin/berita/new" />}
        >
          <PlusCircle className="h-4 w-4" />
          <span>Tambah Berita Baru</span>
        </Button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-3xl border border-slate-800 bg-slate-950 p-4">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input
            placeholder="Cari judul berita..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 bg-slate-900 border-slate-800 text-white rounded-2xl"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {["Semua", "UMKM", "Kebersihan", "Pemberdayaan", "Kesehatan", "Giat Kelurahan"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-2xl px-3.5 py-1.5 text-xs font-semibold shrink-0 transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground font-bold shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Berita Table / List */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-slate-400 text-sm">Memuat data berita...</div>
        ) : filteredList.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4">Cover</th>
                  <th className="p-4">Judul Berita</th>
                  <th className="p-4">Kategori</th>
                  <th className="p-4">Tanggal Kegiatan</th>
                  <th className="p-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-4">
                      <img
                        src={item.cover_image_url || "/Asset/Image/Berita1.png"}
                        alt={item.title}
                        className="h-12 w-16 object-cover rounded-xl border border-slate-800 bg-slate-900"
                      />
                    </td>
                    <td className="p-4 font-semibold text-white max-w-xs">
                      <div className="line-clamp-2">{item.title}</div>
                      <span className="text-[11px] font-normal text-slate-500">Slug: {item.slug}</span>
                    </td>
                    <td className="p-4">
                      <span className="rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs font-medium text-amber-300">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400 text-xs">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {item.event_date}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="destructive"
                          size="sm"
                          disabled={isDeletingId === item.id}
                          onClick={() => handleDelete(item.id)}
                          className="h-8 rounded-xl px-2.5 text-xs font-semibold gap-1"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          <span>Hapus</span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-slate-500">
            Tidak ada berita yang sesuai dengan kriteria.
          </div>
        )}
      </div>
    </div>
  );
}
