import { Loader2 } from "lucide-react"

interface LoadingProps {
  text?: string
  size?: "sm" | "md" | "lg"
}

export function Loading({ text = "Loading...", size = "md" }: LoadingProps): JSX.Element {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  }

  return (
    <div className="flex items-center justify-center gap-2 p-4">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-primary`} />
      <span className="text-muted-foreground text-sm">{text}</span>
    </div>
  )
}

export function LoadingSkeleton(): JSX.Element {
  return (
    <div className="enhanced-card p-6 animate-pulse">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-muted"></div>
        <div className="flex-1">
          <div className="h-6 bg-muted rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
        <div className="h-4 bg-muted rounded w-4/6"></div>
      </div>
    </div>
  )
}

export function SkillsSkeleton(): JSX.Element {
  return (
    <div className="enhanced-card p-6 animate-pulse">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-muted"></div>
        <div className="flex-1">
          <div className="h-5 bg-muted rounded mb-1 w-2/3"></div>
          <div className="h-3 bg-muted rounded w-1/2"></div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-7 w-20 bg-muted rounded-full"></div>
        ))}
      </div>
    </div>
  )
}