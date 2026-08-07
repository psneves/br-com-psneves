import { Sparkles } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { aiPractice } from "@/lib/data/profile";

/**
 * Deliberately its own section rather than a line in Skills: the practice is
 * how the work gets done, not a technology on a list. Every point names a
 * mechanism and the failure it prevents — no metrics, none of it is measured.
 */
export default function AiPractice(): JSX.Element {
  return (
    <section id="ai-practice" className="enhanced-card p-4 sm:p-6 lg:p-8">
      <SectionHeader icon={Sparkles} title={aiPractice.title} subtitle="How the work gets done" />

      <p className="text-muted-foreground leading-relaxed mb-6">{aiPractice.intro}</p>

      <ul className="space-y-4">
        {aiPractice.points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2.5" aria-hidden="true"></span>
            <span className="text-muted-foreground leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
