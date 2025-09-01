import { useEffect } from "react";
import { LuExternalLink } from "react-icons/lu";

export const TWEETS_ARRAY = [
  <blockquote className="twitter-tweet" data-theme="dark">
    <p lang="en" dir="ltr">
      Announcing FairyCoW Swap, an auxiliary application for{" "}
      <a href="https://twitter.com/CoWSwap?ref_src=twsrc%5Etfw">@CoWSwap</a>{" "}
      that improves onchain trading experiences by protecting against
      pre-execution order leakage and increasing capital efficiency without
      reliance on centralized parties🔐
      <a href="https://t.co/y1ILqoQjWD">https://t.co/y1ILqoQjWD</a>
    </p>
    &mdash; Fairblock (@0xfairblock){" "}
    <a href="https://twitter.com/0xfairblock/status/1787486066498257208?ref_src=twsrc%5Etfw">
      May 6, 2024
    </a>
  </blockquote>,
  <blockquote className="twitter-tweet" data-theme="dark">
    <p lang="en" dir="ltr">
      We’re excited to share our recent ETH Research article with{" "}
      <a href="https://twitter.com/Polymer_Labs?ref_src=twsrc%5Etfw">
        @Polymer_Labs
      </a>
      : <br />
      <br />
      Accessible Encryption for Ethereum Rollups with Fairomon.
      <br />
      <br />
      Link: <a href="https://t.co/js4ZjZKk4V">https://t.co/js4ZjZKk4V</a>
      <br />
      <br />
      With Fairomon, developers can easily deploy Ethereum rollups with built-in
      encryption.{" "}
      <a href="https://t.co/k5V9NKE4yC">pic.twitter.com/k5V9NKE4yC</a>
    </p>
    &mdash; Fairblock (@0xfairblock){" "}
    <a href="https://twitter.com/0xfairblock/status/1828829131892543818?ref_src=twsrc%5Etfw">
      August 28, 2024
    </a>
  </blockquote>,
  <blockquote className="twitter-tweet" data-theme="dark">
    <p lang="en" dir="ltr">
      MPCs are getting harder, better, faster, stronger.
      <br />
      <br />
      In this research article, we explore MPC and secret sharing. What do
      parties know? Do they know things? Let&#39;s find out.
      <a href="https://t.co/f7u0FVv3kJ">https://t.co/f7u0FVv3kJ</a>{" "}
      <a href="https://t.co/r52MND45yw">pic.twitter.com/r52MND45yw</a>
    </p>
    &mdash; Fairblock (@0xfairblock){" "}
    <a href="https://twitter.com/0xfairblock/status/1834230746674037011?ref_src=twsrc%5Etfw">
      September 12, 2024
    </a>
  </blockquote>,
  <blockquote className="twitter-tweet" data-theme="dark">
    <p lang="en" dir="ltr">
      Space: Dark Pools &amp; Their Role in the Future of Blockchains
      <br />
      <br />
      We&#39;re hosting{" "}
      <a href="https://twitter.com/yusufxzy?ref_src=twsrc%5Etfw">
        @yusufxzy
      </a>{" "}
      from{" "}
      <a href="https://twitter.com/Delphi_Digital?ref_src=twsrc%5Etfw">
        @Delphi_Digital
      </a>{" "}
      tomorrow at 12pm EST to discuss dark pools, various architectures, and
      their role in blockchain adoption.
      <br />
      <br />
      Set your reminders⏰ Sept. 10 @ 12pm EST:{" "}
      <a href="https://t.co/1AAQhXnuqJ">https://t.co/1AAQhXnuqJ</a>{" "}
      <a href="https://t.co/fZNjssy6g1">pic.twitter.com/fZNjssy6g1</a>
    </p>
    &mdash; Fairblock (@0xfairblock){" "}
    <a href="https://twitter.com/0xfairblock/status/1833194214655492514?ref_src=twsrc%5Etfw">
      September 9, 2024
    </a>
  </blockquote>,
  <blockquote className="twitter-tweet" data-theme="dark">
    <p lang="en" dir="ltr">
      Great chatting with{" "}
      <a href="https://twitter.com/GuyZys?ref_src=twsrc%5Etfw">@GuyZys</a> from{" "}
      <a href="https://twitter.com/FhenixIO?ref_src=twsrc%5Etfw">@FhenixIO</a>,{" "}
      <a href="https://twitter.com/ravitals?ref_src=twsrc%5Etfw">@ravitals</a>{" "}
      from{" "}
      <a href="https://twitter.com/SunscreenTech?ref_src=twsrc%5Etfw">
        @SunscreenTech
      </a>
      , and{" "}
      <a href="https://twitter.com/0xbyyou?ref_src=twsrc%5Etfw">@0xbyyou</a>{" "}
      from @Fair_Block today about the State of Privacy in the Transaction
      Supply Chain. <br />
      <br />
      Guy and Ravital both betting on 1-2 years for FHE to be reliably available
      on-chain. Ambitious - I love it.{" "}
      <a href="https://t.co/PyCTu2yr29">https://t.co/PyCTu2yr29</a>
    </p>
    &mdash; Liam McDonald (@maccanomics){" "}
    <a href="https://twitter.com/maccanomics/status/1763690741040021634?ref_src=twsrc%5Etfw">
      March 1, 2024
    </a>
  </blockquote>,
  <blockquote className="twitter-tweet" data-theme="dark">
    <p lang="en" dir="ltr">
      🔁 ICYMI:{" "}
      <a href="https://twitter.com/Pememoni?ref_src=twsrc%5Etfw">@Pememoni</a>{" "}
      of @Fair_Block explores the vital role of privacy in decentralized
      systems. From enhancing security to aligning with user incentives,
      it&#39;s a crucial topic in the crypto space. Missed it? Dive in now! 🚀{" "}
      <a href="https://twitter.com/hashtag/smarteconomypodcast?src=hash&amp;ref_src=twsrc%5Etfw">
        #smarteconomypodcast
      </a>
      <a href="https://t.co/dxnQdbvgnB">https://t.co/dxnQdbvgnB</a>{" "}
      <a href="https://t.co/xJr9dShUOY">pic.twitter.com/xJr9dShUOY</a>
    </p>
    &mdash; Smart Economy Podcast (@SmartEconomyPod){" "}
    <a href="https://twitter.com/SmartEconomyPod/status/1763248008928301274?ref_src=twsrc%5Etfw">
      February 29, 2024
    </a>
  </blockquote>,
];

