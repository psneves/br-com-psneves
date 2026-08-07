import { Code } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/lib/data/profile";

const live = projects.filter((project) => project.status === "LIVE");
const paused = projects.filter((project) => project.status === "PAUSED");

export default function PersonalProjects(): JSX.Element {
  return (
    <section id="projects" className="enhanced-card p-6">
      <SectionHeader icon={Code} title="Things I Build" subtitle="Shipped and running" />

      <div className="grid grid-cols-1 gap-6">
        {live.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {paused.length > 0 && (
        <div className="mt-8 pt-6 border-t border-border/50">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">Archive</h3>
          <ul className="space-y-2">
            {paused.map((project) => (
              <li key={project.title} className="text-sm text-muted-foreground leading-relaxed">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">
                  {project.title}
                </a>
                {" — "}
                {project.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
