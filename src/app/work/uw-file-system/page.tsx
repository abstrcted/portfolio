import Case from "@/components/case";

export default function UWFileSystemPage() {
  return (
    <Case
      title="From cluttered to clean. Organization for the busiest facilitators in the world"
      subtitle="Organization does not mean anything if you cannot find anything. I designed an organization tool for busy facilitators to fit their schedules and needs."
      role="Lead Designer"
      client="University of Washington"
      liveSiteLabel="SETLib"
      heroSrc="/mock.png"   // swap for a real hero image when ready
      heroAlt="Analytics overview"
      sections={[
        {
          eyebrow: "Problem",
          title: "Worksheets were scattered, duplicated, and often lost",
          tocLabel: "Problem",
          intro:
            "Staff create technical-problem worksheets across four categories, but turnover and ad hoc storage made reuse nearly impossible. Files lived as Word documents in Google Drive, and some were never uploaded at all. Teams grabbed whatever looked most recent, rebuilt what they could not find, and high-quality problems routinely disappeared.",
          bullets: [
            { title: "Fragmented storage", body: "Worksheets lived in personal drives and folders with inconsistent naming." },
            { title: "Rework and duplication", body: "New staff rebuilt existing problems because they could not discover or verify prior work." },
            { title: "Missing uploads", body: "Not all worksheets made it back to the shared drive, so good content was lost." },
            { title: "Low incentive to curate", body: "Under time pressure, staff optimized for speed, not structured archiving." },
          ],
          imageSrc: "/hero-2.jpg",
          imageAlt: "Legacy folder sprawl and duplication",
        },

        {
          eyebrow: "Goals",
          title: "A single place to build, find, and print vetted worksheets",
          tocLabel: "Goals",
          intro:
            "Stakeholders asked for a web-based system where employees can generate worksheets by topic and specialization, submit new problems, and ensure quality through peer review before anything goes live.",
          bullets: [
            { title: "Guided creation", body: "Select topic → subcategory → difficulty; add problem text and metadata." },
            { title: "Powerful discovery", body: "Filter by tags (subject, style, multiple choice or short answer), difficulty, and usage; full-text search." },
            { title: "Governance", body: "Peer review and approval workflow prior to official submission." },
            { title: "Output", body: "Build and print a clean worksheet directly from the software." },
          ],
          imageSrc: "/mock1.jpg",
          imageAlt: "Worksheet creation and discovery views",
        },

        {
          eyebrow: "Design Response",
          title: "Structure the content, streamline the workflow, and enforce review",
          tocLabel: "Design Response",
          intro:
            "We replaced file sprawl with a structured problem library and a simple, opinionated workflow that mirrors how staff actually work. The flow provides fast paths for creation and retrieval, and it adds quality gates without adding friction.",
          bullets: [
            { title: "Schema and tagging", body: "A normalized problem model with required fields for topic, subcategory, difficulty, style, and answer key." },
            { title: "Guided builder", body: "A step-by-step form that captures all metadata and previews the printable layout in real time." },
            { title: "Search and filters", body: "Instant results with tag chips and keyboard-friendly filters for power users." },
            { title: "Peer review queue", body: "New problems enter a review inbox where approvers compare, comment, and publish with one click." },
            { title: "Worksheet composer", body: "Select problems by filter or saved sets, then auto-paginate and export a print-ready document." },
          ],
          imageSrc: "/mock2.jpg",
          imageAlt: "Search and worksheet composition screens",
        },

        {
          eyebrow: "Outcome",
          title: "Less hunting, fewer rebuilds, and a durable knowledge base",
          tocLabel: "Outcome",
          intro:
            "By turning worksheets into searchable, reviewable content rather than static files, the organization keeps its best material, reduces duplication, and prints faster. The system encourages contribution without extra effort.",
          bullets: [
            { title: "Faster retrieval", body: "Average time to find a worksheet reduced from ~6 min to ~2 min (≈65% faster). *Placeholder*" },
            { title: "Quality preserved", body: "Approval pass rate at publication ≥95%; defects reported after print down by ~40%. *Placeholder*" },
            { title: "Reduced rework", body: "Duplicate builds down by ~60% quarter over quarter. *Placeholder*" },
            { title: "One-click output", body: "Print prep time cut from ~10 min to ~1 min (≈90% faster). *Placeholder*" },
          ],
          imageSrc: "/mock3.jpg",
          imageAlt: "Consolidated library with review status",
        },
      ]}
    />
  );
}
