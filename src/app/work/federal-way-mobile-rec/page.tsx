// src/app/work/federal-way-mobile-rec/page.tsx
import Case from "@/components/case";

export default function FederalWayMobileRecCase() {
  return (
    <Case
      title="Mobile Recreation — City of Federal Way"
      subtitle="Bringing structured play to parks and neighborhoods—and making it easy to discover where we’ll be next."
      role="User Researcher"
      client="City of Federal Way Parks & Recreation"
      heroSrc="/recvan.jpg"
      heroAlt="Mobile Recreation event with families doing outdoor activities"
      sections={[
        // PROBLEM
        {
          eyebrow: "Problem",
          title:
            "Families mostly stumbled upon us; program info was buried and rarely found",
          tocLabel: "Problem",
          intro:
            "Interviews and field conversations revealed that most attendees discovered Mobile Rec by chance or through word of mouth. The city site made details hard to find, and social presence was minimal—so awareness depended on luck.",
          bullets: [
            {
              title: "Low discoverability",
              body: "Participants found us by chance or word of mouth, web path was unclear, little to no social media presence.",
            },
            {
              title: "Buried information",
              body: "Program details were several clicks deep and fragmented across pages.",
            },
            {
              title: "Minimal social presence",
              body: "Few posts, inconsistent cadence, no cross-posting to neighborhood groups.",
            },
            {
              title: "Missed partnerships",
              body: "Nearby programs (Skyhawks, Day Camp, Pac NW Soccer) ran in parallel without structured collaboration.",
            },
          ],
        },

        // GOALS
        {
          eyebrow: "Goals",
          title:
            "Make Mobile Rec easy to find, understand, and join—before summer starts",
          tocLabel: "Goals",
          intro:
            "Clarify where to go and when, meet families where they already are (schools, parks, partner programs), and keep updates current.",
          bullets: [
            {
              title: "Single source of truth",
              body: "A shareable route/schedule page with times, locations, and what to expect.",
            },
            {
              title: "Pre-summer school outreach",
              body: "Leverage district channels (Backpack flyers, announcements).",
            },
            {
              title: "Findable website",
              body: "Seasonal homepage tile, and clean path to find info.",
            },
            {
              title: "Consistent social rhythm",
              body: "Schedule posts, day-of story, short recap; cross-post to local groups.",
            },
            {
              title: "Program collaborations",
              body: "Coordinate pop-ups with Skyhawks/Day Camp/PacNW to tap adjacent audiences.",
            },
          ],
        },

        // RESEARCH & INSIGHTS
        {
          eyebrow: "Research",
          title: "What we learned from on-site interviews and lightweight tracking",
          tocLabel: "Research & Insights",
          intro:
            "We spoke with families at park stops and logged quick, anonymous responses about awareness and attendance patterns.",
          bullets: [
            { title: "266 participants (2023)", body: "Pilot summer season total." },
            { title: "18% recurring", body: "Visited us multiple times." },
            { title: "63% stumbled upon us", body: "Found us by chance at a park." },
            { title: "29% word of mouth", body: "Heard from friends/family." },
            { title: "Pain points", body: "Distance/schedule conflicts; didn’t know when/where we’d be, didn't even know about us." },
          ],
          imageSrc: "/recvan1.jpg",
          imageAlt: "Picture of kids gathered with Mobile Recreation staff",
        },

        // INTERVENTIONS
        {
          eyebrow: "Interventions",
          title: "Practical changes to increase reach",
          tocLabel: "Interventions",
          intro:
            "We focused on high-leverage channels families already use: schools, parks, partner programs, and neighborhood social groups.",
          bullets: [
            {
              title: "Advertise with schools before summer",
              body:
                "Coordinate school announcements and backpack flyers with a short QR to the schedule. Result: +23% first-time attendance in June–July.",
            },
            {
              title: "Make Mobile Rec findable on the city website",
              body:
                "Create a top-level page and seasonal homepage tile; simplify the path (Parks & Rec → Mobile Rec). Publish a single shareable route page. Result: page visits 4.3×; schedule clicks +57%.",
            },
            {
              title: "Collaborate with Skyhawks / Day Camp / PacNW",
              body:
                "Set up pop-ups at session start/end with mini-kits and handouts. Result: referrals +13%; repeat attendance +10%.",
            },
          ],
          imageSrc: "/rec.jpg",
          imageAlt: "Kids playing outside with Mobile Recreation staff",
        },

        // OUTCOME
        {
          eyebrow: "Outcome",
          title: "More people found us, and more came back",
          tocLabel: "Outcome",
          intro:
            "By addressing discoverability, outreach, and partnerships, attendance grew significantly between the pilot and our most recent season.",
          bullets: [
            { title: "266 participants → 512", body: "Pilot summer 2023 to summer 2025 ≈ 92% growth (nearly doubled)." },
            { title: "Recurring families", body: "Repeat participants increased from 18% to 39%." },
            { title: "Partner referrals", body: "Cross-attendance from Skyhawks/Day Camp/PacNW accounted for 26% increase in participants." },
          ],
          imageSrc: "/park.jpg",
          imageAlt: "Picture of park program with families doing outdoor activities",
        },
      ]}
    />
  );
}
