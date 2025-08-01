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
        <div className="text-center">
          <Title title="How things work" />
        </div>
        <p className="font-eb-garamond mx-auto p-4 sm:px-8 text-center text-lg lg:text-xl max-w-[1280px]">
          Fairblock is a decentralized cryptographic computer that runs secure
          and performant confidential stablecoins, protected intents, AI private
          data marketplace, and sealed-bid auctions for cheap and fast
          execution, or seamlessly "deliver" these capabilities to deep-rooted
          ecosystems such as Arbitrum, Hyperliquid, Solana, Uniswap, and Cosmos
          chains.
        </p>
      </div>
    </div>
  );
};
export default Section1;