export const ARTICLE_CARDS_ARRAY = [
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BrRMBnNU37te2g6pXvFOGw.jpeg",
    newsHeader: "Forget Privacy Clichés: Confidentiality Means Profit",
    newsBody:
      "Fairblock enables confidential stablecoin transactions by encrypting amounts while keeping addresses transparent. With growing interest from enterprise payment networks like Stripe, Robinhood and PayPal, it offers compliance-ready selective disclosure, high performance, and seamless multi-chain integration.",
    newsLink:
      "https://medium.com/@0xfairblock/forget-privacy-clich%C3%A9s-confidentiality-means-profit-c4c31cbb1bbc",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "/articles/incorruptible-markets-and-confidential-stablecoin-rails.png",
    newsHeader:
      "Fairblock: Incorruptible Markets and Confidential Stablecoin Rails",
    newsBody:
      "Fairblock is building the Incorruptible world computer that unlocks secure, trust-minimized applications crucial for the next generation of institutional-grade DeFi systems.",
    newsLink: "https://www.shoal.gg/p/fairblock-incorruptible-markets-and",
    site: "shoal.gg",
    type: "articles",
  },
  {
    imageUrl: "/articles/fairblock-q2-2025-overview.png",
    newsHeader: "Fairblock Q2 2025 Overview",
    newsBody:
      "Fairblock is building the Incorruptible Computer. It delivers fair and credible decentralized markets and autonomous machines through institutional-grade confidentiality. The outcome is provably fair trades, transfers, bids, and AI decisions that preserve trust and credibility.",
    newsLink:
      "https://coinmarketcap.com/community/articles/682cb2cff9996f5939813d6d/",
    site: "coinmarketcap.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fairblock-x-ritual.png",
    newsHeader: "Trustless and Unstoppable Al with Fairblock and Ritual",
    newsBody:
      "Fairblock and Ritual are collaborating for Trustless and Unstoppable Al economies through decentralized confidential computing.",
    newsLink:
      "https://medium.com/@0xfairblock/confidential-rituals-trustless-and-unstoppable-ai-with-dynamic-confidentiality-95ecaee66e4c",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fairblock-x-arbitrum.png",
    newsHeader:
      "Permissionless and performant confidential computing for Arbitrum ecosystem",
    newsBody:
      "Fairblock and Arbitrum are collaborating for permissionless and efficient confidential computing in EVM L2s.",
    newsLink:
      "https://medium.com/@0xfairblock/unlocking-arbitrum-with-dynamic-confidentiality-c376f4dd3000",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/ibe-ibe.png",
    newsHeader:
      "Intent-Based Execution through Identity-Based Encryption and Auctions",
    newsBody:
      "Fairblock is unlocking rapid and leaderless auctions for dynamic and fair price discovery in intent matching, lending markets, token launches, and RWA/NFT sales.",
    newsLink: "https://eprint.iacr.org/2025/241",
    site: "eprint.iacr.org",
    type: "articles",
  },
  {
    imageUrl: "/articles/fairblock-x-altlayer.png",
    newsHeader: "Encrypt Every Rollup",
    newsBody:
      "Bringing Dynamic Confidentiality to Rollup Developers with AltLayer.",
    newsLink:
      "https://medium.com/@0xfairblock/encrypting-every-rollup-ae95cfcad848",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fairblock-x-camp.png",
    newsHeader:
      "Native Encryption for the OP Superchain with Camp and Fairblock",
    newsBody:
      "Fairblock and Camp Network are collaborating to bring confidential computing to Optimism Superchain and Camp Ecosystem of Al and consumer applications.",
    newsLink:
      "https://medium.com/@0xfairblock/native-encryption-for-the-op-superchain-with-camp-and-fairblock-e003dc62c648",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/announcing-fairy-cow.png",
    newsHeader: "Announcing FairyCoW: Encrypted Orders for CoW Swap",
    newsBody:
      "FairyCoW improves onchain trading experiences by increasing capital efficiency and protecting against pre-execution order leakage without reliance on centralized parties.",
    newsLink:
      "https://medium.com/@0xfairblock/announcing-fairycow-encrypted-orders-for-cow-swap-2a5ae0bd0785",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fairblock-q2-2025-overview-1.png",
    newsHeader:
      "What is fully homomorphic encryption and how will it change blockchain?",
    newsBody:
      "FHE differs from zero-knowledge technology, as it can perform computation on top of encrypted data without revealing data points.",
    newsLink: "https://blockworks.co/news/what-is-fully-homomorphic-encryption",
    site: "blockworks.co",
    type: "articles",
  },
  {
    imageUrl:
      "/articles/multimodal-cryptography-series-accountable-mpc-tee.png",
    newsHeader: "Multimodal Cryptography Series - Accountable MPC + TEE",
    newsBody:
      "Trusted Execution Environment (TEE) is a secure area within the memory and CPU of a device (computer or server), isolated from the rest of the system through encryption.",
    newsLink: "https://hackmd.io/@Fairblock/rkSiU78TR",
    site: "hackmd.io",
    type: "articles",
  },
  {
    imageUrl:
      "/articles/what-happened-to-our-decentralized-private-new-internet.png",
    newsHeader: "What happened to our decentralized private new internet?",
    newsBody:
      "The lack of onchain confidentiality has hindered the growth and adoption of even the most obvious applications.",
    newsLink:
      "https://ethresear.ch/t/what-happened-to-our-decentralized-private-new-internet/20657",
    site: "ethresear.ch",
    type: "articles",
  },
  {
    imageUrl: "/articles/mpcs-going-harder-better-faster-and-stronger.png",
    newsHeader: "MPCs going Harder, Better, Faster, and Stronger",
    newsBody:
      "At Fairblock, we have implemented Joint Feldman DKG, which is one of the most widely used DKG schemes nowadays and consists of (n) parallel verifiable secret sharing (VSS) instances.",
    newsLink: "https://hackmd.io/@Fairblock/r1YoJakpA",
    site: "hackmd.io",
    type: "articles",
  },
  {
    imageUrl: "/articles/fairblock-x-symbiotic.png",
    newsHeader: "Introducing Dynamic Operator Sets: Secured by Symbiotic",
    newsBody:
      "Fairblock's dynamic operator sets allow protocol and application developers looking for more cryptographic flexibility to leverage multiple solutions within a tailored network.",
    newsLink:
      "https://medium.com/@0xfairblock/introducing-dynamic-operator-sets-secured-by-symbiotic-53fd2b0ecdef",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fairblock-public-testnet-is-now-live.png",
    newsHeader: "Fairblock Public Testnet is Now Live",
    newsBody:
      "We're thrilled to announce the launch of our first public testnet, FairyRing.",
    newsLink:
      "https://medium.com/@0xfairblock/fairblock-public-testnet-is-now-live-a487f97ea3e0",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "/articles/accessible-encryption-for-ethereum-rollups-with-fairomon.png",
    newsHeader: "Accessible Encryption for Ethereum Rollups with Fairomon",
    newsBody:
      "Fairomon is a special fairy type pokemon that combines the work of Fairblock and Monomer - a framework that enables builders to create Ethereum rollups with built-in encryption with minimal lift.",
    newsLink:
      "https://ethresear.ch/t/accessible-encryption-for-ethereum-rollups-with-fairomon/20349",
    site: "ethresear.ch",
    type: "articles",
  },
  {
    imageUrl: "/articles/no-more-plain-vanilla-defi.png",
    newsHeader: "No More Plain Vanilla DeFi - We Need More Flavors",
    newsBody:
      "The Vitalik doesn't support DeFi' narrative is misunderstood. DeFi accounts for the lionshare of onchain activity and supports the weight of Ethereum's security budget — Vitalik and the Ethereum community understand this.",
    newsLink:
      "https://medium.com/@0xfairblock/no-more-plain-vanilla-defi-we-need-more-flavors-1ce16018f7b9",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fairblock-raises-2.5m-to-build.png",
    newsHeader: "Fairblock raises 2.5M",
    newsBody:
      "Fairblock raises 2.5M to build toward conditional decryption and programmable privacy.",
    newsLink:
      "https://medium.com/@0xfairblock/fairblock-raises-2-5m-to-build-toward-conditional-decryption-and-pre-execution-privacy-8f652877bf95",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/encryption-is-the-prescription.png",
    newsHeader: "Encryption is the Prescription",
    newsBody:
      "Encryption is a prerequisite for blockchains to become the future of the internet.",
    newsLink:
      "https://medium.com/@0xfairblock/encryption-is-the-prescription-925beef5b226",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fairblock-x-secret.png",
    newsHeader: "Fresh Wave of Privacy-Enhancing",
    newsBody:
      "Fairblock and Secret Network Partner To Develop New Generation of Privacy-Enhancing Products.",
    newsLink:
      "https://medium.com/@0xfairblock/fresh-wave-of-privacy-enhancing-technologies-d39008ec7eda",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fast-fairy-series.png",
    newsHeader: "Fast Fairy Series: Programmable Privacy in DeFi",
    newsBody:
      "Decentralized finance is a radically new and distinct means of conducting financial activities.",
    newsLink:
      "https://medium.com/@0xfairblock/fast-fairy-series-programmable-privacy-in-defi-102b16ee8245",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fast-fairy-series-three-cryptographic.png",
    newsHeader:
      "Fast Fairy Series: Three Cryptographic Schemes Advancing Programmable Privacy",
    newsBody:
      "Here we'll be taking a deeper look into all three schemes, their unique properties, and what benefits they offer.",
    newsLink:
      "https://medium.com/@0xfairblock/fast-fairy-series-three-cryptographic-schemes-advancing-programmable-privacy-57637c78b0d6",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fast-fairy-series-fairblocks-vision.png",
    newsHeader: "Fast Fairy Series: Fairblock's Vision",
    newsBody:
      "Fairblock Delivers the Practical Privacy Tools Enabling Novel Web3 Applications",
    newsLink:
      "https://medium.com/@0xfairblock/fast-fairy-series-fairblocks-vision-340c37769ccf",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fast-fairy-series-private-governance.png",
    newsHeader: "Fast Fairy Series: Private Governance",
    newsBody:
      'In the second installment of the Fast Fairy Series, we delve into "private governance", an application made possible by Fairblock infrastructure.',
    newsLink:
      "https://medium.com/@0xfairblock/fast-fairy-series-private-governance-b41b5faa0613",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/articles/fast-fairy-series-fairyring-architecture.png",
    newsHeader: "Fast Fairy Series: FairyRing Architecture I",
    newsBody:
      "In the Fast Fairy Series, we are going to publish a series of articles to cover our architecture,design, potential applications, cryptography, and our long-term vision.",
    newsLink:
      "https://medium.com/@0xfairblock/fast-fairy-series-fairyring-architecture-i-d5293e0ce665",
    site: "medium.com",
    type: "articles",
  },
];

