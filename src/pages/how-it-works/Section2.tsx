// components
import Title from "../../common/Title";
import SwitchTabs from "../../common/SwitchTabs";

const SANS = "'Maison Neue', Inter, sans-serif";
const SERIF = "'TestTiemposHeadline', 'Playfair Display', serif";
const BLUE = "#58bdf6";

interface FlowNode {
  label: string;
  sub?: string;
  highlight?: boolean;
}

interface FlowArrow {
  label: string;
  direction: "down" | "up";
}

const nodes: FlowNode[] = [
  { label: "Application", highlight: true },
  { label: "Gateway Contract" },
  { label: "Relayer" },
  { label: "Decentralized Cryptography Network", highlight: true },
];

const downArrows: FlowArrow[] = [
  { label: "Encrypted transaction submitted", direction: "down" },
  { label: "Message forwarded to Fairblock", direction: "down" },
  { label: "Compute request processed", direction: "down" },
];

const returnLabel = "Decryption key, or result of encrypted computations";

const FlowNodeBox = ({ node }: { node: FlowNode }) => (
  <div
    className="relative flex items-center justify-center px-6 py-4 rounded-xl border text-center w-full max-w-sm mx-auto"
    style={{
      borderColor: node.highlight ? BLUE : "rgba(255,255,255,0.15)",
      background: node.highlight ? "rgba(88,189,246,0.08)" : "rgba(255,255,255,0.03)",
      boxShadow: node.highlight ? `0 0 24px rgba(88,189,246,0.12)` : "none",
    }}
  >
    <span
      className="text-base md:text-lg font-medium leading-snug"
      style={{
        fontFamily: SERIF,
        color: node.highlight ? BLUE : "white",
      }}
    >
      {node.label}
    </span>
  </div>
);

const ArrowDown = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4 w-full max-w-sm mx-auto py-1">
    <div className="flex flex-col items-center shrink-0">
      <div className="w-px h-5 bg-white/20" />
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path d="M6 8L0.803848 0.5H11.1962L6 8Z" fill="rgba(255,255,255,0.3)" />
      </svg>
    </div>
    <span
      className="text-xs md:text-sm"
      style={{ fontFamily: SANS, color: "rgba(255,255,255,0.4)" }}
    >
      {label}
    </span>
  </div>
);

const ReturnPath = () => (
  <div className="w-full max-w-2xl mx-auto mt-2">
    <div
      className="flex items-center gap-3 rounded-xl border px-5 py-4"
      style={{
        borderColor: "rgba(88,189,246,0.25)",
        background: "rgba(88,189,246,0.05)",
      }}
    >
      <div className="shrink-0 flex flex-col items-center">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M6 0L11.1962 7.5H0.803848L6 0Z" fill={BLUE} fillOpacity="0.7" />
        </svg>
        <div className="w-px flex-1 h-8" style={{ background: `${BLUE}33` }} />
      </div>
      <div className="flex flex-col gap-0.5">
        <span
          className="text-xs uppercase tracking-widest"
          style={{ fontFamily: SANS, color: `${BLUE}99` }}
        >
          Returns to Application
        </span>
        <span
          className="text-sm md:text-base"
          style={{ fontFamily: SERIF, color: BLUE }}
        >
          {returnLabel}
        </span>
      </div>
    </div>
  </div>
);

const FirstTab = () => {
  return (
    <div className="w-full flex flex-col items-center gap-0 py-4 lg:max-w-[60%] mx-auto">
      {nodes.map((node, i) => (
        <div key={node.label} className="w-full flex flex-col items-center">
          <FlowNodeBox node={node} />
          {i < downArrows.length && <ArrowDown label={downArrows[i].label} />}
        </div>
      ))}
      <ReturnPath />
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
