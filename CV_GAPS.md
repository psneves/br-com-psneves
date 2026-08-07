# CV Gaps

Information that is missing or unverified and would strengthen the CV if you
provide it. Nothing here was invented or guessed — where a number was missing,
the sentence was written truthfully without it.

Everything below maps to a specific place in `lib/data/profile.ts`, which both
the homepage and `/cv` render from.

---

## 1. Impact numbers — the biggest gap

The CV currently has **scope numbers** (5 direct reports, 11 engineers, 17
years) but **no delta numbers** (before → after). Scope proves seniority; delta
proves effectiveness. A hiring manager reads scope-only as "steered a portfolio"
rather than "owned an outcome". One real delta per recent role would do more for
this CV than any rewording.

| Gap | Where it would go |
|---|---|
| Any before→after on the integration hub or checkout platform — latency, throughput, error rate, records processed, integrations replaced | `experiences[0].roles[0]` bullet 2 |
| How many teams adopted the internal Next.js template, and what it saved them (setup days, duplicated auth/observability work) | `experiences[0].roles[0]` bullet 3 |
| Anything measured about the agent-assisted development program — engineers using it, PRs it pre-checks, review load, cycle time | `experiences[0].roles[0]` bullet 4 and `aiPractice` |
| Deploy frequency, lead time or change-failure rate before vs. after you set the review and release bar | `experiences[0].roles[0]` bullet 5 |
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

## 3. Team and org scope — unresolved contradiction

The site previously published **two incompatible figures** for the same role,
and neither is currently on the CV:

- `~70 professionals across employees and vendors` — old `app/cv/page.tsx` and `Experiences.tsx`
- `50+ engineers, being 9 internal employees and 40+ contractors` — `docs/cover-letter-airbnb-sr-manager.md` (and 9 + 40 = 49, which is not "50+")

You confirmed **5 direct reports** and **11 J&J engineers** (2 coordinators,
3 senior, 4 mid-level, 1 trainee, 1 intern), which is what the CV now states.

**Still needed:** the true total including partner/vendor squads, if you want the
wider scope on the page. Right now the CV says nothing about it, which is safe
but leaves influence scope invisible. It would go in
`experiences[0].roles[0]` bullet 1 as "…within a ~N-person delivery org spanning
employees and partner squads".

## 4. Meus Desafios

| Gap | Where it would go |
|---|---|
| Downloads, active users, or Premium conversion — any real figure | `experiences[1].roles[0]` bullets |
| App Store and Google Play listing URLs (the site links to both; the CV only names the platforms) | `experiences[1]` and `projects[0]` |
| A specific feature you deliberately cut or deferred — a named tradeoff beats the generic version | `experiences[1].roles[0]` bullet 4 |
| Confirm 2026 is the founding year. It makes the venture ~7 months old, which is fine, but it is the first thing a reader will notice next to a 12-year tenure | `experiences[1].period` |

## 5. Systems described but not named

You asked that J&J project names not be published, so the CV describes them
generically: "an integration hub for the Innovative Medicine business" and
"a checkout platform".

**Needed to sharpen without naming:** a one-line description of what each system
actually does and for whom — what the hub integrates, who the checkout serves.
Right now "a checkout platform" carries almost no information. Even
"a checkout platform for the vision-care business" would be materially stronger,
and it names a business unit rather than a project.

→ `experiences[0].roles[0]` bullet 2 and `summary.cv`.

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
| **"17 parallel initiatives" removed entirely.** It contradicted "~15" elsewhere, and "initiatives" is sponsor vocabulary — nothing in an initiative ever shipped. | removed from all files | Re-add with the true number if you want portfolio breadth visible |
| **Language proficiency bars removed** from the homepage. They encoded invented precision (100% / 90% / 85%). | `components/sections/Languages.tsx` | Restore the bars if you want them, with levels you can defend |
| **`public/PauloNeves.pdf` deleted.** A publicly served orphan referenced by no component, claiming "12+ years" with Technical Product Owner as the current role. | deleted | `git checkout backup-main -- public/PauloNeves.pdf` |
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
- **38 older commits** still carry the `Neves, Paulo [TS LATAM] <pneves3@its.jnj.com>` identity, beyond the 21 that were rewritten.
- **`docs/cover-letter-airbnb-sr-manager.md`** still states the old `50+ engineers` figure and the `99180-1176` phone number. It is a dated artifact, not published by the site.
