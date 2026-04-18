import { useState } from "react";
import FadeIn from "../../common/FadeIn";

const EMAIL = "hello@fairblock.network";

const SectionContact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <FadeIn>
      <div
        className="mx-4 sm:mx-8 rounded-2xl border border-primary-blue/40 p-12 lg:p-16 flex flex-col items-center gap-6 text-center"
        style={{ background: "radial-gradient(ellipse at center, rgba(88,189,246,0.06) 0%, transparent 70%)" }}
      >
        <h2 className="font-maison-neue font-bold text-4xl sm:text-5xl max-w-2xl leading-tight tracking-tight">
          Ready to bring privacy to your enterprise?
        </h2>
        <p className="opacity-60 text-lg max-w-xl">
          Join financial institutions and AI companies building with Fairblock.
        </p>
        <button
          onClick={handleCopy}
          className="group flex items-center gap-3 bg-primary-blue text-black font-semibold px-8 py-4 rounded-xl text-lg hover:brightness-110 transition-all duration-200"
        >
          <span>{copied ? "Copied!" : EMAIL}</span>
        </button>
        <p className="opacity-30 text-sm">Click to copy email</p>
      </div>
    </FadeIn>
  );
};

export default SectionContact;
