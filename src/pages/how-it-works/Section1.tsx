// components
import Title from "../../common/Title";

const Section1 = () => {
  return (
    <div className="flex flex-col gap-8 items-center relative overflow-hidden">
      {/* how-it-works image */}
      <div>
        <img
          className="w-64 invert opacity-80"
          src="/how-it-works/how-things-work.svg"
          alt="how-things-work"
        />
      </div>

      {/* how-it-works content */}
      <div className="flex flex-col gap-4">
        <div className="text-left">
          <Title title="What's Fairblock?" />
        </div>
        <p className="mx-auto p-4 sm:px-8 text-justify lg:text-lg max-w-4xl leading-relaxed break-words">
          Fairblock is the turnkey confidentiality layer for digital assets and
          intelligent applications. We enable confidential stablecoins and tokenized
          assets for financial institutions protecting payroll, treasury balances,
          revenue, payments, and trading activity, while supporting private AI and
          agentic workflows that process sensitive enterprise data without exposing
          confidential inputs or proprietary information. Fairblock combines strong
          cryptography, configurable compliance controls, high performance, and
          seamless integration with existing assets, applications, wallets, and
          workflows.
        </p>
      </div>
    </div>
  );
};

export default Section1;
