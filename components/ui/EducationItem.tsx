import { Calendar } from "lucide-react"

interface EducationItemProps {
  institution: string
  degree: string
  period: string
}

export default function EducationItem({ institution, degree, period }: EducationItemProps) {
  return (
    <div className="border-l-2 border-primary/20 pl-4">
      <h4 className="font-medium text-foreground">{institution}</h4>
      <p className="text-sm text-muted-foreground">{degree}</p>
      <p className="text-sm text-muted-foreground font-mono flex items-center gap-1 mt-1">
        <Calendar size={12} className="text-muted-foreground" />
        {period}
      </p>
    </div>
  )
}
