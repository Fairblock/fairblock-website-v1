// components
import Title from "../../common/Title";
import SwitchTabs from "../../common/SwitchTabs";

const FirstTab = () => {
  return (
    <div className="flex flex-col gap-8">
      <p className="mx-auto text-xl text-center">
        Powering secure, fast, and confidential applications
        <br className="hidden sm:block" /> (cApps) with dynamic, multimodal cryptography
      </p>
      <div className="w-full">
        <img
          className="mx-auto w-full lg:max-w-[60%]"
          src="/how-it-works/multimodal-confidentiality.png"
          alt="multimodal-confidentiality"
        />
      </div>
    </div>
  );
};

const SecondTab = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <img
          className="mx-auto w-full lg:max-w-[70%]"
          src="/how-it-works/dynamic-confidentiality.png"
          alt="dynamic-confidentiality"
        />
      </div>
      <div className="flex flex-col gap-6 leading-relaxed mx-auto text-lg lg:text-xl text-left max-w-4xl">
        <p>
          Simplicity is the ultimate form of art. We prioritize simplicity and
          usability through a multimodal, dynamic design fine-tuning performance
          and security, and introducing complexity only when essential.
        </p>
        <p>
          Fairblock leverages DKG and threshold IBE (sometimes referred to as
          conditional decryption) for applications that require pre-execution
          confidentiality such as sealed-bid auctions, protected trading, and AI
          private data marketplaces achieving minimal bandwidth and computation
          overhead. For applications requiring computation over encrypted
          transactions or private data such as confidential stablecoins, private
          AI inference, and dark pools we employ advanced MPC and HE schemes,
          including Twisted ElGamal, threshold FHE (CKKS), and SPDZ.
        </p>
        <p>
          Integrating TEEs with MPC schemes reduces reliance on a single TEE’s
          hardware security guarantees while lowering the probability of
          collusion required to compromise an MPC protocol’s honest-majority
          assumption. Additionally, ZKPs are used in select MPC applications to
          ensure the validity of private inputs when multiple parties interact
          within a shared private state.
        </p>
      </div>
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
