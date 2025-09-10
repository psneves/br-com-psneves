import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

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
            <span
              className={`px-2 py-1 ${
                status === "LIVE"
                  ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                  : "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/20"
              } text-xs font-medium rounded-full border flex items-center gap-1`}
            >
              <span
                className={`w-2 h-2 ${
                  status === "LIVE" ? "bg-emerald-500" : "bg-amber-500"
                } rounded-full ${status === "LIVE" ? "animate-pulse" : ""}`}
              ></span>
              {status}
            </span>
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
