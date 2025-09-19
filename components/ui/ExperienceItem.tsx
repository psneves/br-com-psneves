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
    <div className="experience-item relative border-l-2 border-primary/20 pl-6 hover:border-primary/40 transition-all duration-300 group">
      <div className="absolute -left-2 top-3 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm group-hover:scale-110 transition-transform"></div>

      {/* Company Header - More Prominent */}
      <div className="bg-gradient-to-r from-primary/5 to-transparent p-4 -mx-2 rounded-lg mb-3 border border-primary/10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-background shadow-md border border-border hover:shadow-lg transition-shadow">
              <Image src={logo || "/placeholder.svg"} alt={company} fill className="object-contain p-1" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-foreground leading-none !scroll-m-0 !tracking-normal">{company}</h3>
              <p className="text-sm text-muted-foreground !leading-none !mt-1 font-medium">{location}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono bg-primary/10 px-3 py-2 rounded-full border border-primary/20">
            <Calendar size={14} className="text-primary" />
            <span className="font-semibold">{period}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 ml-2">
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
