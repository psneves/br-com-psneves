import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  url: string
  status: "LIVE" | "PAUSED"
  tags: string[]
}

export default function ProjectCard({ title, description, image, url, status, tags }: ProjectCardProps) {
  return (
    <div className="project-card bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/3 h-48 md:h-auto bg-muted flex items-center justify-center">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain p-2" />
          <div className="absolute top-3 right-3 z-10">
            {(() => {
              const isLive = status === "LIVE"
              return (
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium shadow-sm ring-1",
                    isLive
                      ? "bg-emerald-500/90 ring-emerald-500/50 text-white"
                      : "bg-amber-500/90 ring-amber-500/50 text-white"
                  )}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    {isLive && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30" />
                    )}
                    <span
                      className={cn(
                        "relative inline-flex h-2.5 w-2.5 rounded-full",
                        isLive ? "bg-emerald-700" : "bg-amber-700"
                      )}
                    />
                  </span>
                  <span className="tracking-wide">{isLive ? "LIVE" : "PAUSED"}</span>
                </span>
              )
            })()}
          </div>
        </div>
        <div className="p-5 flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-medium text-foreground flex items-center gap-2">
              <span>{title}</span>
            </h3>
            <Link href={url} target="_blank" className="text-primary hover:opacity-80">
              <ExternalLink size={18} />
            </Link>
          </div>
          <p className="mt-3 text-muted-foreground">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
