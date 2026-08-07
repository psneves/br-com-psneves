import { Code, Sparkles } from "lucide-react";
import { skillGroups } from "@/lib/data/profile";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <span className="skill-badge animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
      {skill}
    </span>
  );
}

interface SkillGroupProps {
  title: string;
  skills: readonly string[];
  startIndex: number;
}

function SkillGroup({ title, skills, startIndex }: SkillGroupProps) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-muted-foreground">{title}</div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={skill} skill={skill} index={startIndex + index} />
        ))}
      </div>
    </div>
  );
}

export default function Skills(): JSX.Element {
  let cursor = 0;

  return (
    <section id="skills" className="enhanced-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Code className="text-primary" size={20} />
        </div>
        <div className="space-y-0">
          <h3 className="text-lg font-semibold gradient-text leading-tight mb-0">Core Skills</h3>
          <span className="text-xs text-muted-foreground block -mt-1">Technologies &amp; Expertise</span>
        </div>
        <Sparkles className="ml-auto text-primary/60 animate-pulse" size={16} />
      </div>

      <div className="space-y-4">
        {skillGroups.map((group) => {
          const startIndex = cursor;
          cursor += group.skills.length;
          return <SkillGroup key={group.title} title={group.title} skills={group.skills} startIndex={startIndex} />;
        })}
      </div>
    </section>
  );
}
