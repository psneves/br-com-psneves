import { Briefcase } from "lucide-react"
import SectionHeader from "../ui/SectionHeader"
import ExperienceItem from "../ui/ExperienceItem"

// Define the experience data
const johnsonAndJohnsonRoles = [
  {
    title: "IT Manager - Full Stack Chapter Lead",
    period: "Sep 2023 — Present",
    responsibilities: [
      "Own LATAM strategy and roadmap for AI‑enabled Web/API platforms; align with enterprise architecture and regulatory requirements",
      "Lead design of reusable frameworks, reference architectures and components to accelerate secure, scalable delivery",
      "Elevate engineering practices (DevSecOps, CI/CD, reliability & performance) with audit readiness",
      "Partner with regional BT and global architecture to shape demand, prioritize investments, and maximize business value",
      "Build and mentor a high‑performing chapter of principal engineers and SMEs; drive technical coaching and capability building",
      "Spearhead AI Agents initiative using generative & agentic AI to automate SDLC (dev/test) and reduce lead time while improving quality",
    ],
  },
  {
    title: "IT Lead - Full Stack Chapter Lead",
    period: "Apr 2023 — Oct 2023",
    responsibilities: [
      "Interview and onboard talent as required by digital products and Chapter growth",
      "Act as point of escalation for talent resource issues and Chapter member performance management",
      "Design individual development plans and career progression pathways for Chapter members",
      "Set strategic direction of Chapter's associated technologies/skillsets and professional training plans",
      "Lead training events and support the development of Chapter members through mentorship programs",
      "Propose new and better ways of leveraging technology and capabilities under Chapter purview",
    ],
  },
  {
    title: "IT Lead - Technical Product Owner",
    period: "Sep 2020 — Mar 2023",
    responsibilities: [
      "Owned roadmap and delivery for Janssen Pro LATAM: personalization, SSO (OIDC/SAML), analytics and search across multiple markets",
      "Defined API contracts, integration patterns and non‑functional requirements; improved system reliability, performance and observability",
      "Established OKRs/KPIs and stakeholder reporting; led demos and executive readouts to align product outcomes with business goals",
      "Led vendors and internal squads through Agile delivery; managed scope, budget and cross‑regional dependencies",
      "Ensured compliance and audit readiness focused on privacy and data protection",
    ],
  },
  {
    title: "Service Specialist - Digital & RPA",
    period: "Feb 2019 — Aug 2020",
    responsibilities: [
      "Architected intelligent automation (RPA) solutions and established platform governance aligned to enterprise standards",
      "Coordinated PoCs for automation opportunities; quantified ROI and scaled successful patterns across functions",
      "Established QA frameworks, delivery metrics and risk escalation protocols for automation initiatives",
      "Partnered with regional and global IT stakeholders to advance digital transformation",
    ],
  },
  {
    title: "Sr. Information Security Analyst",
    period: "Apr 2018 — Feb 2019",
    responsibilities: [
      "Security liaison for J&J Corporate, Vision Care and LifeScan across LATAM; guided risk posture and remediation",
      "Led application security assessments during M&A due diligence and integration",
      "Evaluated and strengthened security controls to meet corporate and regulatory requirements",
    ],
  },
  {
    title: "Information Security Analyst",
    period: "Jun 2015 — Mar 2018",
    responsibilities: [
      "Drove enterprise security awareness programs across LATAM for business and IT audiences",
      "Performed application risk assessments and compliance reviews; ensured adherence to corporate standards",
      "Led SOX testing for IT operations and partnered with corporate internal audit",
      "Coordinated incident response for device loss/theft and supported physical security assessments",
      "Optimized security training processes, reducing completion time by 50%; mentored interns",
    ],
  },
  {
    title: "Information Security Intern",
    period: "Jan 2014 — Jun 2015",
    responsibilities: [
      "Supported vulnerability assessment and remediation for J&J Medical LATAM web applications",
      "Delivered security training to 800+ end‑users and established foundational awareness programs",
      "Guided SDLC methodology adoption and secure coding practices for development teams",
      "Administered JD Edwards change management processes with compliant audit trails",
      "Maintained IT policies and procedures for LATAM operations",
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

const fajtecRoles = [
  {
    title: "Intern",
    period: "Jan 2010 — Jul 2010",
    responsibilities: [
      "Helped students of the course Introduction to Programming in Java to understand the course content",
      "Created and applied tests for the students",
      "Assisted in academic support for programming fundamentals and Java development",
    ],
  },
]

const dataComputadoresRoles = [
  {
    title: "Instructor",
    period: "May 2008 — Sep 2009",
    responsibilities: [
      "Taught students how to use computer, change Windows basic configurations and operate Microsoft Office applications",
      "Provided personalized computer training for individuals and small groups",
      "Developed instructional materials for basic computer literacy programs",
    ],
  },
]

export default function Experiences(): JSX.Element {
  return (
    <section className="enhanced-card p-8">
      <SectionHeader icon={Briefcase} title="Experience" subtitle="Professional Journey" />

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

        <ExperienceItem
          company="FAJTec - Faculdade Jaguariúna"
          logo="/images/logos/fajtec-logo.png"
          location="Jaguariúna-SP, Brazil"
          period="Jan 2010 — Jul 2010"
          roles={fajtecRoles}
        />

        <ExperienceItem
          company="Data Computadores"
          logo="/images/logos/data-computadores-logo.png"
          location="Jaguariúna-SP, Brazil"
          period="May 2008 — Sep 2009"
          roles={dataComputadoresRoles}
        />
      </div>
    </section>
  )
}
