import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  icon: LucideIcon
  title: string
}

export default function SectionHeader({ icon: Icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <Icon className="text-blue-900" size={24} />
      <h2 className="text-2xl font-light text-black">{title}</h2>
    </div>
  )
}
