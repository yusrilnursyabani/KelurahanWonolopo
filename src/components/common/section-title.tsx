import { cn } from "@/lib/utils"

interface SectionTitleProps extends React.ComponentProps<"div"> {
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionTitle({
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
      {...props}
    >
      <h2 className="ds-title-lg">{title}</h2>
      {subtitle ? <p className="ds-body text-base md:text-lg">{subtitle}</p> : null}
    </div>
  )
}
