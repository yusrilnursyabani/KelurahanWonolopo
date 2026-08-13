"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { KeyRound, Lock, ShieldAlert, User } from "lucide-react";

import { SITE_CONFIG } from "@/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function AdminLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin/dashboard";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorMsg("Username dan password wajib diisi!");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch (jsonErr) {
        console.error("Failed to parse JSON login response:", jsonErr);
        setErrorMsg("Server mengembalikan respon tidak valid (Status: " + res.status + ")");
        return;
      }

      if (res.ok && data.success) {
        router.push(from);
        router.refresh();
      } else {
        setErrorMsg(data.message || "Username atau password admin salah!");
      }
    } catch (err: any) {
      console.error("Login exception:", err);
      setErrorMsg(err?.message || "Terjadi kesalahan jaringan.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-border/80 bg-card text-card-foreground rounded-3xl shadow-xl overflow-hidden">
      {/* Top Header Graphic Accent */}
      <div className="h-2 bg-gradient-to-r from-red-600 via-emerald-600 to-amber-500" />

      <CardHeader className="space-y-3 text-center pb-2 pt-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 dark:bg-slate-800 border border-border/80 shadow-xs p-2">
          <Image
            src={SITE_CONFIG.logo.shield}
            alt="Logo Kelurahan Wonolopo"
            width={48}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />
        </div>
        <CardTitle className="font-heading text-2xl font-bold tracking-tight text-foreground">
          Portal Login Admin
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm leading-relaxed px-4">
          Masukkan username dan password otentikasi untuk mengelola sistem Kelurahan Wonolopo.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5 p-6 md:p-8 pt-4">
        {errorMsg && (
          <div className="flex items-center gap-3 rounded-2xl bg-destructive/10 border border-destructive/20 p-3.5 text-xs font-semibold text-destructive">
            <ShieldAlert className="h-4 w-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Field Username */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
              Username Admin *
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Masukkan username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="pl-10 h-11 bg-background border-border rounded-2xl focus-visible:ring-primary text-sm"
              />
            </div>
          </div>

          {/* Field Password */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
              Password Admin *
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="password"
                placeholder="Masukkan password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 h-11 bg-background border-border rounded-2xl focus-visible:ring-primary text-sm"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 rounded-2xl font-bold gap-2 text-sm shadow-md mt-2"
          >
            <KeyRound className="h-4 w-4" />
            {isLoading ? "Memproses Otentikasi..." : "Masuk ke Dashboard"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <Suspense fallback={<div className="text-muted-foreground text-sm">Memuat formulir login...</div>}>
        <AdminLoginForm />
      </Suspense>
    </div>
  );
}
