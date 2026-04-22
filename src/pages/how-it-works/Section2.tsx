// components
import Title from "../../common/Title";
import SwitchTabs from "../../common/SwitchTabs";

const FirstTab = () => {
  return (
    <div className="w-full">
      <img
        className="mx-auto w-full lg:max-w-[75%]"
        src="/how-it-works/general-user-flow.svg"
        alt="general-user-flow"
      />
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
