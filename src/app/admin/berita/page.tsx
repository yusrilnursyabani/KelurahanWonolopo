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
import { ActionModal } from "@/components/common/action-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminBeritaListPage() {
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null);

  // Modal Notification State
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    message?: string;
    type?: "success" | "error" | "warning" | "info";
  }>({
    isOpen: false,
    title: "",
  });

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
    setIsDeletingId(id);
    try {
      const res = await fetch(`/api/admin/berita/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBeritaList((prev) => prev.filter((b) => b.id !== id));
        setModalConfig({
          isOpen: true,
          title: "Berita Berhasil Dihapus",
          message: "Artikel berita dan berkas gambar terkait telah dihapus secara permanen.",
          type: "success",
        });
      } else {
        setModalConfig({
          isOpen: true,
          title: "Gagal Menghapus Berita",
          message: "Terjadi kesalahan saat menghapus berita.",
          type: "error",
        });
      }
    } catch {
      setModalConfig({
        isOpen: true,
        title: "Kesalahan Jaringan",
        message: "Tidak dapat terhubung ke server.",
        type: "error",
      });
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
      {/* Animated Action Notification Modal */}
      <ActionModal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        message={modalConfig.message}
        type={modalConfig.type}
      />

      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200/80 pb-5">
        <div>
          <h1 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Manajemen Berita & Artikel
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola publikasi kegiatan, artikel berita, dan dokumentasi foto Kelurahan Wonolopo.
          </p>
        </div>

        <Button
          className="rounded-2xl gap-2 font-bold shadow-xs self-start sm:self-auto"
          render={<Link href="/admin/berita/new" />}
        >
          <PlusCircle className="h-4 w-4" />
          <span>Tambah Berita Baru</span>
        </Button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xs">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Cari judul berita..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 bg-slate-50 border-slate-200 text-slate-900 rounded-2xl"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {["Semua", "UMKM", "Kebersihan", "Pemberdayaan", "Kesehatan", "Giat Kelurahan"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-2xl px-3.5 py-1.5 text-xs font-semibold shrink-0 transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground font-bold shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Berita Table / List */}
      <div className="rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-xs">
        {isLoading ? (
          <div className="p-12 text-center text-slate-500 text-sm">Memuat data berita...</div>
        ) : filteredList.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-500 border-b border-slate-200/80">
                <tr>
                  <th className="p-4">Cover</th>
                  <th className="p-4">Judul Berita</th>
                  <th className="p-4">Kategori</th>
                  <th className="p-4">Tanggal Kegiatan</th>
                  <th className="p-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4">
                      <img
                        src={item.cover_image_url || "/Asset/Image/Berita1.png"}
                        alt={item.title}
                        className="h-12 w-16 object-cover rounded-xl border border-slate-200 bg-slate-100"
                      />
                    </td>
                    <td className="p-4 font-semibold text-slate-900 max-w-xs">
                      <div className="line-clamp-2">{item.title}</div>
                      <span className="text-[11px] font-normal text-slate-400">Slug: {item.slug}</span>
                    </td>
                    <td className="p-4">
                      <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-medium text-slate-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 text-xs">
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
