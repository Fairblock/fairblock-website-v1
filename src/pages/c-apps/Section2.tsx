// icons
import { PiArrowUpRightBold } from "react-icons/pi";

type CardProps = {
  imageUrl?: string;
  videoUrl?: string;
  title: string;
  content: string;
  link: string;
};

const Card = ({ imageUrl, videoUrl, title, content, link }: CardProps) => {
  return (
    <article className="relative border border-white/80 bg-white/65 backdrop-blur-xl rounded-2xl flex flex-col overflow-hidden shadow-[0_12px_40px_rgba(0,13,20,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/45 hover:bg-white/80 hover:shadow-[0_22px_55px_rgba(55,159,218,0.16)] group">
      <div className="aspect-[16/9] bg-white/50 overflow-hidden relative border-b border-white/80">
        {imageUrl && (
          <a className="block h-full focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary-blue" href={link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
            <img
              className="object-cover object-top h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
              src={imageUrl}
              alt={`${title} landing page`}
              loading="lazy"
            />
          </a>
        )}
        {videoUrl && (
          <video
            className="object-cover h-full w-full"
            src={videoUrl}
            muted
            controls
            playsInline
            preload="metadata"
          />
        )}
      </div>
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="font-heading text-2xl sm:text-[1.65rem] leading-tight text-pretty mb-3">{title}</h3>
        <p className="text-neutral-600 leading-relaxed text-pretty mb-6">{content}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#000D14] w-fit border-b border-primary-blue/60 pb-1 transition-colors hover:text-primary-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-blue"
        >
          Explore
          <PiArrowUpRightBold className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
};

const C_APPS_LIST = [
  {
    imageUrl: "/c-apps/demos/stabletrust.png",
    title: "StableTrust: The Universal Confidential Stablecoin Application",
    content:
      "A universal interface for confidential stablecoin transfers across any chain.",
    link: "https://stabletrust.io/",
  },
  {
    imageUrl: "/c-apps/demos/cusd.png",
    title: "CUSD: Confidential, Compliant Digital Dollars",
    content:
      "Fairblock’s flagship confidential stablecoin, built with M0, Predicate, MxON, and Bridge for private, compliant payments.",
    link: "https://CUSD.fairblock.network/",
  },
  {
    imageUrl: "/c-apps/demos/limen.png",
    title: "Limen: Safer AI for Sensitive Work",
    content:
      "Detect sensitive information in ChatGPT and Claude prompts, apply enterprise policy, and redact what should never leave the browser.",
    link: "https://limen.fairblock.network/",
  },
  {
    imageUrl: "/c-apps/demos/compliance.png",
    title: "Compliance Dashboard: Selective Disclosure",
    content:
      "Give authorized compliance teams and security partners precise, auditable access to the information they need—without exposing everything.",
    link: "https://compliance.fairblock.network/",
  },
  {
    imageUrl: "/c-apps/demos/time-machine.png",
    title: "Time Machine: Confidential Prediction Markets",
    content:
      "Encrypt predictions, protect your strategy, and earn asymmetric rewards for being early and accurate—without frontrunning or exposed positions.",
    link: "https://timemachine.fairblock.network/",
  },
  {
    imageUrl: "/c-apps/demos/yieldshield.png",
    title: "YieldShield: Confidential Stablecoin Yield",
    content:
      "Put stablecoins to work in Morpho-powered vaults while keeping balances and activity confidential with Fairblock.",
    link: "https://yieldshield.fairblock.network/",
  },
  {
    imageUrl: "/c-apps/demos/fairates.png",
    title: "FairRates: Confidential Fixed-Rate Lending",
    content:
      "Discover fixed rates through leaderless, sealed-bid auctions with tighter spreads, no slippage, and reduced liquidation penalties.",
    link: "https://fairates.fairblock.network/",
  },
  {
    imageUrl: "/c-apps/demos/unruggable-ai.png",
    title: "Unruggable AI: Resilient Private Agents",
    content:
      "Combine TEEs, Fairblock MPC, and private decryption to back up and recover agent keys securely—without introducing centralized custody.",
    link: "https://github.com/Fairblock/Unruggable-AI",
  },
  {
    videoUrl: "/c-apps/demos/fairy-cow-swap.mp4",
    title: "FairyCoW: Confidential Intents for CoW Swap",
    content:
      "Protect sensitive order data before execution to reduce information leakage, market impact, and frontrunning. Live on Sepolia.",
    link: "https://swap.fairycow.fi/",
  },
  {
    imageUrl: "/c-apps/demos/fairsplit.png",
    title: "FairSplit: Confidential Expense Sharing",
    content:
      "Create USDC expense splits, track participant payments, and settle balances onchain while revealing only what each participant needs to know.",
    link: "https://fairsplit-repro.vercel.app/",
  },
  {
    videoUrl: "/c-apps/demos/lazy-killer.mp4",
    title: "Lazy Killer: Secrets in Multiplayer Games",
    content:
      "A multiplayer murder mystery that uses MPC and encryption to keep roles and clues hidden until the truth is revealed.",
    link: "https://lazykiller.fairblock.network/",
  },
  {
    videoUrl: "/c-apps/demos/verifiable-randomness.mp4",
    title: "Verifiable Randomness: Fair Outcomes Onchain",
    content:
      "Generate transparent, tamper-resistant randomness for games, DeFi, distributions, and auctions across chains.",
    link: "https://website-0xfairblock.vercel.app/applications/randomness",
  },
  {
    videoUrl: "/c-apps/demos/onchain-time-bomb.mp4",
    title: "Onchain Time Bomb: Encryption in Action",
    content:
      "Experience conditional decryption through a simple onchain game. More than 50,000 time bombs have exploded since testnet launch.",
    link: "https://bomb.fairblock.network/",
  },
  {
    videoUrl: "/c-apps/demos/private-governance.mp4",
    title: "Private Governance: Protected Voting",
    content:
      "Encrypt votes in EVM and Cosmos governance polls to reduce influence, preserve voter privacy, and produce more credible outcomes.",
    link: "https://governance.fairblock.network/",
  },
];

const Section2 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4fbff] via-[#f8faf9] to-[#eef8fb] border-t border-black/[0.04] px-4 sm:px-8 pt-6 sm:pt-8 pb-20 sm:pb-28">
      <div className="absolute top-[5%] -left-32 h-96 w-96 rounded-full bg-primary-blue/20 blur-3xl" aria-hidden="true" />
      <div className="absolute top-[38%] -right-40 h-[30rem] w-[30rem] rounded-full bg-cyan-200/30 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[4%] left-[18%] h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto mb-5 flex max-w-7xl justify-center sm:mb-6">
        <div className="flex items-center gap-2 rounded-full border border-white/90 bg-white/55 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-neutral-500 shadow-[0_8px_28px_rgba(55,159,218,0.08)] backdrop-blur-xl sm:text-sm">
          <span>Scroll down</span>
          <span className="flex h-8 w-8 animate-bounce items-center justify-center rounded-full border border-primary-blue/30 bg-primary-blue/10 text-primary-blue" aria-hidden="true">
            ↓
          </span>
        </div>
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mx-auto max-w-7xl">
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
    </section>
  );
};
export default Section2;
