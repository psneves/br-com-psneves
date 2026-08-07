# CV Gaps

Information that is missing or unverified and would strengthen the CV if you
provide it. Nothing here was invented or guessed — where a number was missing,
the sentence was written truthfully without it.

Everything below maps to a specific place in `lib/data/profile.ts`, which both
the homepage and `/cv` render from.

---

## 1. Impact numbers

**Closed since the first pass:**
- **US$1.2M in cost avoidance through July 2026** from putting AI to work across the whole delivery process — planning, building, testing and shipping — not only coding assistance. This is the only delta number on the CV and it carries the entire outcome case: it closes the summary, is the second bullet of the current role, and is a homepage highlight card.
- **Automated tests on every initiative the team owns.** Not a before→after figure, but a binary state change with a clear consequence, which is the next best thing.

Two cautions on the US$1.2M, because one number doing this much work is fragile:
- It is stated exactly as given — seven months, 2026 through July. **Do not annualize it.** The chatbot grounding carries an explicit guardrail against that.
- Be ready for "how was that calculated?". Whatever the methodology is — hours saved times rate, headcount not backfilled, vendor scope not purchased — you need to state it in one sentence. It is the first thing an interviewer will probe.
- **The internal program that drives it is unnamed**, per your decision not to publish internal J&J project names. A named, sponsored program is stronger evidence than "the internal program behind it" — it converts a personal practice into an organizational fact, and nobody invents an acronym for a hobby. If the name is not actually confidential, naming it is a cheap upgrade: `experiences[0].roles[0]` bullet 3.

**Still open:**

| Gap | Where it would go |
|---|---|
| Any before→after on the production systems you build — latency, throughput, error rate, records processed. The automated-tests line covers process; this would cover the systems themselves | `experiences[0].roles[0]` bullet 6 |
| What the test coverage push changed — escaped defects, rollback rate, release frequency before vs. after | `experiences[0].roles[0]` bullet 7 |
| One shipped outcome from among the 18 initiatives, so that line reads as delivered rather than steered | `experiences[0].roles[0]` bullet 5 |
| Traffic, markets, users or SSO integrations on the Innovative Medicine LATAM portal | `experiences[0].roles[1]` bullet 1 |

## 2. People-management evidence

Currently the only people claim is span of control. These are what an EM screener
actually probes, and none of it exists anywhere in the repo.

| Gap | Where it would go |
|---|---|
| Engineers hired since Apr 2023, and for which roles | `experiences[0].roles[0]` bullet 1 |
| Promotions or level changes you drove (e.g. trainee → junior, mid → senior) and over what period | new bullet, `experiences[0].roles[0]` |
| Retention / regretted attrition over your tenure | new bullet, `experiences[0].roles[0]` |
| Whether leveling and performance run against a written rubric | `experiences[0].roles[0]` bullet 1 |

## 3. Team and org scope — RESOLVED

The site previously published two incompatible figures (`~70 professionals` vs
`50+ engineers, 9 internal + 40+ contractors`, where 9 + 40 = 49). Both are gone.

The CV now states what you confirmed: **5 direct reports**, an **11-engineer J&J
group** (2 coordinators, 3 senior, 4 mid-level, 1 trainee, 1 intern), **~70
contractors** across the delivery org, and **18 parallel initiatives** supported
through vendor management, budget ownership and technical direction.

One thing to be ready for: "supports 18 parallel initiatives" invites the
question *"what did any of them ship?"*. One named outcome from one of the 18
would convert that line from scope into evidence — see §1.

## 4. Meus Desafios

| Gap | Where it would go |
|---|---|
| Downloads, active users, or Premium conversion — any real figure | `experiences[1].roles[0]` bullets |
| App Store and Google Play listing URLs (the site links to both; the CV only names the platforms) | `experiences[1]` and `projects[0]` |
| A specific feature you deliberately cut or deferred — a named tradeoff beats the generic version | `experiences[1].roles[0]` bullet 4 |
| Confirm 2026 is the founding year. It makes the venture ~7 months old, which is fine, but it is the first thing a reader will notice next to a 12-year tenure | `experiences[1].period` |

