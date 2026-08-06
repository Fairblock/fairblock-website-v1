import { LuCode, LuKey, LuBuilding2 } from "react-icons/lu";

// ─── SVG graphics (one unique per product) ────────────────────────────────────

const GRID = (id: string) => (
  <>
    <defs>
      <pattern id={id} width="36" height="36" patternUnits="userSpaceOnUse">
        <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="600" height="400" fill={`url(#${id})`} />
  </>
);

export const SdkGraphic = () => (
  <svg viewBox="0 0 600 400" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {GRID("pr2")}
    <rect x="1" y="1" width="598" height="398" fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
    <rect x="0" y="0" width="600" height="40" fill="rgba(0,0,0,0.025)" />
    <circle cx="18" cy="20" r="4" fill="#58BDF6" />
    <text x="30" y="24" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4" letterSpacing="1.5">STABLETRUST SDK · QUICKSTART</text>

    <text x="24" y="64" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{'$ npm install @fairblock/stabletrust'}</text>
    <text x="24" y="92" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{'const client = new ConfidentialTransferClient(rpcUrl, chainId)'}</text>
    <text x="24" y="112" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{'const { publicKey } = await client.ensureAccount(signer)'}</text>

    <text x="24" y="140" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{'await client.confidentialTransfer({'}</text>
    {[
      ['"recipient"', '"0xE91B…4C7A"', "#141210"],
      ['"tokenAddress"', '"0x036C…dCF7e"', "#141210"],
      ['"amount"', "[ENCRYPTED]", "#58BDF6"],
    ].map(([k, v, vc], i) => (
      <g key={k}>
        <text x="24" y={162 + i * 20} fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{`  ${k}:`}</text>
        <text x="170" y={162 + i * 20} fontFamily="JetBrains Mono,monospace" fontSize="9" fill={vc}>{v}</text>
      </g>
    ))}
    <text x="24" y="228" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">{'})'}</text>

    <line x1="20" y1="248" x2="580" y2="248" stroke="rgba(0,0,0,0.06)" />
    <text x="24" y="270" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#141210">GET BALANCE  ·  FairyRing</text>
    <text x="24" y="292" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{'{'}</text>
    <text x="24" y="312" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{'  "available":'}</text>
    <text x="150" y="312" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#58BDF6">[ENCRYPTED]</text>
    <text x="24" y="332" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{'  "pending":'}</text>
    <text x="140" y="332" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#58BDF6">[ENCRYPTED]</text>
    <text x="24" y="352" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8892A4">{'}'}</text>
    <text x="580" y="376" textAnchor="end" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8892A4">PRIVATE KEYS NEVER LEAVE THE BROWSER</text>
  </svg>
);

// ─── Product definitions ───────────────────────────────────────────────────────

export type Feature = {
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>;
  title: string;
  body: string;
};

export type EmbedExample = string | { name: string; logo: string };

export type EmbedCategory = {
  label: string;
  examples: EmbedExample[];
};

export type Product = {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  features: Feature[];
  Graphic: () => React.JSX.Element;
  ctaLabel: string;
  ctaUrl: string;
  embeddedIn?: EmbedCategory[];
};

export const PRODUCTS: Product[] = [
  {
    id: "stabletrust-sdk", number: "01",
    title: "Stabletrust SDK",
    headline: "Confidential transfers, one SDK away.",
    description: "Install one SDK and add confidential transfers to your app. Users get encrypted balances and private transfers, with no wrapping, bridging, or wallet switching required.",
    features: [
      { Icon: LuCode,      title: "Easy install",           body: "One command adds confidential transfers to your app: deposit, send, withdraw, and check balances, ready to use right away." },
      { Icon: LuKey,       title: "Compliance friendly",     body: "Screen or block addresses to stay AML compliant, with selective disclosure that gives authorized parties access when needed. Composable with OFAC and address-screening services out of the box." },
      { Icon: LuBuilding2, title: "No extra infrastructure", body: "Encrypted balances settle through minimal gateway contracts and the infrastructure that Fairblock operates, so partner teams don't run any additional infrastructure." },
    ],
    embeddedIn: [
      { label: "Neobanks",                  examples: [
        { name: "Plasma One", logo: "/logos/neobanks/plasma-one.png" },
        { name: "Kast",       logo: "/logos/neobanks/kast.png" },
        { name: "Venmo",      logo: "/logos/neobanks/venmo.png" },
      ] },
      { label: "DeFi",                      examples: [
        { name: "Morpho",      logo: "/logos/defi/morpho.png" },
        { name: "CoW Swap",    logo: "/logos/defi/cow-swap.png" },
        { name: "LI.FI",       logo: "/logos/defi/li-fi.png" },
        { name: "Flowtraders", logo: "/logos/defi/flow-traders.png" },
      ] },
      { label: "Stablecoin & Token Issuers", examples: [
        { name: "M0",        logo: "/logos/issuers/m0.png" },
        { name: "PayPal",    logo: "/logos/issuers/paypal.png" },
        { name: "Anchorage", logo: "/logos/issuers/anchorage.png" },
      ] },
      { label: "Wallets",                   examples: [
        { name: "MetaMask", logo: "/logos/wallets/metamask.png" },
        { name: "Keplr",    logo: "/logos/wallets/keplr.png" },
        { name: "Turnkey",  logo: "/logos/wallets/turnkey.png" },
      ] },
      { label: "Tokenized Assets",          examples: [
        { name: "Ondo",        logo: "/logos/tokenized-assets/ondo.png" },
        { name: "Securitize",  logo: "/logos/tokenized-assets/securitize.png" },
        { name: "xStock",      logo: "/logos/tokenized-assets/xstock.png" },
      ] },
    ],
    Graphic: SdkGraphic,
    ctaLabel: "Read the SDK docs",
    ctaUrl: "https://docs.fairblock.network/ct/guides/build/building-with-sdk",
  },
];

// ─── Nav-level product list ────────────────────────────────────────────────────
// Used by the Products dropdown (desktop + mobile). Some entries link straight to
// the live app; only entries with `internal: true` have a dedicated page on this site.

export type NavProduct =
  | { id: string; title: string; internal: true; to: string }
  | { id: string; title: string; internal: false; href: string };

export const NAV_PRODUCTS: NavProduct[] = [
  { id: "stabletrust-pay", title: "Stabletrust Pay",             internal: false, href: "https://stabletrust.io/" },
  { id: "stabletrust-sdk", title: "Stabletrust SDK",              internal: true,  to: "/products/stabletrust-sdk" },
  { id: "cusd-app",        title: "Flagship confidential USD",    internal: false, href: "https://cusd.fairblock.network/" },
];
