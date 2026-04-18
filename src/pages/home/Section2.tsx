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
    <p className="text-primary-blue text-lg sm:text-xl text-center lg:text-left h-7">
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
          <Title title="Enterprise Privacy Solutions" />
        </div>
        <Typewriter />
      </FadeIn>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FadeIn delay={150} className="flex h-full">
          <TiltCard className="w-full h-full">
            <div className="border border-primary-blue rounded-2xl p-6 lg:p-8 flex flex-col gap-4 w-full hover:bg-primary-blue/10 hover:shadow-[0_0_24px_rgba(88,189,246,0.15)] transition-colors duration-300">
              <h3 className="font-test-tiempos-headline text-primary-blue text-2xl">
                Confidential Finance
              </h3>
              <p className="leading-relaxed lg:text-lg" style={{ textAlign: "justify" }}>
                As institutional adoption of stablecoins accelerates, enterprises
                and financial institutions demand privacy to protect their payroll,
                treasury, revenue, and trading activity. Exposed on-chain
                transactions are a compliance and profitability liability. We are
                building performant, compliant, cross-chain confidential stablecoins
                and RWA that integrate in 30 minutes by developers, with no extra
                clicks for end-users.
              </p>
            </div>
          </TiltCard>
        </FadeIn>
        <FadeIn delay={300} className="flex h-full">
          <TiltCard className="w-full h-full">
            <div className="border border-primary-blue rounded-2xl p-6 lg:p-8 flex flex-col gap-4 w-full hover:bg-primary-blue/10 hover:shadow-[0_0_24px_rgba(88,189,246,0.15)] transition-colors duration-300">
              <h3 className="font-test-tiempos-headline text-primary-blue text-2xl">
                Private AI
              </h3>
              <p className="leading-relaxed lg:text-lg" style={{ textAlign: "justify" }}>
                Enterprise AI adoption is surging, but businesses cannot share
                confidential data with cloud models. They need AI that is persistent
                and accessible without exposing sensitive information. For enterprises,
                it is a compliance and profitability requirement. The only barriers
                are performance and usability, and that is exactly what we are solving.
              </p>
            </div>
          </TiltCard>
        </FadeIn>
      </div>
    </div>
  );
};
export default Section2;
