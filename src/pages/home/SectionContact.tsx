import { useState } from "react";
import { MdEmail } from "react-icons/md";
import FadeIn from "../../common/FadeIn";

const SectionContact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@fairblock.network");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 sm:px-8">
      <FadeIn>
        <div
          className="mx-0 border border-primary-blue/40 p-6 sm:p-10 lg:p-16 flex flex-col items-center gap-6 text-center"
          style={{ background: "radial-gradient(ellipse at center, rgba(88,189,246,0.06) 0%, transparent 70%)" }}
        >
          <h2 className="font-heading font-normal text-2xl sm:text-4xl lg:text-5xl max-w-2xl leading-tight">
            Ready to bring privacy to your enterprise?
          </h2>
          <p className="opacity-60 text-lg max-w-xl leading-relaxed">
            Join financial institutions and AI companies building with Fairblock.
          </p>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-6 py-3 border border-black/15 text-sm font-medium hover:bg-black/10 hover:border-black/30 transition-colors duration-200"
          >
            {copied ? (
              <span>✓ Copied</span>
            ) : (
              <>
                <MdEmail className="text-lg" />
                <span>hello@fairblock.network</span>
              </>
            )}
          </button>
          <p className="opacity-30 text-sm">
            {copied ? "Copied to clipboard" : "Click to copy email"}
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default SectionContact;
