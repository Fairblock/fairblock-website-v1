// components
import Title from "../../common/Title";
import SwitchTabs from "../../common/SwitchTabs";

const MultimodalDiagram = () => (
  <svg viewBox="0 0 960 530" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg"
    fontFamily="'Inter','Maison Neue',system-ui,sans-serif">

    {/* Connector lines from petals to center */}
    <g stroke="#D0D8E8" strokeWidth="1" fill="none">
      <line x1="325" y1="155" x2="393" y2="188" />
      <line x1="635" y1="155" x2="567" y2="188" />
      <line x1="338" y1="330" x2="400" y2="262" />
      <line x1="622" y1="330" x2="560" y2="262" />
      <line x1="480" y1="373" x2="480" y2="305" />
    </g>

    {/* Blue outer rings */}
    <circle cx="480" cy="220" r="107" fill="none" stroke="#58BDF6" strokeWidth="2.2" opacity="0.85" />
    <circle cx="480" cy="220" r="114" fill="none" stroke="#58BDF6" strokeWidth="1" opacity="0.25" />

    {/* Center dark circle */}
    <circle cx="480" cy="220" r="90" fill="#0D1628" />
    <text x="480" y="216" textAnchor="middle" fill="white" fontSize="11.5"
      fontWeight="600" letterSpacing="2.5" fontFamily="'JetBrains Mono',monospace">FAIRBLOCK</text>
    <text x="480" y="233" textAnchor="middle" fill="#58BDF6" fontSize="8"
      letterSpacing="1.5" opacity="0.75" fontFamily="'JetBrains Mono',monospace">NETWORK</text>

    {/* ── Petal cards ── */}
    {/* TEE */}
    <rect x="195" y="113" width="130" height="84" rx="11" fill="white" stroke="#DDE4EF" strokeWidth="1.5" />
    <text x="260" y="142" textAnchor="middle" fontSize="15" fontWeight="700" fill="#141210">TEE</text>
    <text x="260" y="160" textAnchor="middle" fontSize="10" fill="#6B7A8D">Trusted Execution</text>
    <text x="260" y="174" textAnchor="middle" fontSize="10" fill="#6B7A8D">Environment</text>

    {/* IBE */}
    <rect x="635" y="113" width="130" height="84" rx="11" fill="white" stroke="#DDE4EF" strokeWidth="1.5" />
    <text x="700" y="142" textAnchor="middle" fontSize="15" fontWeight="700" fill="#141210">IBE</text>
    <text x="700" y="160" textAnchor="middle" fontSize="10" fill="#6B7A8D">Identity-Based</text>
    <text x="700" y="174" textAnchor="middle" fontSize="10" fill="#6B7A8D">Encryption</text>

    {/* ZK */}
    <rect x="210" y="288" width="128" height="84" rx="11" fill="white" stroke="#DDE4EF" strokeWidth="1.5" />
    <text x="274" y="317" textAnchor="middle" fontSize="15" fontWeight="700" fill="#141210">ZK</text>
    <text x="274" y="335" textAnchor="middle" fontSize="10" fill="#6B7A8D">Zero-Knowledge</text>
    <text x="274" y="349" textAnchor="middle" fontSize="10" fill="#6B7A8D">Proofs</text>

    {/* HE */}
    <rect x="622" y="288" width="128" height="84" rx="11" fill="white" stroke="#DDE4EF" strokeWidth="1.5" />
    <text x="686" y="317" textAnchor="middle" fontSize="15" fontWeight="700" fill="#141210">HE</text>
    <text x="686" y="335" textAnchor="middle" fontSize="10" fill="#6B7A8D">Homomorphic</text>
    <text x="686" y="349" textAnchor="middle" fontSize="10" fill="#6B7A8D">Encryption</text>

    {/* MPC */}
    <rect x="415" y="373" width="130" height="84" rx="11" fill="white" stroke="#DDE4EF" strokeWidth="1.5" />
    <text x="480" y="402" textAnchor="middle" fontSize="15" fontWeight="700" fill="#141210">MPC</text>
    <text x="480" y="420" textAnchor="middle" fontSize="10" fill="#6B7A8D">Multi-Party</text>
    <text x="480" y="434" textAnchor="middle" fontSize="10" fill="#6B7A8D">Computation</text>

    {/* ── Bracket connectors + descriptions ── */}
    {/* TEE — left */}
    <path d="M195,155 L118,155 L118,128" fill="none" stroke="#58BDF6" strokeWidth="1" opacity="0.55" />
    <text x="112" y="118" textAnchor="end" fontSize="9.5" fill="#4A5568">Hardware-based security for isolated,</text>
    <text x="112" y="132" textAnchor="end" fontSize="9.5" fill="#4A5568">verifiable computation, adding a</text>
    <text x="112" y="146" textAnchor="end" fontSize="9.5" fill="#4A5568">strong layer of protection.</text>

    {/* IBE — right */}
    <path d="M765,155 L842,155 L842,128" fill="none" stroke="#58BDF6" strokeWidth="1" opacity="0.55" />
    <text x="848" y="118" textAnchor="start" fontSize="9.5" fill="#4A5568">Encrypts data for conditional</text>
    <text x="848" y="132" textAnchor="start" fontSize="9.5" fill="#4A5568">decryption, e.g., triggered by</text>
    <text x="848" y="146" textAnchor="start" fontSize="9.5" fill="#4A5568">specific prices, events, or timing.</text>

    {/* ZK — left */}
    <path d="M210,330 L118,330 L118,303" fill="none" stroke="#58BDF6" strokeWidth="1" opacity="0.55" />
    <text x="112" y="293" textAnchor="end" fontSize="9.5" fill="#4A5568">Ensures the integrity and validity</text>
    <text x="112" y="307" textAnchor="end" fontSize="9.5" fill="#4A5568">of each participant's private input</text>
    <text x="112" y="321" textAnchor="end" fontSize="9.5" fill="#4A5568">in MPC, without disclosing the</text>
    <text x="112" y="335" textAnchor="end" fontSize="9.5" fill="#4A5568">underlying data.</text>

    {/* HE — right */}
    <path d="M750,330 L842,330 L842,303" fill="none" stroke="#58BDF6" strokeWidth="1" opacity="0.55" />
    <text x="848" y="293" textAnchor="start" fontSize="9.5" fill="#4A5568">Performs computation directly</text>
    <text x="848" y="307" textAnchor="start" fontSize="9.5" fill="#4A5568">on encrypted data without</text>
    <text x="848" y="321" textAnchor="start" fontSize="9.5" fill="#4A5568">decryption.</text>

    {/* MPC — bottom */}
    <line x1="480" y1="457" x2="480" y2="474" stroke="#58BDF6" strokeWidth="1" opacity="0.55" />
    <text x="480" y="488" textAnchor="middle" fontSize="9.5" fill="#4A5568">Decentralized computation over private inputs,</text>
    <text x="480" y="502" textAnchor="middle" fontSize="9.5" fill="#4A5568">revealing only the intended outputs.</text>
  </svg>
);

