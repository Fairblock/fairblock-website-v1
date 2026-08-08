// components
import Title from "../../common/Title";
// icons
import { PiArrowUpRightBold } from "react-icons/pi";

const Section5 = () => {
  return (
    <div className="flex flex-col gap-8 p-4 sm:px-8 items-center">
      <Title title="Built for Compliant Confidential Payments" />
      <div className="w-full max-w-4xl border border-black/12 p-6 sm:p-10 flex flex-col gap-5">
        <p className="leading-relaxed lg:text-lg" style={{ textAlign: "justify" }}>
          Fairblock keeps transaction amounts private while preserving the compliance
          controls institutions expect. Addresses and transaction relationships remain
          traceable, deposits and withdrawals can be screened through compliance
          partners, high-risk accounts can be frozen or restricted without giving
          Fairblock custody over user assets, and encrypted amounts can be selectively
          disclosed to authorized parties when required.
        </p>
        <p className="leading-relaxed lg:text-lg" style={{ textAlign: "justify" }}>
          Fairblock also works alongside the native enforcement controls of supported
          stablecoins and tokenized assets, creating multiple independent layers of
          protection rather than relying on a single compliance mechanism.
        </p>
        <a
          href="https://docs.fairblock.network/ct/how-it-works/compliance"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[#000D14] w-fit border-b border-primary-blue/60 pb-1 transition-colors hover:text-primary-blue"
        >
          Learn more in our Compliance Architecture docs
          <PiArrowUpRightBold />
        </a>
      </div>
    </div>
  );
};
export default Section5;
