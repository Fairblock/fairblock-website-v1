// components
import Title from "../../common/Title";
import SwitchTabs from "../../common/SwitchTabs";

const FirstTab = () => {
  return (
    <div className="flex flex-col gap-8">
      <p className="mx-auto lg:text-lg text-center">
        Powering secure, fast, and confidential applications with dynamic, multimodal cryptography
      </p>
      <div className="w-full">
        <img
          className="mx-auto w-full lg:max-w-[70%]"
          src="/how-it-works/multimodal-confidentiality.png"
          alt="multimodal-confidentiality"
        />
      </div>
    </div>
  );
};

const SANS = "’Maison Neue’, Inter, sans-serif";
const SERIF = "’TestTiemposHeadline’, ‘Playfair Display’, serif";
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
              style={{ fontFamily: SERIF, color: "white" }}
            >
              {block.heading}
            </h3>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-4 pl-5 border-l border-white/5">
            {block.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm md:text-base leading-relaxed"
                style={{ fontFamily: SANS, color: "rgba(255,255,255,0.55)" }}
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
