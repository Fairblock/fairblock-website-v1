import { useState } from "react";
import { MdEmail } from "react-icons/md";
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
        <h2 className="font-heading font-normal text-4xl sm:text-5xl max-w-2xl leading-tight">
          Ready to bring privacy to your enterprise?
        </h2>
        <p className="opacity-60 text-lg max-w-xl">
          Join financial institutions and AI companies building with Fairblock.
        </p>
        <button
          onClick={handleCopy}
          className="flex items-center justify-center w-14 h-14 rounded-full border border-primary-blue/60 bg-primary-blue/10 hover:bg-primary-blue/20 hover:border-primary-blue transition-all duration-200"
          title={copied ? "Copied!" : EMAIL}
        >
          {copied
            ? <span className="text-primary-blue text-xs font-semibold">✓</span>
            : <MdEmail className="text-primary-blue text-2xl" />
          }
        </button>
        <p className="opacity-30 text-sm">{copied ? "Copied to clipboard" : "Click to copy email"}</p>
      </div>
    </FadeIn>
  );
};

export default SectionContact;
