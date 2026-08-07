import { Briefcase, TrendingDown, Users, Code2 } from "lucide-react"
import SectionHeader from "../ui/SectionHeader"
import { summary, highlights } from "@/lib/data/profile"

const HIGHLIGHT_ICONS = [TrendingDown, Users, Code2]

export default function About(): JSX.Element {
  return (
    <section id="about" className="enhanced-card p-8">
      <SectionHeader icon={Briefcase} title="About" />
      <div className="space-y-6">
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground leading-relaxed text-lg">{summary.homeLead}</p>
          <p className="text-muted-foreground leading-relaxed">{summary.homeSecondary}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {highlights.map((highlight, index) => {
            const Icon = HIGHLIGHT_ICONS[index] ?? TrendingDown
            return (
              <div
                key={highlight.label}
                className="group p-5 rounded-xl border border-border/50 bg-gradient-to-br from-muted/20 to-muted/10 hover:from-muted/30 hover:to-muted/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-primary transition-colors" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{highlight.label}</div>
                    <div className="text-xs text-muted-foreground transition-colors">{highlight.description}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
