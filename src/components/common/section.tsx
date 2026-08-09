import { cn } from "@/lib/utils"

interface SectionProps extends React.ComponentProps<"section"> {
  padded?: boolean
}

export function Section({
  className,
  padded = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(padded && "ds-section", className)} {...props}>
      {children}
    </section>
  )
}
