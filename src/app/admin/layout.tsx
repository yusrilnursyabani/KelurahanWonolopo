"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FileText,
  Globe,
  Image as ImageIcon,
  KeyRound,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // If on login page, don't show admin sidebar/header
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      router.push("/admin/login");
    }
  };

  const navItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Manajemen Berita", href: "/admin/berita", icon: FileText },
    { label: "Manajemen Galeri", href: "/admin/galeri", icon: ImageIcon },
    { label: "Pengaturan Akun", href: "/admin/settings", icon: KeyRound },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col md:flex-row">
      {/* Admin Sidebar - Clean Light Theme */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200/80 p-5 flex flex-col justify-between shrink-0 shadow-xs">
        <div className="space-y-6">
          {/* Logo & Header */}
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold shadow-xs">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-heading text-base font-bold text-slate-900 leading-snug">
                Admin Wonolopo
              </h2>
              <p className="text-[11px] font-medium text-slate-500">Dashboard Kelurahan</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive =
                pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-3.5 py-2.5 text-sm font-semibold transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm font-bold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <IconComp className="h-4 w-4 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Actions */}
        <div className="space-y-3 pt-6 border-t border-slate-100">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-primary" />
              Lihat Situs Publik
            </span>
          </Link>

          <Button
            variant="destructive"
            size="sm"
            onClick={handleLogout}
            className="w-full justify-center gap-2 rounded-2xl text-xs font-semibold shadow-xs"
          >
            <LogOut className="h-4 w-4" />
            Keluar (Logout)
          </Button>
        </div>
      </aside>

      {/* Admin Content Area */}
      <main className="flex-1 p-5 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
