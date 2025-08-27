import Case from "@/components/case";

export default function PneumoniaDetectorCase() {
  return (
    <Case
      title="UHealth: Rapid Pneumonia Screening"
      subtitle="A deep learning tool that predicts pneumonia from chest X-rays, paired with a clear, supportive interface built under a six-hour hackathon deadline."
      role="Front End Developer"
      client="Tech Startup Club (UHackathon)"
      heroSrc="/featured-pneumonia.jpg"
      heroAlt="UHealth model and UI preview"
      sections={[
        // PROBLEM
        {
          eyebrow: "Problem",
          title: "Short time, limited compute, and a complex message",
          tocLabel: "Problem",
          intro:
            "We needed to ship a working demo in six hours with reliable messaging for a non-ML audience. The original plan targeted many diagnoses, but training and evaluation would have been too slow and the story would have been hard to explain.",
          bullets: [
            { title: "Scope pressure", body: "A multi-label model was not realistic for the time and hardware." },
            { title: "Compute limits", body: "Local training cycles were slow, which reduced iteration speed." },
            { title: "Clarity risk", body: "A single confidence number is easy to misread without context." },
          ],
          imageSrc: "/hero-1.jpg",
          imageAlt: "Hackathon setup",
        },

        // GOALS
        {
          eyebrow: "Goals",
          title: "Make results fast, legible, and safe to demo",
          tocLabel: "Goals",
          intro:
            "Focus the model and design the interface so a judge can upload an image, understand the result, and trust the boundaries of the system.",
          bullets: [
            { title: "Speed", body: "Return a result in seconds on commodity hardware." },
            { title: "Legibility", body: "Explain what the model predicts and how certain it is." },
            { title: "Safety", body: "Set clear limits and avoid clinical claims." },
            { title: "Demo flow", body: "Keep the experience on a single screen with no dead ends." },
          ],
          imageSrc: "/hero-2.jpg",
          imageAlt: "Upload and result screen",
        },

        // DESIGN RESPONSE
        {
          eyebrow: "Design Response",
          title: "Narrow the model and design a supportive interface",
          tocLabel: "Design Response",
          intro:
            "We pivoted to a binary classifier for pneumonia vs normal, then built a one-screen interface that guides upload, shows the result with confidence, and teaches the user what the output means.",
          bullets: [
            { title: "Single screen layout", body: "Upload on the left, result on the right. No navigation required." },
            { title: "Explainer copy", body: "Plain language labels, short definitions, and a link to model details." },
            { title: "Confidence with ranges", body: "Progress ring with bands for Low, Medium, and High to avoid false precision." },
            { title: "Visual focus", body: "Preview with optional heatmap overlay to highlight contributing regions when available." },
            { title: "Error and loading states", body: "Obvious drag-and-drop target, spinner with time hints, and useful retries." },
            { title: "Safe messaging", body: "Clear boundary text: for educational use only and not a medical diagnosis." },
          ],
          imageSrc: "/hero-3.jpg",
          imageAlt: "Result view with confidence and overlay",
        },

        // OUTCOME
        {
          eyebrow: "Outcome",
          title: "A demo that judges could use and understand",
          tocLabel: "Outcome",
          intro:
            "The focused model and the simple interface made the project easy to evaluate within hackathon time. The flow reduced confusion, created a clear story, and let the team spend more minutes on validation and presentation.",
          bullets: [
            { title: "Faster demo flow", body: "Upload to result in ~5–7 seconds on a mid-range i5 laptop." },
            { title: "Comprehension", body: "Post-demo survey from judges/mentors averaged 4.7/5 for output clarity (n=9)." },
            { title: "Reduced rework", body: "Single-screen flow cut presenter handoff time by ~58%." },
            { title: "Scoring impact", body: "Placed 2nd overall at UHackathon; judges cited UX clarity as a key strength." },
          ],
          imageSrc: "/hero-4.jpg",
          imageAlt: "Team demo and feedback",
        },
      ]}
    />
  );
}
