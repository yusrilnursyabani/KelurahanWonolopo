"use client"

import Image from "next/image"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { SITE_CONFIG } from "@/constants"
import type { NavigationItem } from "@/types/content"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface MobileNavProps {
  items: NavigationItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Buka menu navigasi"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition hover:bg-muted lg:hidden"
      >
        <MenuIcon className="icon-md" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[86vw] max-w-sm p-0">
        <SheetHeader className="border-b border-border p-4 text-left">
          <div className="flex items-center gap-3">
            <Image
              src={SITE_CONFIG.logo.shield}
              alt="Logo Kelurahan Wonolopo"
              width={36}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <div>
              <SheetTitle className="text-base font-bold leading-tight">
                {SITE_CONFIG.name}
              </SheetTitle>
              <SheetDescription className="text-xs text-muted-foreground">
                Portal Resmi {SITE_CONFIG.city}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <nav className="grid gap-1 p-4" aria-label="Navigasi mobile">
          {items.map((item) => (
            <div key={item.href} className="space-y-1">
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                {item.label}
              </Link>

              {item.children?.length ? (
                <div className="ml-3 grid gap-1 border-l border-border pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-md px-2 py-1.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
