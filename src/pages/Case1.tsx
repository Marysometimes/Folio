import { CaseStudy } from "./CaseStudy";

export function Case1() {
  return (
    <CaseStudy
      title="UX Unite // Job Board"
      heroImage="https://raw.githubusercontent.com/Marysometimes/portfolio-images/4ccae615ab8c8ca4c8fe0d845ef542dc4ef9636c/UXUnite_paywall.png"
      finishedProductImage="https://raw.githubusercontent.com/Marysometimes/portfolio-images/800d277c0ffc9f0d523dc566c87f51fbcb17f07c/UXUnite_inside_paywall.png"
      background="UX Unite wanted to strengthen their Job Board so it could better support UX professionals across Denmark—not just Copenhagen. We ran a mixed-methods study to understand what job seekers actually value, and how the platform could complement LinkedIn instead of competing with it."
      currentCaseId={1}
      process={[
        {
          phase: "Research",
          description:
            "Ran a nationwide Maze survey (86 respondents) and a card-sorting exercise (61 completions) to map job-search behaviour, hygiene factors and potential value-add features. Confirmed that LinkedIn dominates job search, so UX Unite must lean into UX-specific advantages rather than replicating generic job board functionality.",
          image:
            "https://raw.githubusercontent.com/Marysometimes/portfolio-images/4ccae615ab8c8ca4c8fe0d845ef542dc4ef9636c/UXUnite_paywall.png",
        },
        {
          phase: "Synthesis",
          description:
            "Clustered survey patterns and coded open-ended responses to distinguish between baseline expectations and differentiators. Hygiene factors included location, job type, seniority, remote options, deadline and language. Value-adds included salary transparency and rich company insights (culture, process, team) that could form UX Unite’s unique selling point.",
          image:
            "https://raw.githubusercontent.com/Marysometimes/portfolio-images/4ccae615ab8c8ca4c8fe0d845ef542dc4ef9636c/UXUnite_paywall.png",
        },
        {
          phase: "Ideation & Prototyping",
          description:
            "Designed Figma mockups for both outside- and inside-paywall experiences: a clean list view focused on filters plus a richer single-job page. Conducted qualitative user tests with four UX professionals to evaluate expectations around job cards, filters vs. tags, placement of company insights, ad tolerance and AI summaries. Users consistently described company insights as unique and ‘worth paying for’, while tags in the cards were perceived as clutter when filters were available.",
          image:
            "https://raw.githubusercontent.com/Marysometimes/portfolio-images/800d277c0ffc9f0d523dc566c87f51fbcb17f07c/UXUnite_inside_paywall.png",
        },
        {
          phase: "Handover",
          description:
            "Shared our findings and concept directions with UX Unite founder Helena in a dedicated handover session, covering survey data, card-sorting results, user-test insights and a prioritised set of recommendations (ads, single-job view, company insights and location filters). Documented everything in a structured slide deck so the team can continue iterating. See the full handover report here: https://docs.google.com/presentation/d/1YZzmttR-EMwTk813K4lOrqklAXPo8lX1p0NPSFAS8p8/edit?usp=sharing",
          image:
            "https://raw.githubusercontent.com/Marysometimes/portfolio-images/800d277c0ffc9f0d523dc566c87f51fbcb17f07c/UXUnite_inside_paywall.png",
        },
      ]}
    />
  );
}
