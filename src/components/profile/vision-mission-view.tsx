"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { visionMissionData } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  QuoteIcon,
  SparklesIcon,
  TargetIcon,
  ChevronRightIcon,
  CheckCircle2Icon,
  LayoutListIcon,
  TimelineIcon,
} from "lucide-react";

import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function VisionMissionView() {
  const { vision, missions } = visionMissionData;
  const [viewMode, setViewMode] = useState<"timeline" | "accordion">("timeline");

  return (
    <div className="space-y-10">
      {/* 1. HERO BANNER / QUOTE CARD UNTUK VISI */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/15 via-background to-accent/30 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl md:p-10"
      >
        {/* Glow background accent */}
        <div className="absolute -top-24 -right-24 size-96 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Badge variant="default" className="bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm">
              <SparklesIcon className="mr-1.5 size-3.5" />
              {vision.title}
            </Badge>
            <span className="text-xs font-medium text-muted-foreground">
              {vision.subtitle}
            </span>
          </div>

          <div className="relative">
            <QuoteIcon className="absolute -top-4 -left-4 size-12 text-primary/20 transition-transform group-hover:scale-110" />
            <blockquote className="pl-6 font-heading text-2xl font-bold leading-relaxed tracking-tight text-foreground md:text-3xl lg:text-4xl">
              &ldquo;{vision.quote}&rdquo;
            </blockquote>
          </div>

          <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-primary">
            <div className="h-0.5 w-8 rounded-full bg-primary" />
            <span>Landasan Pembangunan Kota Semarang & Kelurahan Wonolopo</span>
          </div>
        </div>
      </motion.div>

      {/* 2. BAGIAN MISI DENGAN INTERACTIVE TOGGLE & ANIMATION */}
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <TargetIcon className="size-4" />
              Misi Strategis
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              5 Misi Utama Pembangunan
            </h3>
          </div>

          {/* View Mode Toggle Switcher */}
          <div className="flex items-center rounded-xl border border-border bg-muted/50 p-1">
            <button
              onClick={() => setViewMode("timeline")}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                viewMode === "timeline"
                  ? "bg-card text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <TimelineIcon className="size-3.5" />
              Timeline Cards
            </button>
            <button
              onClick={() => setViewMode("accordion")}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                viewMode === "accordion"
                  ? "bg-card text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutListIcon className="size-3.5" />
              Interactive Accordion
            </button>
          </div>
        </div>

        {/* TIMELINE CARDS VIEW WITH SCROLL FADE-IN ANIMATION */}
        {viewMode === "timeline" ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            {missions.map((mission) => (
              <motion.div key={mission.id} variants={itemVariants}>
                <Card className="group relative overflow-hidden border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
                  <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-primary via-primary/80 to-primary/40 opacity-0 transition-opacity group-hover:opacity-100" />
                  <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start">
                    {/* Number Badge */}
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 font-heading text-xl font-extrabold text-primary shadow-inner group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300">
                      {mission.number}
                    </div>

                    {/* Mission Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary text-[11px]">
                          {mission.tag}
                        </Badge>
                      </div>
                      <h4 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {mission.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {mission.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {mission.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 rounded-md bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground/80"
                          >
                            <CheckCircle2Icon className="size-3 text-primary" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* ACCORDION VIEW */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Accordion defaultValue={["item-1"]} className="space-y-3">
              {missions.map((mission) => (
                <AccordionItem
                  key={mission.id}
                  value={`item-${mission.id}`}
                  className="rounded-xl border border-border/80 bg-card px-4 shadow-sm transition-all hover:border-primary/40"
                >
                  <AccordionTrigger className="py-4 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-heading text-xs font-bold text-primary">
                        {mission.number}
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider block">
                          {mission.tag}
                        </span>
                        <span className="font-heading text-base font-bold text-foreground">
                          {mission.title}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    <div className="space-y-3 pt-2 border-t border-border/50">
                      <p className="text-sm leading-relaxed text-foreground/90">
                        {mission.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {mission.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                          >
                            <ChevronRightIcon className="size-3" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        )}
      </div>
    </div>
  );
}
