import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  icon: LucideIcon
  title: string
  subtitle?: string
}

export default function SectionHeader({ icon: Icon, title, subtitle }: SectionHeaderProps): JSX.Element {
  return (
    <div className="section-header">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
          <Icon className="text-primary" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold gradient-text">{title}</h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}
