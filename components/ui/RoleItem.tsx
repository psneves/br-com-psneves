"use client"

import { useState } from "react"
import { Calendar, ChevronDown, ChevronUp } from "lucide-react"

interface RoleItemProps {
  title: string
  period: string
  responsibilities: string[]
  defaultExpanded?: boolean
}

export default function RoleItem({ title, period, responsibilities, defaultExpanded = false }: RoleItemProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="bg-card rounded-lg border border-border p-4 transition-all duration-200 hover:shadow-md">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <h4 className="font-medium text-foreground">{title}</h4>
        <button className="text-muted-foreground hover:text-primary transition-colors">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <p className="text-sm text-muted-foreground mb-3 font-mono flex items-center gap-1">
        <Calendar size={12} className="text-muted-foreground" />
        {period}
      </p>

      <div className={`role-details ${isExpanded ? "block" : "hidden"}`}>
        <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed mt-3 animate-fade-in">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
