import Link from "next/link"

import type { NavigationItem } from "@/types/content"

import { cn } from "@/lib/utils"

interface SidebarProps extends React.ComponentProps<"aside"> {
  title?: string
  items: NavigationItem[]
}

export function Sidebar({
  title = "Menu",
  items,
  className,
  ...props
}: SidebarProps) {
  return (
    <aside className={cn("ds-surface p-4", className)} {...props}>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      <nav className="grid gap-1" aria-label={title}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-muted"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
