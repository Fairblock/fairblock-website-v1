// components
import Title from "../../common/Title";
import SwitchTabs from "../../common/SwitchTabs";

const SANS = "'Maison Neue', Inter, sans-serif";
const SERIF = "'TestTiemposHeadline', 'Playfair Display', serif";
const BLUE = "#58bdf6";

const FLOW_NODES = [
  {
    num: "01",
    label: "Application",
    sub: ["Encryption of private inputs", "ZKP generation (if necessary)"],
    highlight: true,
  },
  {
    num: "02",
    label: "Gateway Contract",
    sub: "Receives and stores encrypted messages or transactions",
    highlight: false,
  },
  {
    num: "03",
    label: "Relayer",
    sub: "Forwards encrypted state or inputs",
    highlight: false,
  },
  {
    num: "04",
    label: "Decentralized Cryptography Network",
    sub: "Processes compute request",
    highlight: true,
  },
];

const CONNECTOR_LABELS = [
  "Encrypted transaction",
  "Message forwarded",
  "Compute request",
];

// Thin SVG arrow for horizontal connectors
const ArrowRight = () => (
  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="8" x2="26" y2="8" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    <path d="M22 3L29 8L22 13" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Thin SVG arrow for vertical connectors (mobile)
const ArrowDown = () => (
  <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="0" x2="8" y2="26" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    <path d="M3 22L8 29L13 22" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const FirstTab = () => {
  return (
    <div className="w-full py-6 px-2">

      {/* ── Desktop: horizontal row ── */}
      <div className="hidden lg:flex items-stretch justify-center gap-0 w-full">
        {FLOW_NODES.map((node, i) => (
          <div key={node.num} className="flex items-stretch">

            {/* Node card */}
            <div
              className="flex flex-col items-center justify-between gap-3 px-5 py-5 rounded-2xl border w-44 xl:w-52 text-center"
              style={{
                borderColor: node.highlight ? `${BLUE}55` : "rgba(255,255,255,0.1)",
                background: node.highlight ? `rgba(88,189,246,0.07)` : "rgba(255,255,255,0.02)",
              }}
            >
              <span
                className="text-xs tracking-[0.2em] tabular-nums"
                style={{ fontFamily: SANS, color: `${BLUE}88` }}
              >
                {node.num}
              </span>
              <span
                className="text-sm xl:text-base leading-snug"
                style={{
                  fontFamily: SERIF,
                  color: node.highlight ? BLUE : "white",
                }}
              >
                {node.label}
              </span>
              <div
                className="text-xs leading-relaxed min-h-[2.5rem] flex flex-col items-center justify-center gap-0.5"
                style={{ fontFamily: SANS, color: "rgba(255,255,255,0.38)" }}
              >
                {node.sub
                  ? Array.isArray(node.sub)
                    ? node.sub.map((line, j) => <span key={j}>{line}</span>)
                    : <span>{node.sub}</span>
                  : null}
              </div>
            </div>

            {/* Connector (not after last node) */}
            {i < FLOW_NODES.length - 1 && (
              <div className="flex flex-col items-center justify-center mx-1 xl:mx-2">
                <ArrowRight />
                <span
                  className="text-[10px] mt-1 text-center max-w-[72px] leading-tight"
                  style={{ fontFamily: SANS, color: "rgba(255,255,255,0.28)" }}
                >
                  {CONNECTOR_LABELS[i]}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Mobile: vertical stack ── */}
      <div className="flex lg:hidden flex-col items-center w-full gap-0">
        {FLOW_NODES.map((node, i) => (
          <div key={node.num} className="flex flex-col items-center w-full max-w-xs">
            <div
              className="flex flex-col items-center gap-2 px-5 py-4 rounded-2xl border w-full text-center"
              style={{
                borderColor: node.highlight ? `${BLUE}55` : "rgba(255,255,255,0.1)",
                background: node.highlight ? `rgba(88,189,246,0.07)` : "rgba(255,255,255,0.02)",
              }}
            >
              <span
                className="text-xs tracking-[0.2em]"
                style={{ fontFamily: SANS, color: `${BLUE}88` }}
              >
                {node.num}
              </span>
              <span
                className="text-base leading-snug"
                style={{
                  fontFamily: SERIF,
                  color: node.highlight ? BLUE : "white",
                }}
              >
                {node.label}
              </span>
              {node.sub && (
                <span
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: SANS, color: "rgba(255,255,255,0.38)" }}
                >
                  {node.sub}
                </span>
              )}
            </div>
            {i < FLOW_NODES.length - 1 && (
              <div className="flex flex-col items-center py-1">
                <ArrowDown />
                <span
                  className="text-[10px] mt-0.5"
                  style={{ fontFamily: SANS, color: "rgba(255,255,255,0.28)" }}
                >
                  {CONNECTOR_LABELS[i]}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Return path ── */}
      <div
        className="mt-8 mx-auto max-w-xl flex items-center gap-4 rounded-2xl border px-6 py-4"
        style={{
          borderColor: `${BLUE}33`,
          background: `rgba(88,189,246,0.04)`,
        }}
      >
        <div className="shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L10 13M10 13L5 8M10 13L15 8" stroke={BLUE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span
            className="text-[10px] uppercase tracking-[0.18em]"
            style={{ fontFamily: SANS, color: `${BLUE}66` }}
          >
            Returns to Application
          </span>
          <span
            className="text-sm md:text-base leading-snug"
            style={{ fontFamily: SERIF, color: `${BLUE}cc` }}
          >
            Result of encrypted computations, or decryption key
          </span>
        </div>
      </div>

    </div>
  );
};

type StepIndicator = "outline" | "filled" | "blue";

interface Step {
  number: string;
  indicator: StepIndicator;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    indicator: "outline",
    title: "User Wallet",
    description: "Deposit assets, any supported stablecoin or tokenized asset.",
  },
  {
    number: "02",
    indicator: "filled",
    title: "Gateway Smart Contract",
    description:
      "Asset locked. Encrypted balance created; confidential account initialized.",
  },
  {
    number: "03",
    indicator: "outline",
    title: "User Initiates Transfer",
    description:
      "SDK encrypts locally. Range proof generated. No external provers.",
  },
  {
    number: "04",
    indicator: "filled",
    title: "Encrypted Submission",
    description:
      "Encrypted transaction submitted to the gateway contract.",
  },
  {
    number: "05",
    indicator: "outline",
    title: "Message Relay",
    description: "Relayers forward the message to the Fairblock network.",
  },
  {
    number: "06",
    indicator: "blue",
    title: "Verifiable Computation",
    description:
      "Proof verified. Homomorphic update. Optional anonymity. No decryption.",
  },
  {
    number: "07",
    indicator: "filled",
    title: "State Commitment",
    description:
      "Updated encrypted state returned to the gateway contract.",
  },
  {
    number: "08",
    indicator: "outline",
    title: "Receiver Balance Updated",
    description:
      "Sender and receiver balances updated in encrypted form.",
  },
];

const StepBox = ({ step, index }: { step: Step; index: number }) => {
  const col = index % 4;
  const row = Math.floor(index / 4);

  const borderClasses = [
    col < 3 ? "border-r border-r-white/10" : "",
    row === 0 ? "border-b border-b-white/10" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const indicatorColor =
    step.indicator === "blue"
      ? "bg-[#58bdf6]"
      : step.indicator === "filled"
      ? "bg-white/80"
      : "border border-white/50 bg-transparent";

  return (
    <div className={`p-6 md:p-8 flex flex-col gap-3 ${borderClasses}`}>
      <div className="flex items-center gap-2">
        <span
          className={`inline-block w-3 h-3 shrink-0 ${indicatorColor}`}
        />
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: "#58bdf6", fontFamily: "'Maison Neue', Inter, sans-serif" }}
        >
          STEP {step.number}
        </span>
      </div>
      <h3
        className="text-white text-xl md:text-2xl leading-tight"
        style={{ fontFamily: "'TestTiemposHeadline', 'Playfair Display', serif" }}
      >
        {step.title}
      </h3>
      <p
        className="text-white/55 text-sm md:text-base leading-relaxed"
        style={{ fontFamily: "'Maison Neue', Inter, sans-serif" }}
      >
        {step.description}
      </p>
    </div>
  );
};

const SecondTab = () => {
  return (
    <div className="w-full mx-auto lg:max-w-[90%]">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-white/10"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        {STEPS.map((step, i) => (
          <StepBox key={step.number} step={step} index={i} />
        ))}
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col gap-8 p-4 sm:px-8 items-center">
      <div>
        <Title title="UserFlow" />
      </div>
      <SwitchTabs
        firstTabLabel="General"
        secondTabLabel="Confidential Stablecoins"
        FirstTabComponent={FirstTab}
        SecondTabComponent={SecondTab}
      />
    </div>
  );
};
export default Section2;
