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

const CrossChainGraphic = () => (
  <svg viewBox="0 0 120 96" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="g-cross" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="120" height="96" fill="url(#g-cross)" />
    {/* Left chain nodes */}
    {[18, 40, 62].map((y, i) => (
      <rect key={i} x="6" y={y} width="10" height="10" fill="#141210" />
    ))}
    {/* Right chain nodes */}
    {[18, 40, 62].map((y, i) => (
      <rect key={i} x="104" y={y} width="10" height="10" fill="#141210" />
    ))}
    {/* Center Fairblock hub */}
    <circle cx="60" cy="43" r="9" fill="#58BDF6" />
    <rect x="51" y="34" width="18" height="18" fill="none" stroke="#58BDF6" strokeWidth="0.7" opacity="0.35" />
    {/* Paths left to center */}
    <path d="M 16 23 C 35 23 45 43 51 43" fill="none" stroke="#C8CEDB" strokeWidth="0.9" />
    <path d="M 16 45 H 51" fill="none" stroke="#C8CEDB" strokeWidth="0.9" />
    <path d="M 16 67 C 35 67 45 43 51 43" fill="none" stroke="#C8CEDB" strokeWidth="0.9" />
    {/* Paths center to right */}
    <path d="M 69 43 C 75 43 85 23 104 23" fill="none" stroke="#C8CEDB" strokeWidth="0.9" />
    <path d="M 69 45 H 104" fill="none" stroke="#C8CEDB" strokeWidth="0.9" />
    <path d="M 69 43 C 75 43 85 67 104 67" fill="none" stroke="#C8CEDB" strokeWidth="0.9" />
    {/* Animated beam */}
    <path className="hero-beam-p3" d="M 16 45 H 104" fill="none" stroke="#58BDF6" strokeWidth="1.5" />
    {/* Labels */}
    <text x="60" y="63" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#141210" letterSpacing="0.8">FAIRBLOCK</text>
    {["ETH","SOL","BTC"].map((l, i) => (
      <text key={l} x="4" y={26 + i * 22}
        fontFamily="JetBrains Mono,monospace" fontSize="5" fill="#8892A4">{l}</text>
    ))}
  </svg>
);

const PrivateAIGraphic = () => (
  <svg viewBox="0 0 120 96" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="g-ai" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="120" height="96" fill="url(#g-ai)" />
    {/* Input nodes */}
    {[20, 38, 56].map((y, i) => (
      <rect key={i} x="8" y={y} width="13" height="13"
        fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
    ))}
    {/* Hidden layer — encrypted */}
    {[28, 50].map((y, i) => (
      <rect key={i} x="44" y={y} width="14" height="14"
        fill="rgba(88,189,246,0.1)" stroke="#58BDF6" strokeWidth="0.9" />
    ))}
    {/* Output node */}
    <rect x="86" y="35" width="16" height="16"
      fill="#58BDF6" />
    {/* Connections input → hidden */}
    {[26, 44, 62].flatMap((iy, ii) =>
      [35, 57].map((hy, hi) => (
        <line key={`${ii}-${hi}`} x1="21" y1={iy} x2="44" y2={hy}
          stroke="#C8CEDB" strokeWidth="0.7" />
      ))
    )}
    {/* Connections hidden → output */}
    {[35, 57].map((hy, hi) => (
      <line key={hi} x1="58" y1={hy} x2="86" y2="43"
        stroke="#C8CEDB" strokeWidth="0.7" />
    ))}
    {/* Animated beam */}
    <path className="hero-beam-p4" d="M 8 44 Q 55 44 86 43" fill="none" stroke="#58BDF6" strokeWidth="1.2" />
    {/* Labels */}
    <text x="14" y="78" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#8892A4">DATA</text>
    <text x="51" y="78" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#58BDF6">ENC</text>
    <text x="94" y="78" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#58BDF6">✓</text>
    <text x="60" y="91" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#8892A4" letterSpacing="0.8">PRIVATE INFERENCE</text>
  </svg>
);

const ComposableGraphic = () => (
  <svg viewBox="0 0 120 96" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="g-cmp" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="120" height="96" fill="url(#g-cmp)" />
    {/* Left module blocks */}
    {[["SDK", 12], ["API", 36], ["WALLET", 60]].map(([label, y]) => (
      <g key={label as string}>
        <rect x="6" y={y as number} width="38" height="18"
          fill="rgba(0,0,0,0.025)" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8" />
        <text x="25" y={(y as number) + 12} textAnchor="middle"
          fontFamily="JetBrains Mono,monospace" fontSize="7" fill="#141210" letterSpacing="0.5">
          {label as string}
        </text>
      </g>
    ))}
    {/* Arrow */}
    <line x1="48" y1="48" x2="62" y2="48" stroke="#8892A4" strokeWidth="1" />
    <path d="M 59 45 L 63 48 L 59 51" fill="none" stroke="#8892A4" strokeWidth="1" strokeLinecap="square" />
    {/* Fairblock block */}
    <rect x="65" y="30" width="48" height="36"
      fill="rgba(88,189,246,0.07)" stroke="#58BDF6" strokeWidth="1" />
    <text x="89" y="50" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="7" fill="#58BDF6" letterSpacing="0.8">FAIR</text>
    <text x="89" y="60" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="7" fill="#58BDF6" letterSpacing="0.8">BLOCK</text>
    {/* Plug indicator */}
    <text x="60" y="90" textAnchor="middle"
      fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#8892A4" letterSpacing="0.8">PLUG-IN READY</text>
  </svg>
);

// ─── Card data ────────────────────────────────────────────────────────────────

const cardData = [
  { title: "Performant",  Graphic: PerformantGraphic,  content: "High throughput for large payments and institutional volumes." },
  { title: "Compliant",   Graphic: CompliantGraphic,   content: "Zero compliance risks." },
  { title: "Cross-Chain", Graphic: CrossChainGraphic,  content: "Privacy without the bridge or wallet hassle." },
  { title: "Private AI",  Graphic: PrivateAIGraphic,   content: "Enterprise AI that never sees your confidential data." },
  { title: "Composable",  Graphic: ComposableGraphic,  content: "Plug into any frontend, neobank, wallet, or agentic platform instantly." },
];

// ─── Components ───────────────────────────────────────────────────────────────

type CardProps = {
  content: string;
  title: string;
  Graphic: () => JSX.Element;
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:mx-auto lg:w-4/5">
      {cardData.map((card, index) => (
        <FadeIn key={card.title} delay={index * 120} className="flex">
          <Card {...card} />
        </FadeIn>
      ))}
    </div>
  </div>
);

export default Section3;
