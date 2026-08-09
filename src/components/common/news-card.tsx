import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import type { NewsItem } from "@/types/content"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDateId } from "@/utils"

interface NewsCardProps {
  item: NewsItem
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/10] w-full bg-muted">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <CardHeader className="space-y-2">
        <CardDescription>{formatDateId(item.publishedAt)}</CardDescription>
        <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="ds-body text-sm">{item.excerpt}</p>
        <Link
          href={`/berita/${item.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
        >
          Baca selengkapnya
          <ArrowUpRightIcon className="icon-sm" />
        </Link>
      </CardContent>
    </Card>
  )
}
