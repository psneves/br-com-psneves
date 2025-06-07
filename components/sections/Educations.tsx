import { GraduationCap } from "lucide-react"
import EducationItem from "../ui/EducationItem"

export default function Educations() {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <GraduationCap className="text-blue-900" size={20} />
        <h3 className="text-lg font-medium text-black">Education</h3>
      </div>
      <div className="space-y-6">
        <EducationItem
          institution="Federal University of São Paulo"
          degree="Bachelor of Computer Science"
          period="2011 — 2015"
        />
        <EducationItem
          institution="DeVry - Metrocamp"
          degree="Post-graduation, Information Security"
          period="2016 — 2018"
        />
      </div>
    </section>
  )
}
