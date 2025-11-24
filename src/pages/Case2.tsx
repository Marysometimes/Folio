import { CaseStudy } from "./CaseStudy";

export function Case2() {
  return (
    <CaseStudy
      title="DFDS // Navigation"
      heroImage="https://raw.githubusercontent.com/Marysometimes/portfolio-images/f08632c9f431e1502a9e68d8d1f15ea1491c5186/DFDS_navigation.png"
      finishedProductImage="https://raw.githubusercontent.com/Marysometimes/portfolio-images/f08632c9f431e1502a9e68d8d1f15ea1491c5186/DFDS_navigation.png"
      background="DFDS’ two main B2B sites—Freight Shipping and Logistics—were structured around internal silos that users didn’t understand. The challenge was to reduce lostness, improve findability and create a single, intuitive entry point aligned with real user mental models."
      currentCaseId={2}
      process={[
        {
          phase: "Discovery",
          description:
            "Analyzed analytics and existing IA to identify lostness patterns. Conducted qualitative interviews confirming that users don’t distinguish between ‘Logistics’ and ‘Freight Shipping’—they simply want to move cargo from A to B.",
          image:
            "https://raw.githubusercontent.com/Marysometimes/portfolio-images/f08632c9f431e1502a9e68d8d1f15ea1491c5186/DFDS_navigation.png",
        },
        {
          phase: "Strategy",
          description:
            "Defined a unified B2B entry point structured around user intent rather than internal business units. Created a simplified taxonomy and introduced visible business-unit switching to support upselling without creating friction.",
          image:
            "https://raw.githubusercontent.com/Marysometimes/portfolio-images/f08632c9f431e1502a9e68d8d1f15ea1491c5186/DFDS_navigation.png",
        },
        {
          phase: "Design",
          description:
            "Redesigned the navigation with clear top tasks (Book, Track, Schedules), visible BUs across breakpoints, and a mobile IA that removed redundant nesting. Ensured consistency using heuristics, card sorting and iterative validation.",
          image:
            "https://raw.githubusercontent.com/Marysometimes/portfolio-images/f08632c9f431e1502a9e68d8d1f15ea1491c5186/DFDS_navigation.png",
        },
        {
          phase: "Implementation",
          description:
            "Delivered responsive navigation patterns used across DFDS product teams. Collaborated closely with devs to ensure feasibility and alignment with the design system. Validated through user testing and refined before rollout.",
          image:
            "https://raw.githubusercontent.com/Marysometimes/portfolio-images/f08632c9f431e1502a9e68d8d1f15ea1491c5186/DFDS_navigation.png",
        },
      ]}
    />
  );
}
