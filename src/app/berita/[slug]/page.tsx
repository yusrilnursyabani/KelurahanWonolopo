"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MessageSquare,
  Newspaper,
  Send,
  User,
  UserCheck,
} from "lucide-react";

import type { BeritaItem, CommentItem } from "@/lib/mock-store";
import { Container, Section } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface BeritaDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function PublicBeritaDetailPage({ params }: BeritaDetailPageProps) {
  const { slug } = use(params);

  const [berita, setBerita] = useState<BeritaItem | null>(null);
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Form Comment State
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState("");

  const fetchBeritaDetail = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/berita/${slug}`);
      const json = await res.json();
      if (json.success && json.data) {
        setBerita(json.data);
        setComments(json.comments || []);
      }
    } catch {
      // Fallback handled
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBeritaDetail();
  }, [slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!berita || !authorName.trim() || !authorEmail.trim() || !commentText.trim()) {
      alert("Harap isi semua kolom formulir komentar!");
      return;
    }

    setIsSubmitting(true);
    setFormFeedback("");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          berita_id: berita.id,
          author_name: authorName.trim(),
          author_email: authorEmail.trim(),
          comment_text: commentText.trim(),
          is_anonymous: isAnonymous,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setFormFeedback("Komentar Anda berhasil dipublikasikan!");
        setCommentText("");
        // Reload comments
        fetchBeritaDetail();
      } else {
        setFormFeedback(json.message || "Gagal mengirim komentar.");
      }
    } catch {
      setFormFeedback("Terjadi kesalahan koneksi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function for name censorship
  const formatAuthorName = (name: string, isAnon: boolean) => {
    if (!isAnon) return name;
    if (name.length <= 2) return "Warga Wonolopo (Anonim)";
    const firstChar = name.charAt(0);
    const lastChar = name.charAt(name.length - 1);
    return `${firstChar}***${lastChar} (Disamarkan)`;
  };

  if (isLoading) {
    return (
      <Section>
        <Container className="py-12 text-center text-muted-foreground">
          Memuat artikel berita...
        </Container>
      </Section>
    );
  }

  if (!berita) {
    return (
      <Section>
        <Container className="py-12 text-center space-y-4">
          <h2 className="font-heading text-2xl font-bold">Berita tidak ditemukan</h2>
          <Button variant="outline" render={<Link href="/berita" />}>
            Kembali ke Daftar Berita
          </Button>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container className="space-y-8 max-w-4xl">
        {/* Navigation Back */}
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground"
            render={<Link href="/berita" />}
          >
            <ArrowLeft className="h-4 w-4" /> Kembali ke Katalog Warta
          </Button>
        </div>

        {/* Article Container */}
        <article className="space-y-6">
          {/* Header Metadata */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                {berita.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                Tanggal Kegiatan:{" "}
                <strong>
                  {new Date(berita.event_date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </strong>
              </span>
            </div>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl leading-tight">
              {berita.title}
            </h1>
          </div>

          {/* Cover Photo */}
          {berita.cover_image_url && (
            <div className="overflow-hidden rounded-3xl border border-border/80 shadow-md">
              <img
                src={berita.cover_image_url}
                alt={berita.title}
                className="w-full h-auto max-h-[420px] object-cover"
              />
            </div>
          )}

          {/* Article Body Content */}
          <div className="ds-body text-base leading-relaxed space-y-6 pt-2 text-foreground/90">
            {berita.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Content Image (Foto ke-2) in article body */}
            {berita.content_image_url && berita.content_image_url !== berita.cover_image_url && (
              <div className="my-8 overflow-hidden rounded-3xl border border-border/80 shadow-xs space-y-2">
                <img
                  src={berita.content_image_url}
                  alt={`Dokumentasi ${berita.title}`}
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <p className="text-center text-xs text-muted-foreground py-1 bg-muted/30">
                  Foto 2: Dokumentasi Suasana Kegiatan {berita.title}
                </p>
              </div>
            )}
          </div>
        </article>

        {/* Section Leave a Reply / Comments */}
        <div className="space-y-8 pt-8 border-t border-border/80">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              Tanggapan & Komentar Warga ({comments.length})
            </h3>
          </div>

          {/* Leave a Reply Form */}
          <Card className="rounded-3xl border border-border/80 shadow-xs bg-card/90">
            <CardHeader className="pb-2">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">Leave a Reply</p>
              <h4 className="font-heading text-lg font-bold text-foreground">
                Tinggalkan Komentar Anda
              </h4>
              <p className="text-xs text-muted-foreground">
                Alamat email Anda tidak akan dipublikasikan. Kolom bertanda * wajib diisi.
              </p>
            </CardHeader>

            <CardContent className="space-y-4 pt-2">
              {formFeedback && (
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-3.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  {formFeedback}
                </div>
              )}

              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Nama Lengkap *
                    </label>
                    <Input
                      required
                      placeholder="Masukkan nama Anda..."
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="rounded-2xl h-10 bg-background"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Alamat Email *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="email@contoh.com"
                      value={authorEmail}
                      onChange={(e) => setAuthorEmail(e.target.value)}
                      className="rounded-2xl h-10 bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Isi Komentar *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tuliskan saran, pertanyaan, atau tanggapan Anda mengenai kegiatan ini..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full rounded-2xl bg-background border border-input p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary leading-relaxed"
                  />
                </div>

                {/* Checkbox Anonymous */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="anonymousCheck"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="h-4 w-4 rounded-md border-input text-primary focus:ring-primary"
                  />
                  <label htmlFor="anonymousCheck" className="text-xs text-foreground cursor-pointer select-none">
                    Sembunyikan nama saya (Kirim komentar secara Anonim / Disamarkan)
                  </label>
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-2xl gap-2 font-bold shadow-xs px-6"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Kirimkan..." : "Kirim Komentar"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Published Comments List */}
          <div className="space-y-4 pt-2">
            <h4 className="font-heading text-lg font-bold text-foreground">
              Komentar Terpublikasi ({comments.length})
            </h4>

            {comments.length > 0 ? (
              <div className="space-y-3">
                {comments.map((c) => (
                  <div
                    key={c.id}
                    className="rounded-2xl border border-border/60 bg-muted/30 p-4 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                          {c.is_anonymous ? "?" : c.author_name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                            <span>{formatAuthorName(c.author_name, c.is_anonymous)}</span>
                            {c.is_anonymous && (
                              <span className="rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20 px-2 py-0.2 text-[10px] font-semibold">
                                Anonim
                              </span>
                            )}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {new Date(c.created_at).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-foreground/90 leading-relaxed pl-10">
                      {c.comment_text}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground italic">
                Belum ada komentar untuk artikel berita ini. Jadilah yang pertama memberikan tanggapan!
              </p>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
