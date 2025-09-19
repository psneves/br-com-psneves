import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  icon: LucideIcon
  title: string
  subtitle?: string
}

export default function SectionHeader({ icon: Icon, title, subtitle }: SectionHeaderProps): JSX.Element {
  return (
    <div className="section-header">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-lg border border-primary/20">
          <Icon className="text-primary" size={28} />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold gradient-text !leading-none">{title}</h2>
          {subtitle && (
            <p className="text-base text-muted-foreground !leading-none !mt-1 font-medium">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}
