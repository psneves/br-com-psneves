import { Code } from "lucide-react"
import SectionHeader from "../ui/SectionHeader"
import ProjectCard from "../ui/ProjectCard"

export default function PersonalProjects() {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <SectionHeader icon={Code} title="Personal Projects" />

      <div className="grid grid-cols-1 gap-6">
        <ProjectCard
          title="Meus Desafios"
          description="A habit-building and goal-tracking platform that encourages users to take on challenges in areas like fitness, productivity, and personal development. Includes ranking, streak tracking, and community interaction features. Features both a web platform and a mobile app built with React Native for on-the-go challenge tracking."
          image="/images/projects/meus-desafios.png"
          url="https://meusdesafios.com.br"
          status="LIVE"
          tags={["Goal Tracking", "Community", "Personal Development"]}
        />

        <ProjectCard
          title="Papelando"
          description="A virtual stationery brand offering customized planners, notebooks, and journals. Focused on combining design and functionality, Papelando helps users stay organized and motivated through personalized print products."
          image="/images/projects/papelando.png"
          url="https://papelando.com.br"
          status="LIVE"
          tags={["E-commerce", "Custom Products", "Design"]}
        />

        <ProjectCard
          title="75 Hard Challenge"
          description="A digital log and motivation tool to track progress on the 75 Hard mental toughness program. Includes daily checklists, habit tracking, and visual streak indicators for enhanced commitment and discipline."
          image="/images/projects/75hard.png"
          url="https://75hard.com.br"
          status="PAUSED"
          tags={["Habit Tracking", "Fitness", "Mental Toughness"]}
        />

        <ProjectCard
          title="DietaFlex"
          description="A flexible diet management tool designed to help users balance macros and calories while maintaining freedom of food choice. Ideal for people seeking sustainability in their nutrition goals without strict food restrictions."
          image="/images/projects/dietaflex.png"
          url="https://dietaflex.com.br"
          status="PAUSED"
          tags={["Nutrition", "Macro Tracking", "Flexible Dieting"]}
        />
      </div>
    </section>
  )
}
