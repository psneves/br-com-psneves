import { LanguagesIcon } from "lucide-react"

interface LanguageItemProps {
  language: string
  level: string
  proficiency: number
}

function LanguageItem({ language, level, proficiency }: LanguageItemProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-700">{language}</span>
      <div className="flex items-center">
        <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
          <div className="h-full bg-blue-900 rounded-full" style={{ width: `${proficiency}%` }}></div>
        </div>
        <span className="text-sm text-gray-500">{level}</span>
      </div>
    </div>
  )
}

export default function Languages() {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <LanguagesIcon className="text-blue-900" size={20} />
        <h3 className="text-lg font-medium text-black">Languages</h3>
      </div>
      <div className="space-y-3">
        <LanguageItem language="Portuguese" level="Native" proficiency={100} />
        <LanguageItem language="English" level="Fluent" proficiency={90} />
        <LanguageItem language="Spanish" level="Fluent" proficiency={85} />
      </div>
    </section>
  )
}
