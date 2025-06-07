import { Briefcase } from "lucide-react"
import SectionHeader from "../ui/SectionHeader"

export default function About() {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <SectionHeader icon={Briefcase} title="About" />
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 leading-relaxed mb-4">
          Experienced IT professional with 15+ years in technology leadership, specializing in digital transformation,
          team management, and product development.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Bachelor of Computer Science from Federal University of São Paulo with background as People Manager, Technical
          Product Owner, Service Specialist, Information Security Analyst, and Software Developer.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Currently leading web and API development initiatives at Johnson & Johnson, focusing on strategic technology
          direction and team development.
        </p>
      </div>
    </section>
  )
}
