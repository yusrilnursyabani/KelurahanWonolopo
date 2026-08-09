"use client";

import { governmentStructure } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  UsersIcon,
  SparklesIcon,
  UserIcon,
} from "lucide-react";

interface OfficialCardProps {
  position: string;
  name: string;
  isLeader?: boolean;
}

function OfficialCard({ position, name, isLeader }: OfficialCardProps) {
  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isLeader
          ? "border-2 border-red-600/60 bg-card shadow-md"
          : "border border-border/80 bg-card shadow-sm hover:border-red-500/50"
      }`}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Foto / Avatar Section */}
        <div className="flex shrink-0 items-center justify-center bg-muted/60 p-3 sm:w-28 sm:border-r sm:border-border/60">
          <div className="flex size-14 items-center justify-center rounded-lg bg-red-600/10 text-red-600 ring-2 ring-red-600/20 sm:size-16">
            <UserIcon className="size-8" />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-1 flex-col">
          {/* Header Merah untuk Jabatan */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-3.5 py-2 text-white shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider md:text-sm">
              {position}
            </h4>
          </div>

          {/* White/Light Content Box untuk Nama */}
          <div className="flex flex-1 flex-col justify-center p-3.5 bg-card">
            <p className="font-heading text-sm font-bold text-foreground underline underline-offset-4 decoration-red-500/40 md:text-base group-hover:decoration-red-600">
              {name}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function GovernmentStructureView() {
  const { lurah, branches, lembagaRT } = governmentStructure;

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-red-600/20 bg-gradient-to-br from-red-500/10 via-background to-secondary/30 p-6 md:p-8">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-3 py-1 text-xs font-semibold text-red-600">
            <SparklesIcon className="size-3.5" />
            Bagan Acuan Resmi Kelurahan Wonolopo
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Struktur Organisasi Kelurahan Wonolopo
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Kecamatan Mijen, Kota Semarang — Bagan silsilah komando pemerintahan kelurahan sesuai struktur organisasi resmi.
          </p>
        </div>
      </div>

      {/* ORG CHART TREE CONTAINER */}
      <div className="relative overflow-x-auto pb-6">
        <div className="min-w-[768px] space-y-0 px-2">
          {/* TOP LEVEL: LURAH */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <OfficialCard
                position={lurah.position}
                name={lurah.name}
                isLeader
              />
            </div>
          </div>

          {/* VERTICAL LINE DOWN FROM LURAH */}
          <div className="flex justify-center">
            <div className="h-8 w-0.5 bg-red-600/60" />
          </div>

          {/* HORIZONTAL CROSSBAR ACROSS 3 BRANCHES */}
          <div className="relative mx-auto max-w-5xl">
            <div className="mx-auto h-0.5 w-[75%] bg-red-600/60" />
          </div>

          {/* 3 COLUMN BRANCHES (Kasie Pembangunan, Kasie Pemerintahan, Sekretaris Kelurahan) */}
          <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6 pt-0">
            {/* BRANCH 1: KASIE PEMBANGUNAN */}
            <div className="space-y-0">
              {/* Drop Line from Crossbar */}
              <div className="flex justify-center">
                <div className="h-6 w-0.5 bg-red-600/60" />
              </div>

              {/* Node 1: Kasie Pembangunan */}
              <OfficialCard
                position={branches[0].node.position}
                name={branches[0].node.name}
              />

              {/* Sub Branch 1: Kasie Kesra */}
              {branches[0].subNode && (
                <>
                  <div className="flex justify-center">
                    <div className="h-8 w-0.5 bg-red-600/60" />
                  </div>
                  <OfficialCard
                    position={branches[0].subNode.position}
                    name={branches[0].subNode.name}
                  />

                  {/* Sub Sub Branch: Pengelola TI */}
                  {branches[0].subNode.subNode && (
                    <>
                      <div className="flex justify-center">
                        <div className="h-8 w-0.5 bg-red-600/60" />
                      </div>
                      <OfficialCard
                        position={branches[0].subNode.subNode.position}
                        name={branches[0].subNode.subNode.name}
                      />
                    </>
                  )}
                </>
              )}
            </div>

            {/* BRANCH 2: KASIE PEMERINTAHAN KEAMANAN KETERTIBAN */}
            <div className="space-y-0">
              {/* Drop Line from Crossbar */}
              <div className="flex justify-center">
                <div className="h-6 w-0.5 bg-red-600/60" />
              </div>

              {/* Node 2: Kasie Pemerintahan */}
              <OfficialCard
                position={branches[1].node.position}
                name={branches[1].node.name}
              />

              {/* Sub Branch: Tenaga Kebersihan */}
              {branches[1].subNode && (
                <>
                  <div className="flex justify-center">
                    <div className="h-8 w-0.5 bg-red-600/60" />
                  </div>
                  <OfficialCard
                    position={branches[1].subNode.position}
                    name={branches[1].subNode.name}
                  />
                </>
              )}
            </div>

            {/* BRANCH 3: SEKRETARIS KELURAHAN */}
            <div className="space-y-0">
              {/* Drop Line from Crossbar */}
              <div className="flex justify-center">
                <div className="h-6 w-0.5 bg-red-600/60" />
              </div>

              {/* Node 3: Sekretaris Kelurahan */}
              <OfficialCard
                position={branches[2].node.position}
                name={branches[2].node.name}
              />

              {/* Sub Branch: Staff IT */}
              {branches[2].subNode && (
                <>
                  <div className="flex justify-center">
                    <div className="h-8 w-0.5 bg-red-600/60" />
                  </div>
                  <OfficialCard
                    position={branches[2].subNode.position}
                    name={branches[2].subNode.name}
                  />

                  {/* Sub Sub Branch: Staff Keuangan */}
                  {branches[2].subNode.subNode && (
                    <>
                      <div className="flex justify-center">
                        <div className="h-8 w-0.5 bg-red-600/60" />
                      </div>
                      <OfficialCard
                        position={branches[2].subNode.subNode.position}
                        name={branches[2].subNode.subNode.name}
                      />
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* TERPISAH DI BOTTOM: KOORDINASI RT/RW & LEMBAGA KEMASYARAKATAN */}
      <div className="pt-4">
        <Card className="border-dashed border-red-500/30 bg-gradient-to-r from-background via-muted/20 to-background shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <UsersIcon className="size-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {lembagaRT.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {lembagaRT.description}
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="w-fit border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300">
                Unit Koordinasi Masyarakat (Non-Komando)
              </Badge>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {lembagaRT.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl border border-border/80 bg-card p-4 transition-all hover:border-amber-500/40 hover:shadow-md"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                    <h4 className="font-heading text-xl font-bold text-foreground group-hover:text-red-600">
                      {stat.count}
                    </h4>
                    <p className="text-xs text-muted-foreground">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
