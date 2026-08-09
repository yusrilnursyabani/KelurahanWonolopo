"use client";

import { facilitiesData } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrophyIcon,
  LandmarkIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  SparklesIcon,
  CheckCircle2Icon,
  Building2Icon,
} from "lucide-react";

export function FacilitiesView() {
  const { header, categories } = facilitiesData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return <TrophyIcon className="size-6 text-amber-500" />;
      case "Landmark":
        return <LandmarkIcon className="size-6 text-emerald-500" />;
      case "GraduationCap":
        return <GraduationCapIcon className="size-6 text-blue-500" />;
      case "HeartPulse":
        return <HeartPulseIcon className="size-6 text-rose-500" />;
      default:
        return <Building2Icon className="size-6 text-primary" />;
    }
  };

  const getCategoryBadgeClass = (theme: string) => {
    switch (theme) {
      case "amber":
        return "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300";
      case "emerald":
        return "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300";
      case "blue":
        return "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300";
      case "rose":
        return "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300";
      default:
        return "border-primary/30 bg-primary/10 text-primary";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/30 p-6 md:p-8">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <SparklesIcon className="size-3.5" />
            Bento Category Dashboard
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {header.title}
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            {header.subtitle}
          </p>
        </div>
      </div>

      {/* 4 BENTO CATEGORY CARDS GRID */}
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="group relative overflow-hidden border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <CardHeader className="border-b border-border/50 bg-muted/20 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-background shadow-xs ring-1 ring-border/80">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">
                      {category.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className={getCategoryBadgeClass(category.colorTheme)}>
                  {category.items.filter((i) => i.count > 0).length} Jenis
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="pt-4">
              {/* GRID BADGES / STAT CHIPS */}
              <div className="grid gap-3 sm:grid-cols-2">
                {category.items.map((item, idx) => {
                  const isZero = item.count === 0;

                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between rounded-xl border p-3 transition-all ${
                        isZero
                          ? "border-dashed border-border/50 bg-muted/20 opacity-50"
                          : "border-border/80 bg-background hover:border-primary/30 hover:shadow-2xs"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2Icon
                          className={`size-4 ${
                            isZero ? "text-muted-foreground/50" : "text-primary"
                          }`}
                        />
                        <span
                          className={`text-xs font-semibold ${
                            isZero ? "text-muted-foreground" : "text-foreground"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>

                      {/* Counter Badge */}
                      <div
                        className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold ${
                          isZero
                            ? "bg-muted text-muted-foreground"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <span>{item.count}</span>
                        <span className="text-[10px] font-normal text-muted-foreground">
                          {item.unit}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
