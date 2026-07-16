import Title from "../../common/Title";
import FadeIn from "../../common/FadeIn";

const steps = [
  {
    number: "01",
    title: "Install our SDK",
    description: "Integrate Fairblock with any frontend, neobank, wallet, or agentic platform in minutes.",
  },
  {
    number: "02",
    title: "Go Private",
    description: "Stablecoins, RWAs, and AI workloads are automatically routed through Fairblock's decentralized cryptographic network for confidential processing.",
  },
  {
    number: "03",
    title: "Keep It Simple",
    description: "Users interact as usual, with no new wallets, bridges, or extra steps. Privacy stays invisible and compliance is built in.",
  },
];

const SectionCTA = () => {
  return (
    <div className="flex flex-col gap-10 p-4 sm:px-8 border-t border-black/10">
      <FadeIn>
        <Title title="How It Works" />
      </FadeIn>

      {/* Desktop: numbers row then content row, line naturally between them */}
      <div className="hidden md:flex flex-col">
        <div className="grid grid-cols-3 gap-8 lg:gap-12 pb-5">
          {steps.map((step, i) => (
            <FadeIn key={`n-${step.number}`} delay={i * 150}>
              <span className="text-[#141210] text-5xl font-heading font-normal">
                {step.number}
              </span>
            </FadeIn>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-8 lg:gap-12 pt-6">
          {steps.map((step, i) => (
            <FadeIn key={`c-${step.number}`} delay={i * 150}>
              <div className="flex flex-col gap-3">
                <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-snug">
                  {step.title}
                </h3>
                <p className="leading-relaxed opacity-60">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Mobile: each step grouped */}
      <div className="md:hidden flex flex-col gap-8">
        {steps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 150}>
            <div className="flex flex-col gap-3">
              <span className="text-[#141210] text-4xl font-heading font-normal">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-semibold leading-snug">{step.title}</h3>
              <p className="leading-relaxed opacity-60">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default SectionCTA;
