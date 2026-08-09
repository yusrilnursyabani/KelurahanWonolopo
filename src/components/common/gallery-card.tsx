import Image from "next/image"

import type { GalleryItem } from "@/types/content"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface GalleryCardProps {
  item: GalleryItem
}

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3] w-full bg-muted">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <CardHeader className="space-y-1">
        <CardDescription>{item.category}</CardDescription>
        <CardTitle className="text-lg">{item.title}</CardTitle>
      </CardHeader>
      {item.caption ? (
        <CardContent>
          <p className="ds-body text-sm">{item.caption}</p>
        </CardContent>
      ) : null}
    </Card>
  )
}
