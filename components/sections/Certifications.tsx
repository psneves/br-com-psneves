import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import { certifications } from "@/lib/data/profile"

export default function Certifications(): JSX.Element {
  return (
    <section className="enhanced-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <Award className="text-primary" size={20} />
        <h3 className="text-lg font-medium text-foreground">Certifications</h3>
      </div>
      <div className="space-y-4">
        {certifications.map((certification) => (
          <div key={certification.title} className="border-l-2 border-primary/20 pl-4">
            <Link
              href={certification.url}
              target="_blank"
              className="font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              {certification.title}
              <ExternalLink size={14} className="text-muted-foreground" />
            </Link>
            <p className="text-sm text-muted-foreground font-mono flex items-center gap-1 mt-1">
              <Award size={12} className="text-muted-foreground" />
              {certification.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
