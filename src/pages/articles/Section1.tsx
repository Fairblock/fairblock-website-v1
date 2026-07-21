import { useEffect, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import LazyImage from "../../common/LazyImage";

// ─── Data ────────────────────────────────────────────────────────────────────

type Article = {
  imageUrl: string;
  title: string;
  body: string;
  link: string;
  site: string;
  category: "Article" | "Research" | "News";
};

const ARTICLES: Article[] = [
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BrRMBnNU37te2g6pXvFOGw.jpeg",
    title: "Forget Privacy Clichés: Confidentiality Means Profit",
    body: "Fairblock enables confidential stablecoin transactions.",
    link: "https://medium.com/@0xfairblock/forget-privacy-clich%C3%A9s-confidentiality-means-profit-c4c31cbb1bbc",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*GcFSj2Sd8xER8EwnfE2nBA.jpeg",
    title: "Privacy vs Compliance Was a Lie",
    body: "Confidentiality can be fully compliant for institutions and retail. Read about Fairblock's approach.",
    link: "https://medium.com/@0xfairblock/privacy-vs-compliance-was-a-lie-043f99339ce3",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "/articles/incorruptible-markets-and-confidential-stablecoin-rails.png",
    title: "Fairblock: Incorruptible Markets and Confidential Stablecoin Rails",
    body: "Fairblock is building the Incorruptible world computer that unlocks secure, trust-minimized applications crucial for the next generation of institutional-grade DeFi systems.",
    link: "https://www.shoal.gg/p/fairblock-incorruptible-markets-and",
    site: "shoal.gg",
    category: "News",
  },
  {
    imageUrl: "/articles/fairblock-q2-2025-overview.png",
    title: "Fairblock Q2 2025 Overview",
    body: "Fairblock is building the Incorruptible Computer. It delivers fair and credible decentralized markets and autonomous machines through institutional-grade confidentiality.",
    link: "https://coinmarketcap.com/community/articles/682cb2cff9996f5939813d6d/",
    site: "coinmarketcap.com",
    category: "News",
  },
  {
    imageUrl: "/articles/fairblock-x-arbitrum.png",
    title: "Permissionless and performant confidential computing for Arbitrum ecosystem",
    body: "Fairblock and Arbitrum are collaborating for trustless and efficient confidential computing in EVM L2s.",
    link: "https://blog.arbitrum.io/how-fairblock-is-unlocking-confidential-payments-and-auctions-on-arbitrum/",
    site: "arbitrum.io",
    category: "News",
  },
  {
    imageUrl: "/articles/ibe-ibe.png",
    title: "Intent-Based Execution through Identity-Based Encryption and Auctions",
    body: "Fairblock is unlocking rapid and leaderless auctions for dynamic and fair price discovery in lending, intent matching, and token launches.",
    link: "https://eprint.iacr.org/2025/241",
    site: "eprint.iacr.org",
    category: "Research",
  },
  {
    imageUrl: "/articles/announcing-fairy-cow.png",
    title: "Announcing FairyCoW: Encrypted Orders for CoW Swap",
    body: "FairyCoW improves onchain trading experiences by increasing capital efficiency and protecting against pre-execution order leakage without reliance on centralized parties.",
    link: "https://medium.com/@0xfairblock/announcing-fairycow-encrypted-orders-for-cow-swap-2a5ae0bd0785",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "/articles/fairblock-q2-2025-overview-1.png",
    title: "What is fully homomorphic encryption and how will it change blockchain?",
    body: "FHE differs from zero-knowledge technology, as it can perform computation on top of encrypted data without revealing data points.",
    link: "https://blockworks.co/news/what-is-fully-homomorphic-encryption",
    site: "blockworks.co",
    category: "News",
  },
  {
    imageUrl: "/articles/multimodal-cryptography-series-accountable-mpc-tee.png",
    title: "Multimodal Cryptography Series — Accountable MPC + TEE",
    body: "Trusted Execution Environment (TEE) is a secure area within the memory and CPU of a device, isolated from the rest of the system through encryption.",
    link: "https://hackmd.io/@Fairblock/rkSiU78TR",
    site: "hackmd.io",
    category: "Research",
  },
  {
    imageUrl: "/articles/what-happened-to-our-decentralized-private-new-internet.png",
    title: "What happened to our decentralized private new internet?",
    body: "The lack of onchain confidentiality has hindered the growth and adoption of even the most obvious applications.",
    link: "https://ethresear.ch/t/what-happened-to-our-decentralized-private-new-internet/20657",
    site: "ethresear.ch",
    category: "Research",
  },
  {
    imageUrl: "/articles/mpcs-going-harder-better-faster-and-stronger.png",
    title: "MPCs going Harder, Better, Faster, and Stronger",
    body: "At Fairblock, we have implemented Joint Feldman DKG, one of the most widely used DKG schemes, consisting of (n) parallel verifiable secret sharing instances.",
    link: "https://hackmd.io/@Fairblock/r1YoJakpA",
    site: "hackmd.io",
    category: "Research",
  },
  {
    imageUrl: "/articles/fairblock-x-symbiotic.png",
    title: "Introducing Dynamic Operator Sets: Secured by Symbiotic",
    body: "Fairblock's dynamic operator sets allow protocol and application developers looking for more cryptographic flexibility to leverage multiple solutions within a tailored network.",
    link: "https://medium.com/@0xfairblock/introducing-dynamic-operator-sets-secured-by-symbiotic-53fd2b0ecdef",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "/articles/fairblock-public-testnet-is-now-live.png",
    title: "Fairblock Public Testnet is Now Live",
    body: "We're thrilled to announce the launch of our first public testnet, FairyRing.",
    link: "https://medium.com/@0xfairblock/fairblock-public-testnet-is-now-live-a487f97ea3e0",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "/articles/no-more-plain-vanilla-defi.png",
    title: "No More Plain Vanilla DeFi — We Need More Flavors",
    body: "DeFi accounts for the lion's share of onchain activity and supports the weight of Ethereum's security budget.",
    link: "https://medium.com/@0xfairblock/no-more-plain-vanilla-defi-we-need-more-flavors-1ce16018f7b9",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "/articles/fairblock-raises-2.5m-to-build.png",
    title: "Fairblock raises $2.5M",
    body: "Fairblock raises $2.5M to build toward conditional decryption and programmable privacy.",
    link: "https://medium.com/@0xfairblock/fairblock-raises-2-5m-to-build-toward-conditional-decryption-and-pre-execution-privacy-8f652877bf95",
    site: "medium.com",
    category: "News",
  },
  {
    imageUrl: "/articles/encryption-is-the-prescription.png",
    title: "Encryption is the Prescription",
    body: "Encryption is a prerequisite for blockchains to become the future of the internet.",
    link: "https://medium.com/@0xfairblock/encryption-is-the-prescription-925beef5b226",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "/articles/fairblock-x-secret.png",
    title: "Fresh Wave of Privacy-Enhancing Technologies",
    body: "Fairblock and Secret Network Partner To Develop New Generation of Privacy-Enhancing Products.",
    link: "https://medium.com/@0xfairblock/fresh-wave-of-privacy-enhancing-technologies-d39008ec7eda",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "/articles/fast-fairy-series.png",
    title: "Fast Fairy Series: Programmable Privacy in DeFi",
    body: "Decentralized finance is a radically new and distinct means of conducting financial activities.",
    link: "https://medium.com/@0xfairblock/fast-fairy-series-programmable-privacy-in-defi-102b16ee8245",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "/articles/fast-fairy-series-three-cryptographic.png",
    title: "Fast Fairy Series: Three Cryptographic Schemes Advancing Programmable Privacy",
    body: "Here we'll be taking a deeper look into all three schemes, their unique properties, and what benefits they offer.",
    link: "https://medium.com/@0xfairblock/fast-fairy-series-three-cryptographic-schemes-advancing-programmable-privacy-57637c78b0d6",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "/articles/fast-fairy-series-fairblocks-vision.png",
    title: "Fast Fairy Series: Fairblock's Vision",
    body: "Fairblock Delivers the Practical Privacy Tools Enabling Novel Web3 Applications.",
    link: "https://medium.com/@0xfairblock/fast-fairy-series-fairblocks-vision-340c37769ccf",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "/articles/fast-fairy-series-private-governance.png",
    title: "Fast Fairy Series: Private Governance",
    body: "In the second installment of the Fast Fairy Series, we delve into private governance, an application made possible by Fairblock infrastructure.",
    link: "https://medium.com/@0xfairblock/fast-fairy-series-private-governance-b41b5faa0613",
    site: "medium.com",
    category: "Article",
  },
  {
    imageUrl: "/articles/fast-fairy-series-fairyring-architecture.png",
    title: "Fast Fairy Series: FairyRing Architecture I",
    body: "In the Fast Fairy Series, we publish articles covering our architecture, design, potential applications, cryptography, and long-term vision.",
    link: "https://medium.com/@0xfairblock/fast-fairy-series-fairyring-architecture-i-d5293e0ce665",
    site: "medium.com",
    category: "Article",
  },
  // News from press
  {
    imageUrl: "https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2024%2F03%2FED_hacks_20231105d-1-1.jpg&w=1920&q=75",
    title: "What is fully homomorphic encryption and how will it change blockchain?",
    body: "FHE differs from zero-knowledge technology, as it can perform computation on top of encrypted data without revealing data points.",
    link: "https://blockworks.co/news/what-is-fully-homomorphic-encryption",
    site: "blockworks.co",
    category: "News",
  },
  {
    imageUrl: "https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2023%2F10%2Ffairblocks-decryption.jpg&w=1920&q=75",
    title: "Fairblock raises $2.5M for fully private blockchain transactions",
    body: "The Fairblock team has recently secured $2.5 million from investors to bring conditional encryption to blockchains.",
    link: "https://blockworks.co/news/fairblock-fundraising-conditional-decryption-privacy",
    site: "blockworks.co",
    category: "News",
  },
  {
    imageUrl: "https://uwaterloo.ca/computer-science/sites/default/files/uploads/images/peyman-momeni-in-dc-1500-pixels.jpg",
    title: "Fairblock, co-founded by Cheriton alumnus Peyman Momeni, secures $2.5M USD",
    body: "Fairblock has secured $2.5 million to build infrastructure to bring conditional encryption and pre-execution privacy to blockchains.",
    link: "https://uwaterloo.ca/computer-science/news/fairblock-co-founded-cheriton-alumnus-peyman-momeni-secures-2-point-5-m-usd-privacy-decentralized-applications",
    site: "uwaterloo.ca",
    category: "News",
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<string, string> = {
  Article: "#141210",
  Research: "#141210",
  News: "#141210",
};

function CategoryTag({ label }: { label: string }) {
  return (
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "9px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: CATEGORY_COLORS[label] ?? "#141210",
      opacity: 0.5,
    }}>
      {label}
    </span>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3"
      style={{ textDecoration: "none" }}
    >
      {/* Image */}
      <LazyImage src={article.imageUrl} alt={article.title} />

      {/* Meta */}
      <div className="flex items-center gap-2">
        <CategoryTag label={article.category} />
        <span style={{ color: "#8892A4", fontSize: "9px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>·</span>
        <span style={{ color: "#8892A4", fontSize: "9px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>{article.site}</span>
      </div>

      {/* Title */}
      <h3
        className="font-heading font-normal"
        style={{ fontSize: "1.1rem", lineHeight: 1.3, color: "#141210", letterSpacing: "-0.01em" }}
      >
        {article.title}
      </h3>

      {/* Excerpt */}
      <p
        className="line-clamp-2"
        style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "13px", lineHeight: 1.6, color: "#141210", opacity: 0.5 }}
      >
        {article.body}
      </p>

      {/* Read link */}
      <span
        className="flex items-center gap-1"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", color: "#141210", opacity: 0.4, transition: "opacity .2s" }}
      >
        Read article <LuArrowUpRight style={{ width: 11, height: 11 }} />
      </span>
    </a>
  );
}

function FeaturedCard({ article }: { article: Article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-black/10 pb-14"
      style={{ textDecoration: "none" }}
    >
      {/* Image */}
      <LazyImage src={article.imageUrl} alt={article.title} aspectRatio="16/9" />

      {/* Content */}
      <div className="flex flex-col justify-center gap-4">
        <div className="flex items-center gap-2">
          <CategoryTag label={article.category} />
          <span style={{ color: "#8892A4", fontSize: "9px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>·</span>
          <span style={{ color: "#8892A4", fontSize: "9px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>{article.site}</span>
        </div>

        <h2
          className="font-heading font-normal"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", lineHeight: 1.2, color: "#141210", letterSpacing: "-0.02em" }}
        >
          {article.title}
        </h2>

        <p style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "15px", lineHeight: 1.7, color: "#141210", opacity: 0.55 }}>
          {article.body}
        </p>

        <span
          className="flex items-center gap-1 mt-2"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", color: "#141210", opacity: 0.45 }}
        >
          Read article <LuArrowUpRight style={{ width: 12, height: 12 }} />
        </span>
      </div>
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const FILTERS = ["All", "Article", "Research", "News"] as const;
type Filter = typeof FILTERS[number];

const Section1 = () => {
  const [active, setActive] = useState<Filter>("All");

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  const filtered = active === "All" ? ARTICLES : ARTICLES.filter(a => a.category === active);
  const [featured, ...rest] = filtered;

  return (
    <div className="mx-auto max-w-[1920px] px-6 sm:px-10 lg:px-14 pt-[14vh] pb-24">

      {/* Page header */}
      <div className="border-b border-black/10 pb-10 mb-14">
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "10px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#8892A4",
          marginBottom: "1.25rem",
        }}>
          Fairblock Network
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h1
            className="font-heading font-normal"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "#141210" }}
          >
            Articles
          </h1>

          {/* Filter tabs */}
          <div className="flex items-center gap-1">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "7px 14px",
                  border: "1px solid",
                  borderColor: active === f ? "#141210" : "rgba(0,0,0,0.12)",
                  background: active === f ? "#141210" : "transparent",
                  color: active === f ? "#FBF9F3" : "#8892A4",
                  cursor: "pointer",
                  transition: "all .15s",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured article */}
      {featured && <FeaturedCard article={featured} />}

      {/* Grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mt-14">
          {rest.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section1;
