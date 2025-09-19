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
    <div className="bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
      {/* Enhanced clickable header */}
      <div
        className="p-3 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-base text-foreground !leading-tight !scroll-m-0 !tracking-normal group-hover:text-primary transition-colors">
              {title}
            </h4>
            <p className="text-xs text-muted-foreground font-mono flex items-center gap-1 !leading-none !mt-1 opacity-75">
              <Calendar size={10} className="text-muted-foreground flex-shrink-0" />
              <span>{period}</span>
            </p>
          </div>

          <button className="text-muted-foreground hover:text-primary transition-all duration-200 p-1 hover:bg-primary/10 rounded-md flex-shrink-0">
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Expanded content with better organization */}
      {isExpanded && (
        <div className="px-3 pb-3 border-t border-border/50">
          <div className="pt-3">
            <h5 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-2">Key Responsibilities</h5>
            <ul className="space-y-2">
              {responsibilities.map((responsibility, index) => {
                // Categorize responsibilities
                const isLeadership = /lead|manage|guide|mentor|coordinate|oversee/i.test(responsibility);
                const isTechnical = /develop|implement|engineer|architect|code|api|system/i.test(responsibility);
                const isStrategic = /strategy|roadmap|okr|plan|vision|initiative/i.test(responsibility);

                let categoryColor = "bg-muted/60";
                let categoryLabel = "General";

                if (isLeadership) {
                  categoryColor = "bg-blue-500/10 border-blue-500/20";
                  categoryLabel = "Leadership";
                } else if (isTechnical) {
                  categoryColor = "bg-green-500/10 border-green-500/20";
                  categoryLabel = "Technical";
                } else if (isStrategic) {
                  categoryColor = "bg-purple-500/10 border-purple-500/20";
                  categoryLabel = "Strategic";
                }

                return (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className={`px-2 py-1 rounded-full text-[10px] font-medium border ${categoryColor} flex-shrink-0 mt-0.5`}>
                      {categoryLabel.charAt(0)}
                    </div>
                    <span className="text-xs text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                      {responsibility}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
