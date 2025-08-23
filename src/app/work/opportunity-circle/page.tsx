import Case from "@/components/case";

export default function OpportunityCircleCase() {
  return (
    <Case
      title="The Opportunity Circle Website"
      subtitle="A clear, inclusive web presence for a local adult center—making programs, schedules, and donations simple to find."
      role="Designer & Developer"
      client="321Buddy"
      heroSrc="/featured-opportunity.jpg"
      heroAlt="Opportunity Circle website preview"
      sections={[
        {
          title: "People couldn’t find them online—information lived in pockets",
          tocLabel: "Problem",
          intro:
            "There was no proper website. Information about the organization and the new Opportunity Circle program was fragmented across posts and word-of-mouth, which made it hard for the community to discover services or get basic details.",
          bullets: [
            { title: "No central source of truth", body: "Programs, hours, and contact details weren’t collected in one place." },
            { title: "Low discoverability", body: "Without a website, search engines and referrals hit dead-ends." },
            { title: "Program uncertainty", body: "The Opportunity Circle launch had no obvious home for updates or sign-ups." },
          ],
          imageSrc: "/hero-1.jpg",
          imageAlt: "Before: scattered info",
        },
        {
          eyebrow: "What stakeholders needed",
          title: "A trustworthy site with essential info, schedules, and donations",
          tocLabel: "Goals",
          intro:
            "Create a web presence that clearly communicates who they are, what the new program offers, when classes happen, and how to support the mission.",
          bullets: [
            { title: "Clarity first", body: "Address, hours, programs, and staff—front and center." },
            { title: "Schedules & sign-ups", body: "Share class calendars and simple paths to register." },
            { title: "Donations", body: "Transparent donation entry with clear impact messaging." },
            { title: "Accessibility", body: "Readable typography, contrast, keyboard nav, and semantic HTML." },
          ],
          imageSrc: "/hero-2.jpg",
          imageAlt: "Goals and primary pages",
        },
        {
          eyebrow: "Design Response",
          title: "Information architecture + component library built on real content",
          tocLabel: "Design Response",
          intro:
            "We mapped the content, then built modular sections so the team can update pages without touching code.",
          bullets: [
            { title: "IA & navigation", body: "Simple top-level nav for Programs, Schedule, About, and Support." },
            { title: "Reusable components", body: "Hero, program cards, schedule blocks, CTA panels, and FAQs." },
            { title: "Editor-friendly", body: "Content structured so staff can add classes or announcements quickly." },
            { title: "Performance & SEO", body: "Lean assets, alt text, metadata, and Open Graph for shareability." },
          ],
          imageSrc: "/hero-3.jpg",
          imageAlt: "Component system",
        },
        {
          eyebrow: "Outcome",
          title: "A single, maintained source of truth for the community",
          tocLabel: "Outcome",
          intro:
            "After launch, people can find the program, check the schedule, and donate without friction. The staff can publish updates in minutes.",
          bullets: [
            { title: "Discoverability", body: "Searchable, shareable, and trustworthy presence." },
            { title: "Clarity", body: "Program info and schedules are always up to date." },
            { title: "Sustainability", body: "Non-technical staff can maintain the site." },
          ],
          imageSrc: "/hero-4.jpg",
          imageAlt: "Live pages",
        },
      ]}
    />
  );
}
