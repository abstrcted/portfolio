import Case from "@/components/case";

export default function PneumoniaDetectorCase() {
  return (
    <Case
      title="UHealth — Rapid Pneumonia Screening"
      subtitle="A deep-learning tool that predicts pneumonia from chest X-rays, paired with a simple, supportive UI built under hackathon constraints."
      role="Front End Developer"
      client="Tech Startup Club (UHackathon)"
      heroSrc="/featured-pneumonia.jpg"
      heroAlt="UHealth model and UI preview"
      sections={[
        {
          title: "Largest Tacoma hackathon, 6 hours to ship",
          tocLabel: "Problem",
          intro:
            "With 15+ teams of four, we had a tight window to design, build, and demo something useful. Our target: a CNN that flags pneumonia from X-rays and a UI that makes the result understandable to non-ML teammates.",
          bullets: [
            { title: "Ambitious scope", body: "Initial goal: 14-label classifier—too heavy for time and hardware." },
            { title: "Compute limits", body: "Local training would be slow; we needed to prioritize iteration speed." },
            { title: "Clarity for the demo", body: "Results had to be legible and defensible, not just a number." },
          ],
          imageSrc: "/hero-1.jpg",
          imageAlt: "Hackathon setup",
        },
        {
          eyebrow: "Our solution",
          title: "Binary CNN + friendly frontend with chatbot and live upload",
          tocLabel: "Solution",
          intro:
            "We pivoted to a binary classifier for pneumonia vs. normal, focusing on a clean interface, quick feedback, and confident messaging.",
          bullets: [
            { title: "Model", body: "CNN with transfer learning and early stopping; data augmentation for generalization." },
            { title: "UI", body: "Upload an image → see prediction and confidence; integrated medical Q&A chatbot for context." },
            { title: "Demo-ready", body: "Single-screen flow and clear copy to explain what the model can/can’t do." },
          ],
          imageSrc: "/hero-2.jpg",
          imageAlt: "Upload and result screen",
        },
        {
          eyebrow: "Future growth",
          title: "From single diagnosis to a diagnostic support platform",
          tocLabel: "Growth",
          intro:
            "There’s headroom to boost accuracy and expand utility beyond a single condition.",
          bullets: [
            { title: "Explainability", body: "Highlight image regions driving predictions (e.g., Grad-CAM overlays)." },
            { title: "Multi-label", body: "Detect additional conditions beyond pneumonia." },
            { title: "Support tooling", body: "Surface symptom patterns, longitudinal views, and clinician-friendly insights." },
            { title: "Model accuracy", body: "With better augmentation and training, we estimate >95% achievable." },
          ],
          imageSrc: "/hero-3.jpg",
          imageAlt: "Explainability mock",
        },
        {
          eyebrow: "What we learned",
          title: "Scope ruthlessly, use the right tools, and design for clarity",
          tocLabel: "Lessons",
          intro:
            "A six-hour window forces trade-offs. Success came from aligning scope with the clock and playing to strengths.",
          bullets: [
            { title: "Use managed compute", body: "Offload training to services like AWS SageMaker or Google Colab." },
            { title: "Adapt scope", body: "Pivot early when constraints make the original goal unrealistic." },
            { title: "Team roles matter", body: "Lean into strengths to keep velocity and quality high." },
            { title: "Time discipline", body: "Every minute counts—optimize for an end-to-end, working demo." },
          ],
          imageSrc: "/hero-4.jpg",
          imageAlt: "Team retrospective",
        },
      ]}
    />
  );
}
