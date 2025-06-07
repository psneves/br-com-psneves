import { Code } from "lucide-react"

interface SkillBadgeProps {
  skill: string
}

function SkillBadge({ skill }: SkillBadgeProps) {
  return <span className="px-3 py-1 bg-blue-50 text-blue-800 text-sm rounded-full border border-blue-100">{skill}</span>
}

export default function Skills() {
  const skills = [
    "Team Leadership",
    "Product Management",
    "Digital Transformation",
    "Information Security",
    "AI/ML Integration",
    "Web Development",
    "API Development",
    "Agile/Scrum",
    "JIRA",
  ]

  return (
    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <Code className="text-blue-900" size={20} />
        <h3 className="text-lg font-medium text-black">Core Skills</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </section>
  )
}
