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
}: ExperienceItemProps) {
  return (
    <div className="experience-item relative border-l-2 border-blue-100 pl-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded overflow-hidden bg-white shadow-sm border border-gray-100">
            <Image src={logo || "/placeholder.svg"} alt={company} fill className="object-contain p-1" />
          </div>
          <h3 className="text-xl font-medium text-black">{company}</h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
          <Calendar size={14} className="text-gray-400" />
          <span>{period}</span>
        </div>
      </div>
      <p className="text-gray-500 mb-4">{location}</p>

      <div className="space-y-6">
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
