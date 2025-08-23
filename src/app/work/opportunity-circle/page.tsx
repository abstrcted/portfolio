import Case from "@/components/case";

export default function OpportunityCircleCase() {
  return (
    <Case
      title="The Opportunity Circle Website"
      subtitle="A clear and inclusive web presence for a local adult center that makes programs, schedules, and donations simple to find."
      role="Designer & Developer"
      client="321Buddy"
      heroSrc="/oppCircleVert.png"
      heroAlt="Opportunity Circle website preview"
      sections={[
        // PROBLEM
        {
          eyebrow: "Problem",
          title: "People could not find the center online and information lived in pockets",
          tocLabel: "Problem",
          intro:
            "There was no proper website. In user interviews with community members and staff, people said they relied on flyers, Facebook posts, and word of mouth to find details. Information about the new Opportunity Circle program was fragmented, which made it difficult to learn what the center offered or how to participate.",
          bullets: [
            { title: "No central source of truth", body: "Programs, hours, and contact details were not collected in one place." },
            { title: "Low discoverability", body: "Without a website, search engines and referrals reached dead ends." },
            { title: "Program uncertainty", body: "The Opportunity Circle launch had no single home for updates or sign ups." },
            { title: "Interview insight", body: "Participants asked for a simple schedule first, then clear directions and cost." },
          ],
          imageSrc: "/hero-1.jpg",
          imageAlt: "Before: scattered info",
        },

        // GOALS
        {
          eyebrow: "Goals",
          title: "A trustworthy site with essential info, schedules, and donations",
          tocLabel: "Goals",
          intro:
            "Create a web presence that clearly communicates who the center is, what the program offers, when classes happen, and how to support the mission.",
          bullets: [
            { title: "Clarity first", body: "Address, hours, programs, and staff at the top of the page." },
            { title: "Schedules and sign ups", body: "Publish a readable calendar with direct paths to register." },
            { title: "Donations", body: "Simple entry, clear impact messaging, and receipts." },
            { title: "Accessibility", body: "Readable typography, sufficient contrast, keyboard navigation, and semantic HTML." },
          ],
          imageSrc: "/hero-2.jpg",
          imageAlt: "Goals and primary pages",
        },

        // DESIGN RESPONSE
        {
          eyebrow: "Design Response",
          title: "Information architecture and reusable components based on real content",
          tocLabel: "Design Response",
          intro:
            "We mapped the content from interviews and past posts, then built a modular system so staff can update pages without touching code. The design prioritizes the schedule and program details on every path.",
          bullets: [
            { title: "IA and navigation", body: "Shallow structure with Programs, Schedule, About, and Support in the top nav." },
            { title: "Homepage hierarchy", body: "Hero statement, upcoming classes, program cards, and a clear donate call to action." },
            { title: "Component library", body: "Program cards, schedule blocks, announcement banners, CTA panels, and FAQs." },
            { title: "Editor friendly CMS", body: "Fields mirror the UI: title, time, instructor, location, cost, and capacity." },
            { title: "Design system", body: "Type scale for readability, 8 point spacing, and a brand palette with WCAG AA contrast." },
            { title: "Performance and SEO", body: "Optimized images, alt text, metadata, and Open Graph for sharing." },
          ],
          imageSrc: "/hero-3.jpg",
          imageAlt: "Component system",
        },

        // OUTCOME
        {
          eyebrow: "Outcome",
          title: "A single, maintained source of truth for the community",
          tocLabel: "Outcome",
          intro:
            "After launch, people can find the program, check the schedule, and donate with less effort. Staff can publish updates quickly and keep content accurate.",
          bullets: [
            { title: "Discoverability", body: "Organic traffic increased by ~120% in the first 30 days. *Placeholder*" },
            { title: "Task success", body: "Users reached the class schedule in a median of ~2 clicks and ~8 seconds. *Placeholder*" },
            { title: "Registration flow", body: "Completion rate for sign ups improved from ~45% to ~78%. *Placeholder*" },
            { title: "Donations", body: "Donation starts increased by ~60% with a shorter form and clearer copy. *Placeholder*" },
            { title: "Maintenance time", body: "Staff update a class in ~2 minutes using structured fields. *Placeholder*" },
            { title: "Accessibility", body: "Pages meet WCAG 2.2 AA for color contrast and keyboard navigation. *Placeholder*" },
          ],
          imageSrc: "/hero-4.jpg",
          imageAlt: "Live pages",
        },
      ]}
    />
  );
}
