import { useState, useEffect } from "react";
import Title from "../../common/Title";
import FadeIn from "../../common/FadeIn";
import TiltCard from "../../common/TiltCard";

const phrases = [
  "protecting payroll",
  "protecting treasury",
  "protecting trading activity",
  "protecting AI models",
];

const Typewriter = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      return () => clearTimeout(t);
    }
    if (!isDeleting && displayed.length === current.length) {
      const t = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <p className="text-primary-blue text-lg sm:text-xl text-center lg:text-left min-h-7">
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:px-8 mx-auto max-w-screen-xl w-full">
      <FadeIn className="flex flex-col gap-2">
        <div className="flex justify-center lg:justify-start">
          <Title title="Enterprise Confidentiality Solutions" />
        </div>
        <Typewriter />
      </FadeIn>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <FadeIn delay={150} className="flex h-full">
          <TiltCard className="w-full h-full">
            <div className="border border-black/12 p-8 lg:p-12 flex flex-col gap-5 w-full h-full min-h-[16rem] lg:min-h-[20rem] justify-center hover:bg-black/[0.025] transition-colors duration-300">
              <h3 className="font-heading font-normal text-[#141210] text-2xl lg:text-3xl">
                Confidential Finance
              </h3>
              <p className="leading-relaxed lg:text-xl" style={{ textAlign: "justify" }}>
                Protect sensitive balances, payment amounts, trades, treasury
                activity, and tokenized asset flows while preserving compliance,
                interoperability, and existing user experiences.
              </p>
            </div>
          </TiltCard>
        </FadeIn>
        <FadeIn delay={300} className="flex h-full">
          <TiltCard className="w-full h-full">
            <div className="border border-black/12 p-8 lg:p-12 flex flex-col gap-5 w-full h-full min-h-[16rem] lg:min-h-[20rem] justify-center hover:bg-black/[0.025] transition-colors duration-300">
              <h3 className="font-heading font-normal text-[#141210] text-2xl lg:text-3xl">
                Confidential Intelligence
              </h3>
              <p className="leading-relaxed lg:text-xl" style={{ textAlign: "justify" }}>
                Enable AI agents and applications to process sensitive data, access
                private services, and execute confidential workflows without
                exposing proprietary or customer information.
              </p>
            </div>
          </TiltCard>
        </FadeIn>
      </div>
    </div>
  );
};

export default Section2;
