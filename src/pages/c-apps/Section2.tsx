type Card = {
  imageUrl: string;
  title: string;
  content: string;
  link: string;
};

const Card = ({ imageUrl, title, content, link }: Card) => {
  return (
    <a
      className="border border-primary-blue hover:bg-gradient-to-b from-transparent via-transparent to-primary-blue/20 cursor-pointer flex flex-col sm:flex-row gap-4 items-center justify-between p-2 rounded-2xl mx-auto max-w-screen-lg duration-300 transition-all"
      href={link}
    >
      <div className="sm:aspect-square border border-primary-blue rounded-2xl w-full sm:w-[25%] lg:w-[15%]">
        <img className="max-h-48 h-full w-full" src={imageUrl} alt={title} />
      </div>
      <div className="flex flex-col gap-2 w-full sm:w-[75%] lg:w-[85%]">
        <h4 className="text-2xl">{title}</h4>
        <p className="font-eb-garamond text-lg lg:text-xl text-neutral-300">
          {content}
        </p>
      </div>
    </a>
  );
};

const C_APPS_LIST = [
  {
    imageUrl: "/c-apps/fairates.svg",
    title: "Confidential Stablecoins",
    content:
      "Confidential stablecoins are the final catalyst for institutional adoption. Fairblock enables them: fast, compliant, and cross chain using a powerful cryptographic stack. This site is an educational demo.",
    link: "https://confidential-usdc-demo.vercel.app/",
  },
  {
    imageUrl: "/c-apps/fairates.svg",
    title: "Fairates",
    content:
      "Fixed rate lending through sealed bid auctions. Live on Arbitrum One, coming soon to Hyperliquid. Fair pricing, no slippage, and capital efficiency with funds locked only during the auction.",
    link: "https://fairates.fairblock.network/",
  },
  {
    imageUrl: "/c-apps/fairates.svg",
    title: "FairyCoW Swap",
    content:
      "Over 40% of US trades use dark pools. FairyCoW brings that privacy onchain with encrypted orders. Now live on Sepolia.",
    link: "https://swap.fairycow.fi/",
  },
  {
    imageUrl: "/c-apps/fairates.svg",
    title: "Time Machine",
    content:
      "Encrypt your prediction. Keep your alpha private. Earn more for being early and accurate. Like options or Polymarket, but simpler. No greeks, no frontrunning, no games.",
    link: "https://timemachine.fairblock.network/",
  },
  {
    imageUrl: "/c-apps/fairates.svg",
    title: "FariEx",
    content:
      "FairEx lets you place encrypted limit orders on Uniswap via Arbitrum One. Orders stay private until the trigger price hits, then execute onchain.",
    link: "https://dex.fairblock.network/swap",
  },
  {
    imageUrl: "/c-apps/fairates.svg",
    title: "Unruggable AI",
    content:
      "TEEs lose keys on failure or restart. Unruggable AI solves this with TEEs, Fairblock’s MPC, and private decryption to securely back up and recover keys without centralization.",
    link: "https://github.com/Fairblock/Unruggable-AI",
  },
  {
    imageUrl: "/c-apps/fairates.svg",
    title: "Lazy Killer",
    content:
      "Lazy Killer is a multi-player murder mystery game that utilizes encryption to conceal the murderer until a certain block height is met.",
    link: "https://lazykiller.fairblock.network/",
  },
  {
    imageUrl: "/c-apps/fairates.svg",
    title: "Verifiable Randomness",
    content:
      "Verifiable randomness is generated with FairyRing and unlocks a new generation of gaming, defi, distribution, and auction-based apps across chains.",
    link: "https://website-0xfairblock.vercel.app/applications/randomness",
  },
  {
    imageUrl: "/c-apps/fairates.svg",
    title: "Onchain Time Bomb",
    content:
      "Our Time Bomb game allows users to grasp the power of encryption tangibly. Over 10,000 bombs have exploded since our testnet launch.",
    link: "https://bomb.fairblock.network/",
  },
  {
    imageUrl: "/c-apps/fairates.svg",
    title: "Private Governance",
    content:
      "Our private governance module allows EVM and Cosmos users to encrypt their votes in any onchain poll to produce credibly neutral results.",
    link: "https://governance.fairblock.network/",
  },
];

const Section2 = () => {
  return (
    <div className="flex flex-col gap-4 p-4 sm:px-8">
      <p className="font-eb-garamond pb-8 text-lg lg:text-xl text-center">
        Below is a showcase of our impactful and functional{" "}
        <span className="font-bold">confidential applications (cApps).</span>
      </p>
      {C_APPS_LIST.map((cApp) => {
        return (
          <Card
            key={cApp.title}
            imageUrl={cApp.imageUrl}
            title={cApp.title}
            content={cApp.content}
            link={cApp.link}
          />
        );
      })}
    </div>
  );
};
export default Section2;
