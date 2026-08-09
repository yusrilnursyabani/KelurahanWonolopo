import { cn } from "@/lib/utils"

interface LoadingSkeletonProps extends React.ComponentProps<"div"> {
  count?: number
}

export function LoadingSkeleton({
  count = 3,
  className,
  ...props
}: LoadingSkeletonProps) {
  return (
    <div className={cn("grid gap-3", className)} {...props}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="h-20 animate-pulse rounded-xl border border-border bg-muted"
        />
      ))}
    </div>
  )
}
