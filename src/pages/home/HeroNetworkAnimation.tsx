const STATIC_PATHS = [
  "M70 125 Q 450 125 450 320 Q 450 514 830 514",
  "M70 520 Q 250 520 450 364 Q 650 202 830 202",
  "M70 325 H 830",
  "M450 30 V 630",
  "M170 30 Q 170 325 450 325 Q 730 325 730 630",
];

const BEAM_CLASSES = [
  "hero-beam-p1",
  "hero-beam-p2",
  "hero-beam-p3",
  "hero-beam-p4",
  "hero-beam-p5",
];

const HeroNetworkAnimation = () => (
  <svg
    viewBox="0 0 900 650"
    className="w-full h-auto block"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Static connection paths */}
    <g fill="none" stroke="#C8CEDB" strokeWidth="1.2">
      {STATIC_PATHS.map((d, i) => <path key={i} d={d} />)}
    </g>

    {/* Animated beams */}
    <g fill="none" stroke="#58BDF6" strokeWidth="2" strokeLinecap="round">
      {STATIC_PATHS.map((d, i) => (
        <path key={i} className={BEAM_CLASSES[i]} d={d} />
      ))}
    </g>

    {/* Peripheral nodes */}
    <circle cx="70"  cy="125" r="4.5" fill="#141210" />
    <circle cx="70"  cy="325" r="4.5" fill="#141210" />
    <circle cx="70"  cy="520" r="4.5" fill="#141210" />
    <circle cx="170" cy="30"  r="4.5" fill="#141210" />
    <circle cx="450" cy="30"  r="4.5" fill="#141210" />
    <circle cx="450" cy="630" r="4.5" fill="#141210" />
    <circle cx="830" cy="202" r="4.5" fill="#141210" />
    <circle cx="830" cy="514" r="4.5" fill="#141210" />
    <circle cx="730" cy="630" r="4.5" fill="#141210" />

    {/* Center node — CUSD star mark */}
    <g transform="translate(450 325)">
      <g className="cusd-heartbeat">
        <circle r="22" fill="white" fillOpacity="0.88" />
        <g stroke="#29BDF7" strokeWidth="4.5" strokeLinecap="round">
          <path d="M0 -7 V-18" />
          <path d="M0 7 V18" />
          <path d="M7 0 H18" />
          <path d="M-7 0 H-18" />
          <path d="M5 -5 L13 -13" />
          <path d="M-5 5 L-13 13" />
          <path d="M5 5 L13 13" />
          <path d="M-5 -5 L-13 -13" />
        </g>
        <circle r="5.5" fill="#BEEFFF" />
        <circle r="2.5" fill="white" />
      </g>
    </g>

    {/* Node labels */}
    <g fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#8892A4" letterSpacing="1">
      <text x="70"  y="112" textAnchor="start">ROBOTS</text>
      <text x="70"  y="312" textAnchor="start">TREASURY</text>
      <text x="70"  y="507" textAnchor="start">OTC DESK</text>
      <text x="434" y="20"  textAnchor="end">MERCHANT</text>
      <text x="814" y="190" textAnchor="end">AI AGENTS</text>
      <text x="814" y="502" textAnchor="end">NEOBANK</text>
      <text x="714" y="618" textAnchor="end">SETTLEMENTS</text>
    </g>

    {/* Dollar amounts — plaintext on left paths */}
    <g fontFamily="'JetBrains Mono', monospace" fontSize="10.5" fill="#141210">
      <text x="235" y="113">$1,284.50</text>
      <text x="272" y="313">$45,000</text>
      <text x="235" y="509">$128,750</text>
    </g>

    {/* Dollar amounts — masked on right paths */}
    <g fontFamily="'JetBrains Mono', monospace" fontSize="10.5" fill="#8892A4">
      <text x="562" y="190">$••,•••</text>
      <text x="548" y="502">$•••,•••</text>
    </g>

    {/* Fairblock label */}
    <text
      x="450" y="360"
      textAnchor="middle"
      fontFamily="'JetBrains Mono', monospace"
      fontSize="12"
      fill="#141210"
      letterSpacing="1.4"
    >
      Fairblock
    </text>
  </svg>
);

export default HeroNetworkAnimation;
