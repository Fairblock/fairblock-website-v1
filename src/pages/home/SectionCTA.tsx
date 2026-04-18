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
  return (
    <div className="flex flex-col gap-10 p-4 sm:px-8 border-t border-white/10">
      <FadeIn>
        <Title title="How It Works" />
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mx-auto max-w-screen-xl w-full">
        {steps.map((step, index) => (
          <FadeIn key={step.number} delay={index * 180}>
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
  );
};
export default SectionCTA;
