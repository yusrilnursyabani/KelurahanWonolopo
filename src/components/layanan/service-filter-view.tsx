"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FileText,
  Globe,
  Hospital,
  Layers,
  Megaphone,
  Receipt,
  RotateCcw,
  Search,
  Sparkles,
} from "lucide-react";

import type { ServiceCategoryKey, ServiceItem } from "@/types/content";
import { serviceCategories } from "@/data/services";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ServiceCard } from "./service-card";

interface ServiceFilterViewProps {
  services: ServiceItem[];
  initialCategory?: ServiceCategoryKey;
}

const iconCategoryMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Receipt,
  Hospital,
  Megaphone,
  Globe,
};

export function ServiceFilterView({
  services,
  initialCategory = "all",
}: ServiceFilterViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategoryKey>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return services.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [services, selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: services.length };
    services.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [services]);

  const activeCategoryInfo = useMemo(() => {
    if (selectedCategory === "all") return null;
    return serviceCategories.find((cat) => cat.id === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Search & Category Filter Navigation */}
      <div className="space-y-4 rounded-3xl border border-border/80 bg-card/60 p-4 backdrop-blur-xs md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Cari layanan (misal: PBB, KTP, Puskesmas, PPID)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 rounded-2xl h-11 bg-background/80 text-sm focus-visible:ring-primary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                Reset
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Menampilkan <strong>{filteredServices.length}</strong> dari <strong>{services.length}</strong> Layanan</span>
          </div>
        </div>

        {/* Filter Pills Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold transition-all duration-200",
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Layers className="h-3.5 w-3.5" />
            Semua Layanan
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px]",
                selectedCategory === "all"
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-background/80 text-foreground"
              )}
            >
              {categoryCounts.all}
            </span>
          </button>

          {serviceCategories.map((cat) => {
            const IconComp = iconCategoryMap[cat.iconName] || FileText;
            const count = categoryCounts[cat.id] || 0;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold transition-all duration-200",
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <IconComp className="h-3.5 w-3.5" />
                {cat.shortTitle}
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px]",
                    isSelected
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-background/80 text-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Category Overview Banner */}
      {activeCategoryInfo && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={cn(
            "rounded-3xl border p-5 md:p-6 transition-all",
            activeCategoryInfo.colorScheme.accentBg,
            activeCategoryInfo.colorScheme.border
          )}
        >
          <div className="flex items-start gap-4">
            <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl", activeCategoryInfo.colorScheme.iconBg)}>
              {(() => {
                const IconComp = iconCategoryMap[activeCategoryInfo.iconName] || FileText;
                return <IconComp className="h-6 w-6" />;
              })()}
            </div>
            <div className="space-y-1">
              <h3 className="font-heading text-xl font-bold text-foreground">
                {activeCategoryInfo.title}
              </h3>
              <p className="ds-body text-sm text-muted-foreground">
                {activeCategoryInfo.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Services Grid with Smooth Framer Motion Animations */}
      <AnimatePresence mode="wait">
        {filteredServices.length > 0 ? (
          <motion.div
            key={`${selectedCategory}-${searchQuery}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
          >
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-dashed p-12 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <Search className="h-8 w-8" />
            </div>
            <h4 className="mt-4 font-heading text-lg font-bold">Layanan tidak ditemukan</h4>
            <p className="mt-1 text-sm text-muted-foreground max-w-md">
              Tidak ada hasil layanan yang sesuai dengan kata kunci &quot;{searchQuery}&quot; pada kategori yang dipilih.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-6 rounded-2xl gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Tampilkan Semua Layanan
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
