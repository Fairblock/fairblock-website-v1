import Title from "../../common/Title";
import FadeIn from "../../common/FadeIn";
import TiltCard from "../../common/TiltCard";

// ─── Branded inline SVG graphics ─────────────────────────────────────────────

const PerformantGraphic = () => (
  <svg viewBox="0 0 120 96" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    {/* Grid */}
    <defs>
      <pattern id="g-perf" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="120" height="96" fill="url(#g-perf)" />
    {/* Throughput bars */}
    {[14, 22, 32, 42, 52, 64].map((h, i) => (
      <g key={i}>
        <rect x={10 + i * 17} y={72 - h} width="11" height={h}
          fill="#58BDF6" opacity={0.15 + i * 0.07} />
        <rect x={10 + i * 17} y={72 - h} width="11" height={h}
          fill="none" stroke="#58BDF6" strokeWidth="0.7" opacity={0.4 + i * 0.08} />
      </g>
    ))}
    {/* Baseline */}
    <line x1="8" y1="72" x2="112" y2="72" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
    {/* Speed label */}
    <text x="60" y="14" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#58BDF6" letterSpacing="0.5">
      &lt; 1s
    </text>
    <text x="60" y="86" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="6.5" fill="#8892A4" letterSpacing="1">
      HIGH TPS
    </text>
  </svg>
);

const CompliantGraphic = () => (
  <svg viewBox="0 0 120 96" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="g-comp" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="120" height="96" fill="url(#g-comp)" />
    {/* Outer border */}
    <rect x="6" y="6" width="108" height="84" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
    {/* Header bar */}
    <rect x="6" y="6" width="108" height="16" fill="rgba(0,0,0,0.03)" />
    <text x="60" y="17" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="6" fill="#8892A4" letterSpacing="1">COMPLIANCE CHECK</text>
    {/* Check rows */}
    {[["AML", 34], ["KYC", 50], ["OFAC", 66], ["SELECTIVE DISC.", 82]].map(([label, y]) => (
      <g key={label as string}>
        <line x1="6" y1={y as number - 8} x2="114" y2={y as number - 8} stroke="rgba(0,0,0,0.05)" strokeWidth="0.6" />
        <text x="14" y={y as number}
          fontFamily="JetBrains Mono,monospace" fontSize="7" fill="#141210" letterSpacing="0.5">
          {label as string}
        </text>
        {/* Pass indicator */}
        <rect x="90" y={y as number - 9} width="24" height="12"
          fill="rgba(88,189,246,0.1)" stroke="#58BDF6" strokeWidth="0.6" />
        <text x="102" y={y as number}
          textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="6.5" fill="#58BDF6">
          PASS
        </text>
      </g>
    ))}
  </svg>
);

const SecureGraphic = () => (
  <svg viewBox="0 0 120 96" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="g-sec" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="120" height="96" fill="url(#g-sec)" />
    {/* Distributed nodes — no single trusted party */}
    <rect x="10" y="14" width="12" height="12" fill="none" stroke="#141210" strokeWidth="1" />
    <rect x="98" y="14" width="12" height="12" fill="none" stroke="#141210" strokeWidth="1" />
    <rect x="10" y="70" width="12" height="12" fill="none" stroke="#141210" strokeWidth="1" />
    <rect x="98" y="70" width="12" height="12" fill="none" stroke="#141210" strokeWidth="1" />
    {/* Mesh connections between nodes, converging on nothing */}
    <path d="M 22 20 L 98 20" fill="none" stroke="#C8CEDB" strokeWidth="0.9" />
    <path d="M 22 76 L 98 76" fill="none" stroke="#C8CEDB" strokeWidth="0.9" />
    <path d="M 16 26 L 16 70" fill="none" stroke="#C8CEDB" strokeWidth="0.9" />
    <path d="M 104 26 L 104 70" fill="none" stroke="#C8CEDB" strokeWidth="0.9" />
    <path d="M 22 20 L 98 70" fill="none" stroke="#C8CEDB" strokeWidth="0.7" opacity="0.6" />
    <path d="M 98 20 L 22 70" fill="none" stroke="#C8CEDB" strokeWidth="0.7" opacity="0.6" />
    {/* Verified lock, held in the open — not by one custodian */}
    <circle cx="60" cy="46" r="18" fill="none" stroke="#58BDF6" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
    <rect x="53" y="45" width="14" height="11" fill="#58BDF6" />
    <path d="M 56 45 v -5 a4 4 0 0 1 8 0 v 5" fill="none" stroke="#58BDF6" strokeWidth="1.6" />
    {/* Labels */}
    <text x="60" y="82" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#8892A4" letterSpacing="0.8">NO SINGLE CUSTODIAN</text>
  </svg>
);

