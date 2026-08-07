import { GraduationCap } from "lucide-react"
import EducationItem from "../ui/EducationItem"
import { education } from "@/lib/data/profile"

export default function Educations(): JSX.Element {
  return (
    <section className="enhanced-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <GraduationCap className="text-primary" size={20} />
        <h3 className="text-lg font-medium text-foreground">Education</h3>
      </div>
      <div className="space-y-6">
        {education.map((item) => (
          <EducationItem
            key={item.institution}
            institution={item.institution}
            degree={item.degree}
            period={item.period}
          />
        ))}
      </div>
    </section>
  )
}
