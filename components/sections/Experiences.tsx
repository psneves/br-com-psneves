import { Briefcase } from "lucide-react"
import SectionHeader from "../ui/SectionHeader"
import ExperienceItem from "../ui/ExperienceItem"

// Define the experience data
const johnsonAndJohnsonRoles = [
  {
    title: "IT Manager - Web and API Development",
    period: "Apr 2023 — Present",
    responsibilities: [
      "Lead talent acquisition and onboarding processes for digital product development teams",
      "Design comprehensive individual development plans and career progression pathways for chapter members",
      "Define strategic technology direction and establish professional training frameworks",
      "Drive organizational capability enhancement through targeted training events and mentorship programs",
      "Serve as escalation point for resource allocation and performance management issues",
      "Spearhead AI Agents initiative to automate software development and testing processes, targeting significant reduction in development lead time",
    ],
  },
  {
    title: "IT Lead - Technical Product Owner",
    period: "Sep 2020 — Mar 2023",
    responsibilities: [
      "Delivered end-to-end personalization, SSO integrations, web analytics, and search capabilities for Janssen Pro LATAM",
      "Managed product backlog and sprint planning using JIRA, aligning development with OKR-driven business objectives",
      "Implemented comprehensive CSAT solution measuring customer satisfaction across F2F interactions, webcalls, and events",
      "Served as technical lead for Oracle Eloqua email marketing platform across Janssen LATAM operations",
      "Conducted stakeholder reporting through OKR reviews and product demonstrations to executive leadership",
    ],
  },
  {
    title: "Service Specialist - Digital & RPA",
    period: "Feb 2019 — Aug 2020",
    responsibilities: [
      "Architected RPA and digital transformation solutions ensuring compliance with enterprise engineering standards",
      "Coordinated proof-of-concept initiatives and managed development capacity across regional and global teams",
      "Established quality assurance frameworks, generating performance metrics and risk escalation protocols",
      "Built strategic partnerships with regional and global IT stakeholders to drive digital innovation",
    ],
  },
  {
    title: "Sr. Information Security Analyst",
    period: "Apr 2018 — Feb 2019",
    responsibilities: [
      "Served as primary information security liaison for J&J Corporate, Vision Care, and LifeScan across Latin America",
      "Conducted comprehensive security assessments for acquired company applications during M&A integration",
      "Evaluated and validated security controls ensuring compliance with corporate security standards",
    ],
  },
  {
    title: "Information Security Analyst",
    period: "Jun 2015 — Mar 2018",
    responsibilities: [
      "Orchestrated enterprise-wide security awareness programs across Latin America, training business and IT personnel",
      "Performed application risk assessments and compliance analysis ensuring adherence to regulatory requirements",
      "Led SOX compliance testing for IT operations and participated in corporate internal audit processes",
      "Managed security incident response protocols for device theft/loss and coordinated physical security assessments",
      "Streamlined security training processes, achieving 50% reduction in training completion time",
      "Mentored and supervised departmental interns in security operations and compliance activities",
    ],
  },
  {
    title: "Information Security Intern",
    period: "Jan 2014 — Jun 2015",
    responsibilities: [
      "Managed vulnerability assessments and remediation for J&J Medical LATAM web applications",
      "Delivered security training to 800+ end-users, establishing foundational security awareness programs",
      "Provided SDLC methodology guidance to IT development teams ensuring secure coding practices",
      "Administered JD Edwards change management processes maintaining compliance and audit trails",
      "Developed and maintained IT policies and procedures for J&J Medical LATAM operations",
    ],
  },
]

const mentorInterativaRoles = [
  {
    title: "Software Developer",
    period: "Dec 2011 — Nov 2013",
    responsibilities: [
      "Developed learning management system with social network integration",
      "Created and launched the company's first mobile application",
      "Technologies: Java, Google App Engine, SQL Server, PHP, MySQL, PhoneGap",
    ],
  },
]

const stefaniniRoles = [
  {
    title: "Junior Software Developer",
    period: "Jan 2011 — Dec 2011",
    responsibilities: [
      "Led system migration initiatives, successfully translating legacy Delphi applications to modern Java architecture",
      "Engineered payment processing enhancements, implementing support for new credit card types in financial transaction systems",
      "Utilized enterprise technologies including Java, C#, Struts framework, SQL Server, and MySQL for full-stack development",
    ],
  },
]

export default function Experiences() {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <SectionHeader icon={Briefcase} title="Experience" />

      <div className="space-y-8">
        <ExperienceItem
          company="Johnson & Johnson"
          logo="/images/logos/jj-logo.webp"
          location="São José dos Campos-SP, Brazil"
          period="2014 — Present"
          roles={johnsonAndJohnsonRoles}
          defaultExpandedRole="IT Manager - Web and API Development"
        />

        <ExperienceItem
          company="Mentor Interativa"
          logo="/images/logos/mentor-logo.webp"
          location="São José dos Campos-SP, Brazil"
          period="Dec 2011 — Nov 2013"
          roles={mentorInterativaRoles}
        />

        <ExperienceItem
          company="Stefanini"
          logo="/images/logos/stefanini-logo.webp"
          location="Jaguariúna-SP, Brazil"
          period="Jan 2011 — Dec 2011"
          roles={stefaniniRoles}
        />
      </div>
    </section>
  )
}
