import { useEffect, useRef } from "react";
import Title from "../../common/Title";
import FadeIn from "../../common/FadeIn";

const steps = [
  {
    number: "01",
    title: "Install the SDK",
    description:
      "Add Fairblock to your stack in minutes. Works with any frontend, neobank, wallet, or agentic platform.",
  },
  {
    number: "02",
    title: "Deploy Confidential Assets",
    description:
      "Issue cross-chain confidential stablecoins and RWA, or connect your AI model with full privacy guarantees.",
  },
  {
    number: "03",
    title: "Users Just Use It",
    description:
      "End-users interact normally with no extra clicks. Privacy is invisible, compliance is built in.",
  },
];

const SectionCTA = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.width = "100%";
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-10 p-4 sm:px-8 border-t border-white/10">
      <FadeIn>
        <Title title="How It Works" />
      </FadeIn>
      <div className="mx-auto max-w-screen-xl w-full">
        {/* Animated connector line — desktop only */}
        <div className="hidden md:block relative mb-10 overflow-hidden">
          <div className="h-px bg-white/10 w-full" />
          <div
            ref={lineRef}
            className="absolute top-0 left-0 h-px bg-primary-blue/60"
            style={{
              width: 0,
              transition: "width 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          {/* Dots at each step position */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-blue"
              style={{ left: `${i === 0 ? 0 : i === 1 ? "50%" : "calc(100% - 8px)"}` }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 w-full">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 200}>
              <div className="flex flex-col gap-3">
                <span className="font-heading font-normal text-primary-blue text-5xl">
                  {step.number}
                </span>
                <h3 className="font-heading font-normal text-2xl">{step.title}</h3>
                <p className="leading-relaxed opacity-80">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SectionCTA;
