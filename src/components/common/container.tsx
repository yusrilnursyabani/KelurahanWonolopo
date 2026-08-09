import { cn } from "@/lib/utils"

interface ContainerProps extends React.ComponentProps<"div"> {
  as?: "div" | "section" | "article" | "main"
}

export function Container({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component className={cn("ds-container", className)} {...props}>
      {children}
    </Component>
  )
}
