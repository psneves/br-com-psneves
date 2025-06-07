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
    <div className="project-card bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/3 h-48 md:h-auto bg-gray-50 flex items-center justify-center">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain p-2" />
          <div className="absolute top-3 right-3 z-10">
            <span
              className={`px-2 py-1 ${
                status === "LIVE"
                  ? "bg-green-100 text-green-800 border-green-200"
                  : "bg-amber-100 text-amber-800 border-amber-200"
              } text-xs font-medium rounded-full border flex items-center gap-1`}
            >
              <span
                className={`w-2 h-2 ${
                  status === "LIVE" ? "bg-green-500" : "bg-amber-500"
                } rounded-full ${status === "LIVE" ? "animate-pulse" : ""}`}
              ></span>
              {status}
            </span>
          </div>
        </div>
        <div className="p-5 flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-medium text-gray-900 flex items-center gap-2">
              <span>{title}</span>
            </h3>
            <Link href={url} target="_blank" className="text-blue-900 hover:text-blue-700">
              <ExternalLink size={18} />
            </Link>
          </div>
          <p className="mt-3 text-gray-600">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
