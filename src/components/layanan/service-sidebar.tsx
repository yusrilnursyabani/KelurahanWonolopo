"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, Layers, Sparkles } from "lucide-react";

import { serviceCategories, serviceCatalog } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceSidebarProps {
  className?: string;
}

export function ServiceSidebar({ className }: ServiceSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "ds-surface space-y-5 p-5 shadow-xs transition-all lg:sticky lg:top-24 max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-thin",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="space-y-0.5">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Kategori Layanan</p>
          <h3 className="font-heading text-lg font-bold text-foreground">Menu Layanan</h3>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
          <Sparkles className="h-3 w-3" />
          {serviceCatalog.length} Item
        </span>
      </div>

      {/* Main Overview Link */}
      <Link
        href="/layanan"
        className={cn(
          "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all",
          pathname === "/layanan"
            ? "bg-primary text-primary-foreground shadow-xs"
            : "bg-muted/50 text-foreground hover:bg-muted"
        )}
      >
        <span className="inline-flex items-center gap-2">
          <Layers className="h-4 w-4" />
          Katalog Semua Layanan
        </span>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px]",
            pathname === "/layanan"
              ? "bg-primary-foreground/20 text-primary-foreground"
              : "bg-background text-muted-foreground"
          )}
        >
          {serviceCatalog.length}
        </span>
      </Link>

      {/* Categories Accordion / List */}
      <div className="space-y-4 pt-1">
        {serviceCategories.map((cat) => {
          const categoryServices = serviceCatalog.filter((s) => s.category === cat.id);

          return (
            <div key={cat.id} className="space-y-1.5">
              <div className="flex items-center justify-between px-2 py-1">
                <span className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground">
                  {cat.shortTitle}
                </span>
                <span className="text-[10px] font-medium text-muted-foreground">
                  ({categoryServices.length})
                </span>
              </div>

              <div className="grid gap-1">
                {categoryServices.map((item) => {
                  const isExternal = item.isExternal;
                  const isActive = !isExternal && pathname === `/layanan/${item.slug}`;

                  if (isExternal) {
                    return (
                      <a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-lg px-3 py-1.5 text-xs text-foreground transition-all hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400"
                      >
                        <span className="line-clamp-1 group-hover:underline">{item.title}</span>
                        <ExternalLink className="h-3 w-3 shrink-0 text-amber-600 opacity-70 group-hover:opacity-100" />
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.id}
                      href={`/layanan/${item.slug}`}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-1.5 text-xs transition-all",
                        isActive
                          ? "bg-primary/15 font-semibold text-primary"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      <span className="line-clamp-1">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