const FirstTab = () => {
  return (
    <div className="flex flex-col gap-8">
      <p className="mx-auto lg:text-lg text-center">
        Powering secure, fast, and confidential applications with dynamic, multimodal cryptography
      </p>
      <div className="w-full">
        <div className="mx-auto w-full lg:max-w-[70%] rounded-2xl overflow-hidden">
          <img
            className="w-full"
            style={{ filter: "invert(1) hue-rotate(180deg)" }}
            src="/how-it-works/multimodal-confidentiality.png"
            alt="multimodal-confidentiality"
          />
        </div>
      </div>
    </div>
  );
};

const SANS = "’Maison Neue’, Inter, sans-serif";
const SERIF = "’Test Tiempos Headline’, ‘Playfair Display’, serif";
const BLUE = "#58bdf6";

interface ContentBlock {
  heading: string;
  paragraphs: string[];
}

const BLOCKS: ContentBlock[] = [
  {
    heading: "Simplicity by Design",
    paragraphs: [
      "Simplicity is the ultimate form of sophistication. At Fairblock, we design systems that are intuitive to use while maintaining strong performance and security. Complexity is introduced only when it is strictly necessary, ensuring that developers and users interact with a clean, predictable experience.",
    ],
  },
  {
    heading: "Right Tool for the Right Job",
    paragraphs: [
      "Fairblock takes a dynamic approach to privacy, selecting the most efficient cryptographic primitive for each use case rather than relying on a single heavy framework.",
      "For confidential transfers, we use lightweight homomorphic encryption and range proofs. This enables fast, sub-second transaction privacy without the overhead typically associated with zero-knowledge proofs, trusted execution environments, or multi-party computation.",
      "For applications that require pre-execution confidentiality — such as sealed-bid auctions, dark pools, and private data marketplaces — we leverage distributed key generation and threshold identity-based encryption. This enables conditional decryption with minimal bandwidth and computational overhead.",
      "For more advanced use cases involving computation over encrypted data, such as private AI inference, we incorporate secure multi-party computation and fully homomorphic encryption, including schemes such as threshold FHE (CKKS) and SPDZ.",
    ],
  },
  {
    heading: "Composability Across Trust Models",
    paragraphs: [
      "Trusted execution environments can be integrated with MPC systems to reduce reliance on any single hardware assumption, while also lowering the collusion threshold required to compromise an MPC protocol. This is particularly useful for workloads like large-scale AI inference, where TEEs are currently necessary for performance.",
      "Zero-knowledge proofs are used selectively within MPC and multi-party FHE systems to verify the correctness of private inputs and computations when multiple participants interact within a shared private state.",
    ],
  },
];

const SecondTab = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-2 py-4 flex flex-col gap-12">
      {BLOCKS.map((block) => (
        <div key={block.heading} className="flex flex-col gap-5">

          {/* Section heading with blue left rule */}
          <div className="flex items-start gap-4">
            <div
              className="w-0.5 shrink-0 mt-1 rounded-full"
              style={{ height: "1.4em", background: BLUE, opacity: 0.7 }}
            />
            <h3
              className="text-lg md:text-xl"
              style={{ fontFamily: SERIF, color: "#000D14" }}
            >
              {block.heading}
            </h3>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-4 pl-5 border-l border-black/10">
            {block.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm md:text-base leading-relaxed"
                style={{ fontFamily: SANS, color: "rgba(0,13,20,0.6)" }}
              >
                {p}
              </p>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col gap-8 p-4 sm:px-8 items-center">
      <div>
        <Title title="Confidential Computing" />
      </div>
      <SwitchTabs
        firstTabLabel="Multimodal Confidentiality"
        secondTabLabel="Dynamic Confidentiality"
        FirstTabComponent={FirstTab}
        SecondTabComponent={SecondTab}
      />
    </div>
  );
};
export default Section2;
