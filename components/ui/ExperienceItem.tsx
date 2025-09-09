import Image from "next/image"
import { Calendar } from "lucide-react"
import RoleItem from "./RoleItem"

interface Role {
  title: string
  period: string
  responsibilities: string[]
}

interface ExperienceItemProps {
  company: string
  logo: string
  location: string
  period: string
  roles: Role[]
  defaultExpandedRole?: string
}

export default function ExperienceItem({
  company,
  logo,
  location,
  period,
  roles,
  defaultExpandedRole,
}: ExperienceItemProps): JSX.Element {
  return (
    <div className="experience-item relative border-l-2 border-primary/20 pl-6 hover:border-primary/40 transition-colors">
      <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-background shadow-sm border border-border hover:shadow-md transition-shadow">
            <Image src={logo || "/placeholder.svg"} alt={company} fill className="object-contain p-2" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{company}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono bg-muted/50 px-3 py-1 rounded-full">
          <Calendar size={14} className="text-primary" />
          <span>{period}</span>
        </div>
      </div>

      <div className="space-y-4 mt-6">
        {roles.map((role, index) => (
          <RoleItem
            key={index}
            title={role.title}
            period={role.period}
            responsibilities={role.responsibilities}
            defaultExpanded={role.title === defaultExpandedRole}
          />
        ))}
      </div>
    </div>
  )
}