## 5. Systems deliberately not described

At your instruction the CV no longer describes individual internal systems at
all, named or unnamed. The bullet reads "Design and write the production systems
the group ships — TypeScript, Next.js, PostgreSQL, TypeORM, Docker", and the
chatbot grounding carries an explicit guardrail against elaborating.

**The cost, so you can weigh it:** a named system with a named tradeoff is the
single strongest proof of hands-on architecture. That is now entirely gone from
the J&J side — the internal Next.js template bullet was removed too, at your
instruction. What carries claim #2 today is one generic line naming the stack,
the automated-testing push, and everything under Independent Product, which is
public and has no confidentiality constraint.

This is the weakest of the three differentiators as the CV now stands. Meus
Desafios is doing most of the work for it.

If you ever get clearance for even a generic business-unit label, that bullet is
where it goes: `experiences[0].roles[0]`.

## 6. Verify before an interview leans on it

| Item | Why |
|---|---|
| **Cloud depth.** The old CV claimed "Cloud (AWS/GCP/Azure)" — all three. It has been removed rather than guessed. Which one do you have real depth in, down to named services? | `skillGroups[0]` |
| **CI system by name.** "CI/CD" was listed but the actual tool never was. GitHub Actions? Jenkins? Azure DevOps? | `skillGroups[0]` |
| **Kubernetes.** Present in the old `PauloNeves.md` competencies, absent from every experience bullet. Dropped rather than guessed. | `skillGroups[0]` |
| **This site as a portfolio asset.** It has an OpenAI tool-calling chat endpoint — genuinely good hands-on evidence, currently claimed nowhere. Worth one line, but verify what it actually does first: `CLAUDE.md` claimed zod validation and rate limiting, and `lib/rate-limit.ts` does not exist. | new bullet, `experiences[1]` or a Selected Work block |
| **English proof.** "Fluent" is a self-assessment. If you work in English daily with global stakeholders, say so concretely. | `languages` |

## 7. Choices made for you — flip any of these with one line

| Choice | Where | How to flip |
|---|---|---|
| **Internal title hidden on the print CV.** "IT Manager — Full Stack Chapter Lead" shows on the homepage but not in the PDF, because "IT Manager" reads as internal back-office at a product company. Some background checks match on legal title. | `app/cv/page.tsx`, the `RECENT_JJ_ROLES` map | Pass `internalTitle={role.internalTitle}` back into `RoleBlock` |
| **"18 parallel initiatives" published**, resolving the old `17` vs `~15` contradiction with the number you confirmed. Note that "initiatives" is sponsor vocabulary — it reads as steered rather than shipped, which is why §1 asks for one outcome from among them. | `experiences[0].roles[0]` bullet 2 | Drop the bullet, or attach an outcome to it |
| **Language proficiency bars removed** from the homepage. They encoded invented precision (100% / 90% / 85%). | `components/sections/Languages.tsx` | Restore the bars if you want them, with levels you can defend |
| **Data Computadores (2008–2009) restored** as the earliest one-line entry, completing the timeline back to the start of the 17-year count. | `earlierExperience` | Remove the entry |
| **`public/PauloNeves.pdf` deleted.** A publicly served orphan referenced by no component, claiming "12+ years" with Technical Product Owner as the current role. | deleted | Recover from the pre-rewrite bundle at `/Users/psneves/dev/br-com-psneves-pre-author-rewrite.bundle` |
| **AI practice removed from the print CV.** The standalone section is gone; its five mechanisms are folded into the two current roles — specs/reviewer-agent/verification-gate under J&J, worktrees/headless under Meus Desafios. The homepage keeps the dedicated `AiPractice` section, where there is no page budget. | `app/cv/page.tsx`, `aiPractice` in `lib/data/profile.ts` | Re-add a `<Section>` rendering `aiPractice.points` on page 1 |
| **Auth.js dropped entirely**, including the skills chip (you asked for it off the template bullet; leaving it in Skills alone would have read as inconsistent). Entra SSO is still named. | `skillGroups[0]`, `experiences[0].roles[0]` | Re-add "Auth.js" to the Build with group |
| **Meus Desafios moved to its own "Independent Product" section**, out of Professional Experience. Named to avoid "project"/"side", which makes a reader relocate the entry mentally to the bottom of the page. It still sits on page 1, directly under the J&J block. | `app/cv/page.tsx` | Move the `<Section>` contents back under Professional Experience |
| **Internal Next.js template bullet removed** at your instruction — see §5 for what that costs. | `experiences[0].roles[0]` | Re-add the bullet |
| **Pre-2014 roles compressed to one line each**, security years kept with bullets, per your choice. | `earlierExperience` | Move any role back into `experiences` for full bullets |

