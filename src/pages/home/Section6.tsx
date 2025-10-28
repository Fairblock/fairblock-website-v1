// components
import Title from "../../common/Title";
import Slider from "../../common/Slider";

const Section6 = () => {
  return (
    <div className="flex flex-col gap-10 p-4 sm:px-8">
      <div className="mb-4">
        <Title title="Ecosystem" />
      </div>
      <div className="lg:mx-auto lg:w-4/5">
        <Slider
          gap="2rem"
          width={80}
          height={80}
          speed={60}
          play={false}
          direction="left"
          items={[
            <a href="https://www.altlayer.io/">
              <img className="w-16" src="/home/ecosystem/alt-layer.svg" />
            </a>,
            <a href="https://anoma.net/">
              <img className="w-16" src="/home/ecosystem/anoma.svg" />
            </a>,
            <a href="http://arbitrum.io/">
              <img className="w-16" src="/home/ecosystem/arbitrum.svg" />
            </a>,
            <a href="https://www.base.org/">
              <img className="w-16" src="/home/ecosystem/base.svg" />
            </a>,
            <a href="https://celestia.org/">
              <img className="w-16" src="/home/ecosystem/celestia.svg" />
            </a>,
            <a href="https://cosmos.network/">
              <img className="w-16" src="/home/ecosystem/cosmos-hub.svg" />
            </a>,
            <a href="https://swap.cow.fi/">
              <img className="w-16" src="/home/ecosystem/cow-swap.svg" />
            </a>,
            <a href="https://ethereum.org/en/">
              <img className="w-12" src="/home/ecosystem/ethereum.svg" />
            </a>,
            <a href="https://www.fluent.xyz/">
              <img className="w-16" src="/home/ecosystem/fluent.svg" />
            </a>,
            <a href="https://hyperfoundation.org/">
              <img className="w-16" src="/home/ecosystem/hyper-liquid.svg" />
            </a>,
            <a href="https://mitosis.org/">
              <img className="w-16" src="/home/ecosystem/mitosis.svg" />
            </a>,
            <a href="https://www.monad.xyz/">
              <img className="w-16" src="/home/ecosystem/monad.svg" />
            </a>,
          ]}
        />
      </div>
      <div className="lg:mx-auto lg:w-4/5">
        <Slider
          gap="2rem"
          width={80}
          height={80}
          speed={60}
          play={false}
          direction="right"
          items={[
            <a href="https://www.noble.xyz/">
              <img className="w-16" src="/home/ecosystem/noble.svg" />
            </a>,
            <a href="https://www.optimism.io/">
              <img className="w-16" src="/home/ecosystem/opstack.svg" />
            </a>,
            <a href="https://phala.network/">
              <img className="w-16" src="/home/ecosystem/phala.svg" />
            </a>,
            <a href="https://polygon.technology/">
              <img className="w-16" src="/home/ecosystem/polygon.svg" />
            </a>,
            <a href="https://polymerlabs.org/">
              <img className="w-16" src="/home/ecosystem/polymer.svg" />
            </a>,
            <a href="https://ritual.net/">
              <img className="w-16" src="/home/ecosystem/ritual.svg" />
            </a>,
            <a href="https://solana.com/">
              <img className="w-16" src="/home/ecosystem/solana.svg" />
            </a>,
            <a href="https://www.squidrouter.com/">
              <img className="w-16" src="/home/ecosystem/squid.svg" />
            </a>,
            <a href="https://symbiotic.fi/">
              <img className="w-16" src="/home/ecosystem/symbiotic.svg" />
            </a>,
            <a href="https://mountainprotocol.com/">
              <img className="w-16" src="/home/ecosystem/usdm.svg" />
            </a>,
            <a href="https://xai.games/">
              <img className="w-16" src="/home/ecosystem/xai.svg" />
            </a>,
          ]}
        />
      </div>
    </div>
  );
};
export default Section6;
