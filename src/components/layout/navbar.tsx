"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDownIcon } from "lucide-react"

import { SITE_CONFIG } from "@/constants"
import { mainNavigation } from "@/data"
import { cn } from "@/lib/utils"

import { Container } from "@/components/common"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MobileNav } from "@/components/layout/mobile-nav"

interface NavbarProps extends React.ComponentProps<"header"> {
  sticky?: boolean
}

export function Navbar({ className, sticky = true, ...props }: NavbarProps) {
  return (
    <header
      className={cn(
        "border-b border-border/80 bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/80",
        sticky && "sticky top-0 z-50",
        className
      )}
      {...props}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-3 font-heading text-lg font-bold text-foreground transition-opacity hover:opacity-90 shrink-0"
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
            <Image
              src={SITE_CONFIG.logo.shield}
              alt="Logo Kelurahan Wonolopo"
              width={40}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-foreground">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              {SITE_CONFIG.city}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {mainNavigation.map((item) => {
            if (item.children?.length) {
              return (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger className="inline-flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-foreground transition hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none">
                    {item.label}
                    <ChevronDownIcon className="icon-sm" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-52">
                    <DropdownMenuItem>
                      <Link href={item.href} className="w-full font-semibold text-primary">
                        Lihat semua {item.label}
                      </Link>
                    </DropdownMenuItem>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href}>
                        <Link href={child.href} className="w-full">
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }

            return (
              <Button key={item.href} variant="ghost" size="sm" render={<Link href={item.href} />}>
                {item.label}
              </Button>
            )
          })}
        </nav>

        {/* Mobile Navigation */}
        <MobileNav items={mainNavigation} />
      </Container>
    </header>
  )
}