## 8. Facts that were contradictory and how they were resolved

No averaging, no invention — the majority or the internally consistent value won.

| Fact | Was | Now | Why |
|---|---|---|---|
| IT Lead / Chapter Lead end date | `Aug 2023` (3 files) vs `Oct 2023` (`PauloNeves.md`) | Folded into the current role starting `Apr 2023` | Oct overlapped the Sep 2023 start of the successor role in that same file |
| InfoSec Intern end date | `May 2015` (CV) vs `Jun 2015` (3 files) | `May 2015` | The majority value overlapped the Jun 2015 start of the next role |
| FAJTec title | `Instructor - Java Programming` (CV) vs `Intern` (3 files) | `Teaching Assistant, Java` | `summary.txt` described it as teaching assistant; "Instructor" was the most senior reading and the minority one |
| Service Specialist scope | RPA dropped (CV) vs `Digital & RPA` (3 files) | `Service Specialist — Digital & RPA` | Majority, and it explains the Blue Prism certification |
| TPO department | `Innovative Medicine` (CV) vs `Janssen` (2 files) | `Innovative Medicine` | Commit `3abdc6b "fixing department name"` set this deliberately; the markdown files were the stale side |
| Residence | `Jacareí` (4 files) vs `São José dos Campos` (`summary.txt`) | Lives in `Jacareí`, works from `São José dos Campos` | Both are true and were being conflated; the chatbot was stating the wrong city |
| Phone | `99180-1173` vs `99180-1176` (cover letter) | `99180-1173` | Majority. The `tel:` href was also missing a digit and dialed a dead number |
| Stefanini title | `Jr. Developer` (CV) vs `Junior Software Developer` (3 files) | `Junior Software Developer` | Majority |
| Site metadata title | `IT Manager & Digital Transformation Leader` | `Full Stack Engineering Manager` | It was the browser tab, Google result and every link preview, contradicting the page body |

## 9. Repo issues found but left alone — say the word

- **`npm run lint` does not work.** There is no ESLint config; the command drops into an interactive setup prompt. Not touched because it is outside the CV scope.
- **`next.config.js` disables TypeScript and ESLint build enforcement** (`ignoreBuildErrors`, `ignoreDuringBuilds`) and sets `images.unoptimized` — the exact opposite of what `CLAUDE.md` claimed. Left as-is; turning them on would surface 46 pre-existing type errors.
- **46 pre-existing type errors**, all in unused shadcn components under `components/ui/` plus `hooks/use-toast.ts`. Unchanged by this work — verified identical count before and after.
- **~150 lines of dead print CSS** in `app/globals.css` (`.pdf-document`, `.pdf-header`, `.pdf-section`, `.company-block`, `.role-item`) with zero usages repo-wide. It will mislead anyone tuning print layout.
- **Commit authorship was rewritten across all local history** to `psneves <paulo@psneves.com.br>`, including the 18 commits generated by Vercel's v0 bot. `origin/main` and `origin/v0updates` still hold the pre-rewrite identities until a `git push --force-with-lease`. Pre-rewrite backup: `/Users/psneves/dev/br-com-psneves-pre-author-rewrite.bundle`.
- **`docs/cover-letter-airbnb-sr-manager.md`** still states the old `50+ engineers` figure and the `99180-1176` phone number. It is a dated artifact, not published by the site.
