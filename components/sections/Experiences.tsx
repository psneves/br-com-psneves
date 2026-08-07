import { Briefcase } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import ExperienceItem from "../ui/ExperienceItem";
import { experiences, earlierExperience } from "@/lib/data/profile";

const CURRENT_ROLE_TITLE = "Full Stack Engineering Manager";

export default function Experiences(): JSX.Element {
  return (
    <section id="experience" className="enhanced-card p-4 sm:p-6 lg:p-8">
      <SectionHeader icon={Briefcase} title="Experience" subtitle="Professional Journey" />

      <div className="space-y-6 sm:space-y-8">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.company}
            company={experience.company}
            context={experience.context}
            logo={experience.logo}
            location={experience.location}
            period={experience.period}
            url={experience.url}
            roles={experience.roles}
            defaultExpandedRole={CURRENT_ROLE_TITLE}
          />
        ))}

        {/* Pre-2014 roles: one line each. Nothing this old earns a bullet list. */}
        <div className="border-l-2 border-primary/20 pl-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Earlier Experience
          </h3>
          <ul className="space-y-2">
            {earlierExperience.map((role) => (
              <li key={`${role.company}-${role.period}`} className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{role.title}</span> — {role.company}{" "}
                <span className="font-mono text-xs opacity-75">({role.period})</span>. {role.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
