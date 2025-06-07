import { Calendar } from "lucide-react"

interface EducationItemProps {
  institution: string
  degree: string
  period: string
}

export default function EducationItem({ institution, degree, period }: EducationItemProps) {
  return (
    <div className="border-l-2 border-blue-100 pl-4">
      <h4 className="font-medium text-gray-900">{institution}</h4>
      <p className="text-sm text-gray-600">{degree}</p>
      <p className="text-sm text-gray-500 font-mono flex items-center gap-1 mt-1">
        <Calendar size={12} className="text-gray-400" />
        {period}
      </p>
    </div>
  )
}
