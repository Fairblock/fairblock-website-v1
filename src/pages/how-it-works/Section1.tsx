// components
import Title from "../../common/Title";

const Section1 = () => {
  return (
    <div className="flex flex-col gap-8 items-center relative overflow-hidden">
      {/* how-it-works image */}
      <div>
        <img
          className="w-64"
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
          Fairblock is a performant, compliant privacy infrastructure for enterprises.
          We power confidential stablecoins and RWA for financial institutions
          protecting payroll, treasury, revenue, and trading activity, and private AI
          for enterprises that need persistent, accessible models without exposing
          confidential data. Privacy is a compliance and profitability requirement
          for enterprises, and performance. We're making it usable.
        </p>
      </div>
    </div>
  );
};

export default Section1;
