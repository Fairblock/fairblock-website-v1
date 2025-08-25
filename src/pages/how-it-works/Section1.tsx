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
        <p className="font-eb-garamond mx-auto p-4 sm:px-8 text-justify text-lg lg:text-xl max-w-4xl leading-relaxed break-words">
        Fairblock is a dynamic, decentralized cryptographic computer enabling fast, secure execution of cryptographic logic. It hosts low-cost, high-performance native cApps and seamlessly delivers these capabilities into ecosystems such as Arbitrum, Hyperliquid, Solana, Base, and Cosmos.
        </p>
      </div>
    </div>
  );
};

export default Section1;
