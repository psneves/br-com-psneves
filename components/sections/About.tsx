import { Briefcase, Award, Users, Zap } from "lucide-react"
import SectionHeader from "../ui/SectionHeader"

export default function About(): JSX.Element {
  const highlights = [
    {
      icon: Award,
      label: "15+ Years",
      description: "Technology Leadership"
    },
    {
      icon: Users,
      label: "Team Management",
      description: "Cross-functional teams"
    },
    {
      icon: Zap,
      label: "Digital Transformation",
      description: "Enterprise solutions"
    }
  ]

  return (
    <section className="enhanced-card p-8">
      <SectionHeader icon={Briefcase} title="About" />
      <div className="space-y-6">
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Experienced IT professional with <span className="font-semibold text-foreground">15+ years</span> in technology leadership, 
            specializing in digital transformation, team management, and product development.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Bachelor of Computer Science from Federal University of São Paulo with background as People Manager, Technical
            Product Owner, Service Specialist, Information Security Analyst, and Software Developer.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently leading web and API development initiatives at <span className="font-semibold text-foreground">Johnson & Johnson</span>, 
            focusing on strategic technology direction and team development.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group p-4 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/50 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{highlight.label}</div>
                  <div className="text-xs text-muted-foreground">{highlight.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
