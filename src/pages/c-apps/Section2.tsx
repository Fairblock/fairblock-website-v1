// icons
import { PiArrowUpRightBold } from "react-icons/pi";

type Card = {
  imageUrl?: string;
  videoUrl?: string;
  title: string;
  content: string;
  link: string;
};

const Card = ({ imageUrl, videoUrl, title, content, link }: Card) => {
  console.log("V-URL", videoUrl);

  return (
    <div className="border border-primary-blue hover:bg-gradient-to-b from-transparent via-transparent to-primary-blue/20 cursor-pointer flex flex-col sm:flex-row gap-4 items-center justify-between p-4 relative rounded-2xl mx-auto max-w-screen-lg duration-300 transition-all">
      <div className="w-full sm:w-[35%]">
        {imageUrl && (
          <img
            className="border border-primary-blue object-cover min-h-44 sm:min-h-32 lg:min-h-40 rounded-xl h-full w-full"
            src={imageUrl}
            alt={title}
          />
        )}
        {videoUrl && (
          <video
            className="border border-primary-blue object-cover min-h-44 sm:min-h-32 lg:min-h-40 rounded-xl h-full w-full"
            src={videoUrl}
            muted
            controls
          ></video>
        )}
      </div>
      <a className="flex flex-col gap-2 w-full sm:w-[65%]" href={link}>
        <span className="hidden sm:block absolute top-4 right-4 bg-primary-blue p-1 rounded-full w-fit h-fit">
          <PiArrowUpRightBold className="text-white" />
        </span>
        <div className="flex justify-between">
          <h4 className="font-test-tiempos-headline text-2xl">{title}</h4>
          <span className="sm:hidden bg-primary-blue p-1 rounded-full w-fit h-fit">
            <PiArrowUpRightBold className="text-white" />
          </span>
        </div>
        <p className="text-lg lg:text-xl text-neutral-300">
          {content}
        </p>
      </a>
    </div>
  );
};

const C_APPS_LIST = [
  {
    imageUrl: "/c-apps/demos/confidential-stablecoins.png",
    title: "Confidential Stablecoins",
    content:
      "Confidential stablecoins are the final catalyst for institutional adoption. Fairblock enables them: fast, compliant, and cross chain using a powerful cryptographic stack. Check out this educational demo.",
    link: "https://confidential-usdc-demo.vercel.app/",
  },
  {
    imageUrl: "/c-apps/demos/fairates.jpg",
    title: "Fairates",
    content:
      "Fixed rate lending through leaderless sealed bid auctions. Live on Arbitrum One, coming soon to Hyperliquid. Tighter margins, no slippage, and reduced liquidation penalties.",
    link: "https://fairates.fairblock.network/",
  },
  {
    videoUrl: "/c-apps/demos/fairy-cow-swap.mp4",
    title: "FairyCoW Swap",
    content:
      "Over 40% of US trades use dark pools to avoid market impact and frontrunning. FairyCoW brings that protection onchain, protecting sensitive order data before execution. Now live on Sepolia.",
    link: "https://swap.fairycow.fi/",
  },
  {
    imageUrl: "/c-apps/demos/time-machine-img.png",
    title: "Time Machine",
    content:
      "Encrypt your prediction. Keep your alpha. Win more for being early and accurate. It’s like options or Polymarket. Just simpler, with asymmetric payoffs. No greeks. No frontrunning. No oracle manipulation.",
    link: "https://timemachine.fairblock.network/",
  },
  {
    imageUrl: "/c-apps/demos/fair-ex-img.png",
    title: "FariEx",
    content:
      "FairEx lets you place encrypted limit orders on Uniswap via Arbitrum One. Orders stay confidential until the trigger price hits, then execute onchain.",
    link: "https://dex.fairblock.network/swap",
  },
  {
    imageUrl: "/c-apps/demos/unruggable-ai.jpg",
    title: "Unruggable AI",
    content:
      "TEEs lose keys on failure or restart. Unruggable AI solves this with TEEs, Fairblock’s MPC, and private decryption to securely back up and recover keys without centralization.",
    link: "https://github.com/Fairblock/Unruggable-AI",
  },
  {
    videoUrl: "/c-apps/demos/lazy-killer.mp4",
    title: "Lazy Killer",
    content:
      "Lazy Killer is a multi-player murder mystery game that utilizes MPC and encryption to keep the suspects in the shadows until the truth emerges.",
    link: "https://lazykiller.fairblock.network/",
  },
  {
    videoUrl: "/c-apps/demos/verifiable-randomness.mp4",
    title: "Verifiable Randomness",
    content:
      "Verifiable randomness unlocks a new generation of gaming, DeFi, distribution, and auction-based apps across chains.",
    link: "https://website-0xfairblock.vercel.app/applications/randomness",
  },
  {
    videoUrl: "/c-apps/demos/onchain-time-bomb.mp4",
    title: "Onchain Time Bomb",
    content:
      "Our Time Bomb game allows users to grasp the power of encryption tangibly. Over 50,000 bombs have exploded since our testnet launch.",
    link: "https://bomb.fairblock.network/",
  },
  {
    videoUrl: "/c-apps/demos/private-governance.mp4",
    title: "Private Governance",
    content:
      "Our private governance module allows EVM and Cosmos users to encrypt their votes in any onchain poll to produce credibly neutral results.",
    link: "https://governance.fairblock.network/",
  },
];

const Section2 = () => {
  return (
    <div className="flex flex-col gap-4 p-4 sm:px-8">
      <p className="pb-8 text-lg lg:text-xl text-center">
        Below is a showcase of our impactful and functional{" "}
        <span className="font-bold">confidential applications (cApps).</span>
      </p>
      {C_APPS_LIST.map((cApp) => {
        return (
          <Card
            key={cApp.title}
            imageUrl={cApp.imageUrl}
            videoUrl={cApp.videoUrl}
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
