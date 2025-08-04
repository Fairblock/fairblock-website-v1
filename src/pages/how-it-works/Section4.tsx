// components
import Title from "../../common/Title";

const Section4 = () => {
  return (
    <div className="bg-gradient-to-b from-transparent via-transparent to-primary-blue/20">
      <div className="flex flex-col gap-12 p-4 sm:px-8 mx-auto max-w-[1280px]">
        <div>
          <Title title="Confidential Computing" />
        </div>
        <div className="w-full">
          <img
            className="mx-auto w-full"
            src="/how-it-works/confidential-computing.svg"
            alt="confidential computing"
          />
        </div>
        <div className="font-eb-garamond flex flex-col gap-4 pb-12 text-lg lg:text-xl text-center">
          <p>
            Simplicity is the ultimate form of art. We prioritize simplicity and
            usability through a multimodal, dynamic design—fine-tuning
            performance and security, and introducing complexity only when
            essential. Fairblock leverages DKG and threshold IBE (sometimes
            referred to as conditional decryption) for applications that require
            pre-execution confidentiality—such as sealed-bid auctions, protected
            trading intents, and AI data marketplaces—achieving minimal
            bandwidth and computation overhead. For applications requiring
            computation over encrypted transactions or private data—such as
            confidential stablecoins, private AI inference, and dark pools—we
            employ advanced MPC and HE schemes, including Twisted ElGamal,
            threshold FHE (CKKS), and SPDZ. MPC schemes can also be combined
            with TEEs to mitigate reliance on any single TEE’s hardware security
            and reduce an MPC’s honest-majority collusion risks. Additionally,
            ZKPs are used in select MPC applications to ensure the validity of
            private inputs when multiple parties interact within a shared
            private state.
          </p>
          <p>
            As confidentiality technology advances, Fairblock will continuously
            deliver cutting-edge schemes through FairyKit, empowering partner
            protocols and native applications. We begin with threshold IBE and
            HE (Twisted ElGamal and CKKS), unlocking new performance frontiers
            and driving the next wave of confidential and trustworthy open
            finance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
