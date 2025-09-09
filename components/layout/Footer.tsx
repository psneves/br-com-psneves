import { Heart, Code2 } from "lucide-react"

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-20 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
            <span>using</span>
            <Code2 className="w-4 h-4 text-primary" />
            <span>Next.js, Tailwind CSS & Shadcn/ui</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Last updated September 2025</span>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <span>© 2025 Paulo Neves</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
