// src/app/work/federal-way-mobile-rec/page.tsx
import Case from "@/components/case";

export default function FederalWayMobileRecCase() {
  return (
    <Case
      title="Mobile Recreation — City of Federal Way"
      subtitle="Bringing structured play to parks and neighborhoods—and making it easy to discover where we’ll be next."
      role="Researcher & Designer"
      client="City of Federal Way Parks & Recreation"
      heroSrc="/projects/fwmr/hero.jpg"
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
          imageSrc: "/projects/fwmr/route.jpg",
          imageAlt: "Weekly route map and time blocks for neighborhood stops",
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
              body: "Leverage district channels (Peachjar, counselors, backpack flyers, announcements).",
            },
            {
              title: "Findable website",
              body: "Top-level nav, seasonal homepage tile, and clean URL path.",
            },
            {
              title: "Consistent social rhythm",
              body: "Weekly route post, day-of story, short recap; cross-post to local groups.",
            },
            {
              title: "Program collaborations",
              body: "Coordinate pop-ups with Skyhawks/Day Camp/PacNW to tap adjacent audiences.",
            },
          ],
          imageSrc: "/projects/fwmr/activity.jpg",
          imageAlt: "Activities setup with cones, balls, crafts, and shade canopies",
        },

        // RESEARCH & INSIGHTS
        {
          eyebrow: "Research",
          title: "What we learned from on-site interviews and lightweight tracking",
          tocLabel: "Research & Insights",
          intro:
            "We spoke with families at park stops and logged quick, anonymous responses about awareness and attendance patterns.",
          bullets: [
            { title: "418 participants", body: "Pilot season total.*" },
            { title: "39% recurring", body: "Came to more than one stop.*" },
            { title: "63% stumbled upon us", body: "Found us by chance at a park.*" },
            { title: "29% word of mouth", body: "Heard from friends/family.*" },
            { title: "Pain points", body: "Distance/schedule conflicts; didn’t know when/where we’d be." },
          ],
          imageSrc: "/projects/fwmr/checkin.jpg",
          imageAlt: "Mobile check-in and consent form on a phone",
        },

        // INTERVENTIONS
        {
          eyebrow: "Interventions",
          title: "Practical changes to increase reach (beyond the grapevine)",
          tocLabel: "Interventions",
          intro:
            "We focused on high-leverage channels families already use: schools, parks, partner programs, and neighborhood social groups.",
          bullets: [
            {
              title: "Advertise with schools before summer",
              body:
                "Coordinate Peachjar/email blasts, counselor newsletters, backpack flyers, and AM announcements with a short URL/QR to the live route. *Result placeholder: +22% first-time attendance in June–July.*",
            },
            {
              title: "Make Mobile Rec findable on the city website",
              body:
                "Create a top-level page and seasonal homepage tile; simplify the path (Parks & Rec → Mobile Rec). Publish a single shareable route page. *Result placeholder: page visits 4.8×; schedule clicks +54%.*",
            },
            {
              title: "Increase social media presence",
              body:
                "Weekly route post, day-of story, 30-second recap reel; cross-post to parent/neighborhood groups. *Result placeholder: impressions 8.1×; attendance +17%.*",
            },
            {
              title: "Collaborate with Skyhawks / Day Camp / PacNW",
              body:
                "While on the job we asked to join their sessions; they were happy to have us. Set up pop-ups at session start/end with mini-kits and handouts. Some of their participants later visited our stops. *Result placeholder: referrals +15%; repeat +9%.*",
            },
            {
              title: "Park signage & kiosk flyers",
              body:
                "Laminated mini-posters at kiosks/trailheads one week prior to a stop. *Result placeholder: +19% first-timers at posted parks; +12% repeat.*",
            },
          ],
          imageSrc: "/projects/fwmr/hero.jpg",
          imageAlt: "Families participating at a Mobile Rec stop",
        },

        // OUTCOME
        {
          eyebrow: "Outcome",
          title: "More people found us, and more came back",
          tocLabel: "Outcome",
          intro:
            "Early indicators suggest better awareness and steadier attendance. As we refine the playbook with the city, these will be replaced with final numbers.",
          bullets: [
            { title: "418 participants*", body: "Pilot season; trending upward with outreach in place." },
            { title: "39% recurring*", body: "Consistent returners when schedule/route is easy to access." },
            { title: "Referral lift*", body: "Partner program pop-ups drove cross-attendance." },
            {
              title: "Operational clarity",
              body: "Staff share a single link for route/schedule; fewer ‘where are you today?’ calls.",
            },
            {
              title: "Reusable assets",
              body: "Templates for school emails, flyers, and social posts reduce prep time.",
            },
            { title: "Next steps", body: "Finalize metrics and expand partnerships city-wide." },
          ],
          imageSrc: "/projects/fwmr/route.jpg",
          imageAlt: "Route and timing overview",
        },
      ]}
    />
  );
}