const EmbeddedGraphic = () => (
  <svg viewBox="0 0 120 96" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="g-emb" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="120" height="96" fill="url(#g-emb)" />
    {/* Host surface — wallet / app / payment card */}
    <rect x="12" y="18" width="96" height="60" rx="6"
      fill="none" stroke="#141210" strokeWidth="1" />
    {/* Embedded FairBlock chip, flush within the host */}
    <rect x="24" y="28" width="24" height="17" rx="2.5"
      fill="rgba(88,189,246,0.12)" stroke="#58BDF6" strokeWidth="1" />
    <line x1="24" y1="36.5" x2="48" y2="36.5" stroke="#58BDF6" strokeWidth="0.6" opacity="0.6" />
    <line x1="36" y1="28" x2="36" y2="45" stroke="#58BDF6" strokeWidth="0.6" opacity="0.6" />
    <rect x="32.5" y="33" width="7" height="7" fill="#58BDF6" />
    {/* Seamless-integration ring around the chip */}
    <rect x="20" y="24" width="32" height="25" rx="4"
      fill="none" stroke="#58BDF6" strokeWidth="0.7" strokeDasharray="2 2" opacity="0.4" />
    {/* Card detail lines — the surrounding app/wallet content, unchanged */}
    <line x1="24" y1="58" x2="70" y2="58" stroke="rgba(0,0,0,0.15)" strokeWidth="1.4" />
    <line x1="24" y1="66" x2="56" y2="66" stroke="rgba(0,0,0,0.1)" strokeWidth="1.4" />
    {/* Corner mark, top right — existing surface */}
    <text x="100" y="28" textAnchor="end"
      fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#8892A4" letterSpacing="0.6">APP</text>
    {/* Label */}
    <text x="60" y="90" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#8892A4" letterSpacing="0.8">NATIVE INTEGRATION</text>
  </svg>
);

// ─── Card data ────────────────────────────────────────────────────────────────

const cardData = [
  { title: "Embedded",   Graphic: EmbeddedGraphic,   content: "Integrate confidentiality into existing wallets, applications, assets, and payment flows." },
  { title: "Performant", Graphic: PerformantGraphic, content: "Support practical payment and application experiences without multi-minute client-side proving or excessive computational cost." },
  { title: "Compliant",  Graphic: CompliantGraphic,  content: "Support address screening, entry and exit controls, freezing pathways, monitoring, traceability, and selective disclosure." },
  { title: "Secure",     Graphic: SecureGraphic,     content: "Protect and verify sensitive information without relying solely on a centralized, opaque intermediary, hardware, or coprocessor." },
];

// ─── Components ───────────────────────────────────────────────────────────────

type CardProps = {
  content: string;
  title: string;
  Graphic: () => React.JSX.Element;
};

const Card = ({ title, Graphic, content }: CardProps) => (
  <TiltCard className="h-full w-full">
    <div className="border border-black/12 flex flex-col gap-4 items-center p-6 h-full hover:bg-black/[0.025] hover:border-black/20 transition-colors duration-300">
      <h3 className="font-heading text-2xl font-semibold">{title}</h3>
      <div className="w-32">
        <Graphic />
      </div>
      <p className="leading-6 text-center">{content}</p>
    </div>
  </TiltCard>
);

const Section3 = () => (
  <div className="flex flex-col gap-8 lg:gap-10 p-4 sm:px-8">
    <FadeIn>
      <Title title="Built To Be Used" />
    </FadeIn>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:mx-auto lg:w-4/5">
      {cardData.map((card, index) => (
        <FadeIn key={card.title} delay={index * 120} className="flex">
          <Card {...card} />
        </FadeIn>
      ))}
    </div>
  </div>
);

export default Section3;