export const NEWS_CARDS_ARRAY_2 = [
  {
    imageUrl:
      "https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2024%2F03%2FED_hacks_20231105d-1-1.jpg&w=1920&q=75",
    newsHeader:
      "What is fully homomorphic encryption and how will it change blockchain?",
    newsBody:
      "FHE differs from zero-knowledge technology, as it can perform computation on top of encrypted data without revealing data points",
    newsLink: "https://blockworks.co/news/what-is-fully-homomorphic-encryption",
    site: "blockworks.co",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kaDqFWboWQAAGtt-acvJEQ.png",
    newsHeader: "Fresh Wave of Privacy-Enhancing Technologies",
    newsBody:
      "Fairblock and Secret Network Partner To Develop New Generation of Privacy-Enhancing Products",
    newsLink:
      "https://medium.com/@0xfairblock/fresh-wave-of-privacy-enhancing-technologies-d39008ec7eda",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2023%2F10%2Ffairblocks-decryption.jpg&w=1920&q=75",
    newsHeader:
      "Fairblock raises $2.5M for fully private blockchain transactions",
    newsBody:
      "The Fairblock team has recently secured $2.5 million from investors to bring conditional encryption to blockchains",
    newsLink:
      "https://blockworks.co/news/fairblock-fundraising-conditional-decryption-privacy",
    site: "blockworks.co",
    type: "news",
  },
  {
    imageUrl:
      "https://uwaterloo.ca/computer-science/sites/default/files/uploads/images/peyman-momeni-in-dc-1500-pixels.jpg",
    newsHeader:
      "Fairblock, company co-founded by Cheriton alumnus Peyman Momeni, secures $2.5M USD for privacy of decentralized applications",
    newsBody:
      "Fairblock, a company co-founded by Cheriton School of Computer Science master's graduate Peyman Momeni, has secured $2.5 million to build infrastructure to bring conditional encryption and pre-execution privacy to blockchains.",
    newsLink:
      "https://uwaterloo.ca/computer-science/news/fairblock-co-founded-cheriton-alumnus-peyman-momeni-secures-2-point-5-m-usd-privacy-decentralized-applications",
    site: "uwaterloo.ca",
    type: "news",
  },
];

