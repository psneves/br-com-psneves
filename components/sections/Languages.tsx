import { LanguagesIcon } from "lucide-react"
import { languages } from "@/lib/data/profile"

export default function Languages(): JSX.Element {
  return (
    <section className="enhanced-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <LanguagesIcon className="text-primary" size={20} />
        <h3 className="text-lg font-medium text-foreground">Languages</h3>
      </div>
      <div className="space-y-3">
        {languages.map((language) => (
          <div key={language.name} className="flex justify-between items-center">
            <span className="text-foreground/90">{language.name}</span>
            <span className="text-sm font-medium text-primary">{language.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
