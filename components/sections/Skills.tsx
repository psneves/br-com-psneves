import { Code, Sparkles, Briefcase } from "lucide-react";

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

interface SkillGroupProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  startIndex: number;
}

function SkillGroup({ title, icon, skills, startIndex }: SkillGroupProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        {icon}
        <span>{title}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={skill} skill={skill} index={startIndex + index} />
        ))}
      </div>
    </div>
  );
}

export default function Skills(): JSX.Element {
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

      <div className="space-y-4">

        <SkillGroup
          title="Engineering"
          icon={<Code size={12} />}
          skills={["React", "Next.js", "NodeJS", "Python", "Docker", "DevSecOps", "CI/CD", "Robot Framework", "Playwright","Full Stack Architecture", "Artificial Intelligence", "API Platforms", "Cloud (AWS/GCP/Azure)", "Product Strategy"]}
          startIndex={5}
        />

        <SkillGroup
          title="Management"
          icon={<Briefcase size={12} />}
          skills={["Chapter Leadership", "Roadmapping", "OKRs", "Vendor Management", "Budget Management", "Stakeholder Management"]}
          startIndex={15}
        />
      </div>
    </section>
  );
}
