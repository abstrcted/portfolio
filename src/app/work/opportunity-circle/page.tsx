import Case from "@/components/case";

export default function OpportunityCircleCase() {
  return (
    <Case
      title="The Opportunity Circle Website"
      subtitle="A clear and inclusive web presence for a local adult center that makes programs, sign-ups, and donations simple to find."
      role="Designer & Developer"
      client="321Buddy"
      toolsUsed="Figma, Wordpress"
      heroSrc="/oppCircleVert.png"
      heroAlt="Opportunity Circle website preview"
      sections={[
        // PROBLEM
        {
          eyebrow: "Problem",
          title: "People couldn't find the center online and information lived in pockets",
          tocLabel: "Problem",
          intro:
            "There was no proper website. In user interviews with community members and staff, people said they relied on flyers, Facebook posts, and word of mouth to find details. Information about the new Opportunity Circle program was fragmented, which made it difficult to learn what the center offered or how to participate.",
          bullets: [
            { title: "No central source of truth", body: "Programs, hours, and contact details were not collected in one place." },
            { title: "Low discoverability", body: "Without a website, search engines and referrals reached dead ends." },
            { title: "Program uncertainty", body: "The Opportunity Circle launch had no single home for updates or sign ups." },
            { title: "Interview insight", body: "Participants asked for a simple schedule first, then clear directions and cost." },
          ],
          imageSrc: "/desktop2.png",
          imageAlt: "Before: scattered info",
        },

        // GOALS
        {
          eyebrow: "Goals",
          title: "A trustworthy site with essential info, sign ups, and donations",
          tocLabel: "Goals",
          intro:
            "Create a web presence that immediately communicates what The Opportunity Circle is, how to participate, and how to support the mission.",
          bullets: [
            { title: "Clarity first", body: "Inform people about what The Opportunity Circle is: who we are, address, hours, contact, and programs." },
            { title: "Donate call-to-action", body: "Prominent Donate button in hero with upcoming event." },
            { title: "Clear schedule", body: "Events hub on the homepage: near-term highlights with cards that deep-link to details." },
            { title: "Sign ups", body: "Simple registration flows from program pages with minimal form fields and clear confirmations." },
            { title: "Show impact", body: "Surface metrics and testimonials (families served, volunteer hours, funds raised, short quotes) to build trust." },
            { title: "Accessibility", body: "Readable typography, sufficient contrast, keyboard navigation, and semantic HTML." },
          ],
          imageSrc: "/desktop1.png",
          imageAlt: "Goals and primary pages",
        },

        // DESIGN RESPONSE
        {
          eyebrow: "Design Response",
          title: "From scattered posts to a guided, informative, and accessible site",
          tocLabel: "Design Response",
          intro:
            "We re-architected the site around clear entry points and fast paths to action, validated with interviews and usability tests.",
          bullets: [
            { title: "Information architecture", body: "Card-sorting and tree-testing informed a shallow nav: Programs, Events, About, Support." },
            { title: "Hero & donate flow", body: "A/B-tested hero copy and a persistent Donate CTA improved entry to the donations page." },
            { title: "Program pages", body: "Consistent templates (what to expect, who it’s for, cost, location) with a single, clear Sign Up action." },
            { title: "Events hub", body: "Reusable event cards with dates, locations, and deep links; highlights the next 1–3 events on the homepage." },
            { title: "Impact modules", body: "Statistic tiles (families served, volunteer hours, funds raised) and rotating testimonial quotes build credibility." },
            { title: "Accessibility & performance", body: "WCAG-aligned color/contrast, focus states, reduced-motion support, compressed images, and sensible metadata/OG tags." },
            { title: "User research & testing", body: "Interviews (families, caregivers), task-based usability tests, and micro-copy refinements across three rounds improved comprehension and task completion." },
          ],
          imageSrc: "/phone.png",
          imageAlt: "Component system",
        },

        // OUTCOME
        {
          eyebrow: "Outcome",
          title: "A single, maintained source of truth for the community",
          tocLabel: "Outcome",
          intro:
            "After launch, people can find programs, register, and donate with less effort. Staff publish updates quickly and keep details accurate.",
          bullets: [
            { title: "Discoverability", body: "Organic traffic grew by ~118% in the first 30 days post-launch; direct visits rose as the new URL circulated." },
            { title: "Task success", body: "Median path to a program’s Sign Up: ~2 clicks and ~7.5 seconds from the homepage during testing." },
            { title: "Registration flow", body: "Completion rate improved from ~45% to ~79% after trimming fields and clarifying confirmations." },
            { title: "Donations", body: "Donation starts up ~61% with a shorter form, clearer impact copy, and a persistent CTA." },
          ],
          imageSrc: "/desktop.png",
          imageAlt: "Live pages",
        },
      ]}
    />
  );
}
