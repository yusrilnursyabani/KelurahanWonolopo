"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { KeyRound, Lock, ShieldAlert, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin/dashboard";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;

    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
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
        setErrorMsg(data.message || "Password admin salah!");
      }
    } catch (err: any) {
      console.error("Login exception:", err);
      setErrorMsg(err?.message || "Terjadi kesalahan jaringan.");
    } finally {
      setIsLoading(false);
    }
  };

  const useDefaultPassword = () => {
    setPassword("KelwonolopoAdmin123");
  };

  return (
    <Card className="w-full max-w-md border-slate-800 bg-slate-900 text-slate-100 rounded-3xl shadow-2xl overflow-hidden">
      {/* Top Header Graphic */}
      <div className="h-2 bg-gradient-to-r from-primary via-amber-400 to-emerald-400" />

      <CardHeader className="space-y-3 text-center pb-2">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary border border-primary/20">
          <ShieldCheck className="h-8 w-8" />
        </div>
        <CardTitle className="font-heading text-2xl font-bold text-white">
          Login Admin Kelurahan
        </CardTitle>
        <CardDescription className="text-slate-400 text-sm">
          Masukan password administrator untuk mengakses Dashboard Kelurahan Wonolopo.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 pt-4">
        {errorMsg && (
          <div className="flex items-center gap-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 p-3.5 text-xs font-semibold text-rose-300">
            <ShieldAlert className="h-4 w-4 shrink-0 text-rose-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Password Admin</span>
              <button
                type="button"
                onClick={useDefaultPassword}
                className="text-[11px] font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                <Sparkles className="h-3 w-3" /> Isi Password Default
              </button>
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input
                type="password"
                placeholder="Masukkan password admin..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 h-11 bg-slate-950 border-slate-800 text-white rounded-2xl focus-visible:ring-primary"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 rounded-2xl font-bold gap-2 text-sm shadow-md"
          >
            <KeyRound className="h-4 w-4" />
            {isLoading ? "Memproses Login..." : "Masuk ke Dashboard"}
          </Button>
        </form>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5 text-center text-xs text-slate-400">
          <span>Password Default: </span>
          <code className="font-mono text-amber-300 font-bold">KelwonolopoAdmin123</code>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <Suspense fallback={<div className="text-slate-400 text-sm">Memuat form login...</div>}>
        <AdminLoginForm />
      </Suspense>
    </div>
  );
}
