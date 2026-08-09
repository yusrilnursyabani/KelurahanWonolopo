"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPinIcon,
  Maximize2Icon,
  CompassIcon,
  LayersIcon,
  SparklesIcon,
  Building2Icon,
  GraduationCapIcon,
  HeartPulseIcon,
  LandmarkIcon,
} from "lucide-react";

import { WONOLOPO_GEOJSON } from "@/data/wonolopo-geojson";

// Key points inside Kelurahan Wonolopo
const MAP_LOCATIONS = [
  {
    name: "Kantor Kelurahan Wonolopo",
    category: "pemerintahan",
    coords: [-7.0435, 110.3250] as [number, number],
    desc: "Pusat Pelayanan Publik & Kantor Lurah Wonolopo",
  },
  {
    name: "Kampung Tematik Jamu Wonolopo",
    category: "ekonomi",
    coords: [-7.0380, 110.3200] as [number, number],
    desc: "Kawasan Wisata & Pemberdayaan UMKM Jamu",
  },
  {
    name: "SMP Negeri 23 Semarang",
    category: "pendidikan",
    coords: [-7.0310, 110.3270] as [number, number],
    desc: "Fasilitas Pendidikan Menengah Pertama",
  },
  {
    name: "Puskesmas Pembantu Wonolopo",
    category: "kesehatan",
    coords: [-7.0410, 110.3235] as [number, number],
    desc: "Layanan Kesehatan Masyarakat Dasar",
  },
];

export function InteractiveMapView() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Inject Leaflet CSS
    const cssId = "leaflet-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // Dynamically load Leaflet JS
    const jsId = "leaflet-js";
    const initMap = () => {
      const L = (window as any).L;
      if (!L || !mapContainerRef.current) return;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Initialize map centered on Wonolopo
      const map = L.map(mapContainerRef.current, {
        center: [-7.045, 110.306],
        zoom: 14,
        zoomControl: true,
      });

      mapInstanceRef.current = map;

      // Add OpenStreetMap Tile Layer (Matches user screenshot)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add GeoJSON Layer directly from Adm_Kelurahan_Semarang.geojson.txt
      const geojsonLayer = L.geoJSON(WONOLOPO_GEOJSON as any, {
        style: {
          color: "#2563eb", // Primary blue border
          weight: 3.5,
          fillColor: "#3b82f6",
          fillOpacity: 0.35,
        },
      }).addTo(map);

      geojsonLayer.bindPopup("<b>Kelurahan Wonolopo</b><br>Kecamatan Mijen, Kota Semarang<br>Luas Wilayah: 495,35 Ha");

      // Fit bounds to exact GeoJSON boundary
      map.fitBounds(geojsonLayer.getBounds(), { padding: [25, 25] });

      setMapLoaded(true);
    };

    if ((window as any).L) {
      initMap();
    } else {
      let script = document.getElementById(jsId) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = jsId;
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = () => {
          setTimeout(initMap, 100);
        };
        document.body.appendChild(script);
      } else {
        script.addEventListener("load", initMap);
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/30 p-6 md:p-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <SparklesIcon className="size-3.5" />
              Peta Interaktif Wilayah
            </div>
            <Badge variant="outline" className="border-blue-500/40 bg-blue-500/10 text-blue-700 dark:text-blue-300 font-semibold">
              OpenStreetMap + GeoJSON Boundary
            </Badge>
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Peta & Pemetaan Batas Kelurahan Wonolopo
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Visualisasi peta digital interaktif menampilkan garis batas wilayah administratif, luas wilayah (495,35 Ha), dan titik lokasi penting di Kelurahan Wonolopo.
          </p>
        </div>
      </div>

      {/* MAIN MAP CONTAINER */}
      <Card className="overflow-hidden border-border/80 bg-card shadow-md">
        <CardHeader className="border-b border-border/50 bg-muted/20 pb-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <MapPinIcon className="size-5 text-primary" />
              <CardTitle className="text-lg font-bold">
                Peta Wilayah Kelurahan Wonolopo
              </CardTitle>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Luas: 495,35 Ha
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                Kecamatan Mijen, Kota Semarang
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* LEAFLET MAP ELEMENT */}
          <div className="relative h-[480px] w-full bg-muted/40">
            <div ref={mapContainerRef} className="h-full w-full z-10" />
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-xs z-20">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="size-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  <span>Memuat Peta Wilayah Wonolopo...</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* QUICK MAP LEGEND & BOUNDARY INFO */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Batas Administrasi Info */}
        <Card className="border-border/80 bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
              <CompassIcon className="size-4 text-primary" />
              Batas Administrasi Wilayah
            </div>
            <Badge variant="outline" className="text-[10px]">Peta Geografis</Badge>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">Utara</span>
              <span className="font-heading text-sm font-semibold text-foreground">Kelurahan Ngadirgo</span>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">Timur</span>
              <span className="font-heading text-sm font-semibold text-foreground">Kelurahan Mijen</span>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">Barat</span>
              <span className="font-heading text-sm font-semibold text-foreground">Kelurahan Jatisari</span>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">Selatan</span>
              <span className="font-heading text-sm font-semibold text-foreground">Kelurahan Wonoplumbon</span>
            </div>
          </div>
        </Card>

        {/* Informasi Pemetaan GeoJSON */}
        <Card className="border-border/80 bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
              <LayersIcon className="size-4 text-primary" />
              Informasi Pemetaan Digital
            </div>
            <Badge variant="outline" className="text-[10px]">GeoJSON Bounds</Badge>
          </div>
          <div className="space-y-3 text-xs">
            <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">Sumber Data Pemetaan</span>
              <p className="font-medium text-foreground">OpenStreetMap & Batas Kelurahan Semarang (GeoJSON Official)</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Luas Total</span>
                <span className="font-heading text-sm font-bold text-primary">495,35 Ha</span>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Kecamatan</span>
                <span className="font-heading text-sm font-bold text-foreground">Mijen</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