type NewsCardProps = {
  imageUrl: string;
  newsHeader: string;
  newsBody: string;
  newsLink: string;
  site: string;
  type?: string;
};

const Card = ({
  imageUrl,
  newsHeader,
  newsBody,
  newsLink,
  site,
}: NewsCardProps) => {
  return (
    <div className="border border-white/50 duration-300 p-4 rounded-2xl hover:scale-[1.03] will-change-transform shadow-md shadow-black/20 dark:shadow-black">
      <a href={newsLink} target="_blank">
        <div className="mb-4">
          <img
            className="object-cover rounded-xl w-full"
            src={imageUrl}
            alt={newsHeader}
          />
        </div>
        <div className="text-base">
          <h4 className="font-semibold py-2">{newsHeader}</h4>
          <p className="font-eb-garamond line-clamp-3 my-2">{newsBody}</p>
          <p className="flex font-semibold items-center gap-2 py-2 text-neutral-400">
            <span>{site}</span> <LuExternalLink />
          </p>
        </div>
      </a>
    </div>
  );
};

// Code for twitter widgets to load
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}

const Section1 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Code for twitter widgets to load
  useEffect(() => {
    // Ensure Twitter script is loaded
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    // Apply Twitter styles after script loads
    script.onload = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    };
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 lg:py-12">
        {/* SECTION 01 - ARTICLES & RESEARCH */}
        <h2 className="font-marlide text-primary-blue text-4xl lg:text-5xl text-center mb-8 xl:mb-12">
          Articles & Research
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ARTICLE_CARDS_ARRAY.map((item, index) => (
            <Card
              key={index}
              imageUrl={item.imageUrl}
              newsHeader={item.newsHeader}
              newsBody={item.newsBody}
              newsLink={item.newsLink}
              site={item.site}
            />
          ))}
        </div>

        {/* SECTION 02 - NEWS */}
        <h2 className="font-marlide text-primary-blue text-4xl lg:text-5xl text-center my-8 xl:my-12">
          News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {NEWS_CARDS_ARRAY_2.map((item, index) => (
            <Card
              key={index}
              imageUrl={item.imageUrl}
              newsHeader={item.newsHeader}
              newsBody={item.newsBody}
              newsLink={item.newsLink}
              site={item.site}
            />
          ))}
        </div>

        {/* SECTION 03 - TWEETS */}
        <h2 className="font-marlide text-primary-blue text-4xl lg:text-5xl text-center my-8 xl:my-12">
          Tweets
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
          {TWEETS_ARRAY.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Section1;
