import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

interface CertificationItemProps {
  title: string
  period: string
  url: string
}

function CertificationItem({ title, period, url }: CertificationItemProps) {
  return (
    <div className="border-l-2 border-primary/20 pl-4">
      <Link
        href={url}
        target="_blank"
        className="font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
      >
        {title}
        <ExternalLink size={14} className="text-muted-foreground" />
      </Link>
      <p className="text-sm text-muted-foreground font-mono flex items-center gap-1 mt-1">
        <Award size={12} className="text-muted-foreground" />
        {period}
      </p>
    </div>
  )
}

export default function Certifications(): JSX.Element {
  return (
    <section className="enhanced-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <Award className="text-primary" size={20} />
        <h3 className="text-lg font-medium text-foreground">Certifications</h3>
      </div>
      <div className="space-y-4">
        <CertificationItem
          title="CompTIA Security+"
          period="2017 — 2020"
          url="https://www.credly.com/badges/17833853-d263-4c5d-8910-5ba917c0035a"
        />
        <CertificationItem
          title="SAFe® 5 Agilist"
          period="2020 — 2021"
          url="https://www.credly.com/badges/6edbb4e1-608a-404e-8185-114e3820f7cf"
        />
        <CertificationItem
          title="Blue Prism Developer"
          period="2020 — Present"
          url="https://www.credly.com/badges/92b24cf6-5666-4e22-85c3-4b5b699d7698"
        />
      </div>
    </section>
  )
}
