import { Code, Sparkles } from "lucide-react";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <span
      className="skill-badge animate-scale-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {skill}
    </span>
  );
}

export default function Skills(): JSX.Element {
  const skills = [
    "Full Stack (React/NextJS/NodeJS/Python)",
    "API Platforms",
    "Cloud (AWS/GCP/Azure)",
    "AI/IA Architecture",
    "Generative & Agentic AI",
    "Kubernetes & Docker",
    "DevSecOps & CI/CD",
    "Enterprise Architecture",
    "Security, Privacy & Compliance",
    "Product & Platform Management",
    "Roadmapping & OKRs",
    "Stakeholder Management",
    "People Leadership",
    "Vendor & Budget Management",
  ];

  return (
    <section className="enhanced-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Code className="text-primary" size={20} />
        </div>
        <div className="space-y-0">
          <h3 className="text-lg font-semibold gradient-text leading-tight mb-0">
            Core Skills
          </h3>
          <span className="text-xs text-muted-foreground block -mt-1">
            Technologies & Expertise
          </span>
        </div>
        <Sparkles className="ml-auto text-primary/60 animate-pulse" size={16} />
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={skill} skill={skill} index={index} />
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="text-xs text-muted-foreground text-center">
          {skills.length} core competencies
        </div>
      </div>
    </section>
  );
}
