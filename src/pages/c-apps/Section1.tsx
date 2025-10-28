// components
import Title from "../../common/Title";
// icons
import { VscDebugBreakpointLog } from "react-icons/vsc";

const CAppList = () => {
  return (
    <ul className="flex flex-col gap-2 lg:text-lg">
      <li className="flex gap-2 items-start">
        <VscDebugBreakpointLog className="flex-shrink-0 h-3 w-3 relative top-2" />{" "}
        Confidential and Compliant Stablecoins for payment networks, institutions, treasuries, and
        execution-sensitive funds
      </li>
      <li className="flex gap-2 items-start">
        <VscDebugBreakpointLog className="flex-shrink-0 h-3 w-3 relative top-2" />{" "}
        Fixed-rate and fair lending market with encrypted bids and rates
      </li>
      <li className="flex gap-2 items-start">
        <VscDebugBreakpointLog className="flex-shrink-0 h-3 w-3 relative top-2" />{" "}
        Protected onchain orders against forced liquidations, frontrunning, and
        market impact of large trades
      </li>
      <li className="flex gap-2 items-start">
        <VscDebugBreakpointLog className="flex-shrink-0 h-3 w-3 relative top-2" />{" "}
        Data marketplace designed to unlock high-quality training and inference
        data for AI while preserving confidentiality and enabling secure
        monetization
      </li>
      <li className="flex gap-2 items-start">
        <VscDebugBreakpointLog className="flex-shrink-0 h-3 w-3 relative top-2" />{" "}
        Confidential AI inference on encrypted data
      </li>
    </ul>
  );
};

const Section1 = () => {
  return (
    <div className="bg-gradient-to-b from-transparent via-transparent to-primary-blue/20">
      <div className="p-4 sm:px-8 pb-12 mx-auto max-w-[1920px]">
        <div className="mb-10">
          <Title title="Our Applications" />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <p className="lg:text-lg text-justify mx-auto lg:w-3/5">
            Fairblock is product-first. Rather than being a general-purpose
            infrastructure project focused solely on cryptography research or
            marketing, we prioritize building and collaborating on real,
            seamless, and high-impact applications that deliver measurable value
            to users.
          </p>

          <div className="flex items-center justify-center">
            {/* Outer box controls scale; aspect keeps the SVG proportions */}
            <div
              className="
                relative mx-auto w-[350px] aspect-[880/250]
                before:content-[''] before:absolute before:inset-0
                before:bg-[url('/c-apps/c-app-title-border.svg')]
                before:bg-no-repeat before:bg-contain before:bg-center
                before:pointer-events-none
                "
            >
              {/* Content layer */}
              <div className="absolute inset-0 grid place-items-center px-8">
                <h4 className="font-test-tiempos-headline text-primary-blue text-3xl">cApps</h4>
              </div>
            </div>
          </div>

          {/* For mobile & tablet */}
          <div className="border border-white lg:hidden rounded-2xl px-2 sm:px-4 py-6">
            <CAppList />
          </div>

          {/* For laptop */}
          <div className="hidden lg:flex items-center justify-center mx-auto lg:w-4/5 xl:w-3/5 2xl:w-1/2 3xl:w-2/5">
            {/* Outer box controls scale; aspect keeps the SVG proportions */}
            <div
              className="
                relative mx-auto w-full aspect-[10/5]
                before:content-[''] before:absolute before:inset-0
                before:bg-[url('/c-apps/c-app-content-border-desktop.svg')]
                before:bg-no-repeat before:bg-contain before:bg-center
                before:pointer-events-none
                "
            >
              {/* Content layer */}
              <div className="absolute inset-0 grid place-items-center px-10 pt-14">
                <CAppList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
