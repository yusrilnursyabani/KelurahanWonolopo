"use client";

import { useState } from "react";
import { KeyRound, Lock, Save, ShieldCheck } from "lucide-react";

import { ActionModal } from "@/components/common/action-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AdminSettingsPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      setModalConfig({
        isOpen: true,
        title: "Formulir Tidak Lengkap",
        message: "Seluruh kolom formulir ganti password wajib diisi!",
        type: "warning",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      setModalConfig({
        isOpen: true,
        title: "Konfirmasi Password Salah",
        message: "Konfirmasi password baru tidak cocok. Harap periksa kembali.",
        type: "warning",
      });
      return;
    }

    if (newPassword.length < 6) {
      setModalConfig({
        isOpen: true,
        title: "Password Terlalu Pendek",
        message: "Password baru minimal 6 karakter demi keamanan akun admin.",
        type: "warning",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setModalConfig({
          isOpen: true,
          title: "Password Berhasil Diperbarui",
          message: "Password kredensial administrator baru telah aktif digunakan.",
          type: "success",
        });
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setModalConfig({
          isOpen: true,
          title: "Gagal Mengubah Password",
          message: json.message || "Gagal mengubah password admin.",
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

  return (
    <div className="space-y-6 max-w-2xl">
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
          <KeyRound className="h-6 w-6 text-primary" />
          Pengaturan Akun & Keamanan Admin
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Ubah password kredensial administrator secara praktis tanpa mengubah konfigurasi server.
        </p>
      </div>

      <Card className="border-slate-200/80 bg-white text-slate-900 rounded-3xl p-6 shadow-xs">
        <CardHeader className="p-0 pb-4 border-b border-slate-100">
          <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-600" /> Form Ganti Password Admin
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs">
            Pastikan Anda mengingat password baru yang dimasukkan.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0 pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Password saat ini *
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="password"
                  required
                  placeholder="Masukkan password lama..."
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="pl-10 h-11 bg-slate-50 border-slate-200 text-slate-900 rounded-2xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Password Baru *
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="password"
                  required
                  placeholder="Minimal 6 karakter..."
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="pl-10 h-11 bg-slate-50 border-slate-200 text-slate-900 rounded-2xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Konfirmasi Password Baru *
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="password"
                  required
                  placeholder="Ketik ulang password baru..."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 h-11 bg-slate-50 border-slate-200 text-slate-900 rounded-2xl"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-11 rounded-2xl font-bold gap-2 px-6 shadow-xs"
              >
                <Save className="h-4 w-4" />
                {isSubmitting ? "Menyimpan..." : "Simpan Password Baru"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
