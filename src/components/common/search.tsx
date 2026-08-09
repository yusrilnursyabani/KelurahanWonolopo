import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SearchProps extends React.ComponentProps<"form"> {
  placeholder?: string
  onQueryChange?: (query: string) => void
}

export function Search({
  className,
  placeholder = "Cari informasi...",
  onQueryChange,
  ...props
}: SearchProps) {
  return (
    <form className={cn("flex w-full items-center gap-2", className)} {...props}>
      <label className="sr-only" htmlFor="search-input">
        Pencarian
      </label>
      <input
        id="search-input"
        type="search"
        placeholder={placeholder}
        onChange={(event) => onQueryChange?.(event.target.value)}
        className="h-(--button-height-md) w-full rounded-xl border border-input bg-background px-3 text-sm outline-none transition focus-visible:ring-3 focus-visible:ring-ring/40"
      />
      <Button type="submit" variant="default" size="default" aria-label="Cari">
        <SearchIcon className="icon-sm" />
      </Button>
    </form>
  )
}
