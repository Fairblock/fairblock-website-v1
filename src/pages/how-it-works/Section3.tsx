// components
import Title from "../../common/Title";
import SwitchTabs from "../../common/SwitchTabs";
// types
import type { HowItWorksCardProps } from "./types";

const HowItWorksCard = ({ imageUrl, title, content }: HowItWorksCardProps) => {
  return (
    <div className="bg-primary-blue cursor-pointer flex flex-col gap-8 p-4 lg:py-8 rounded-2xl hover:scale-[1.04] duration-300 transition-all will-change-transform text-black w-full max-w-72 lg:max-w-[340px]">
      <div className="">
        <img
          className="aspect-square mx-auto w-48 lg:w-60"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <h3 className="font-test-tiempos-headline text-3xl">{title}</h3>
        <p className="leading-5 lg:text-lg whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
};

const FirstTab = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 items-center justify-center mt-8">
      <HowItWorksCard
        imageUrl="/how-it-works/fairy-ring.png"
        title="FairyRing"
        content={`A dynamic and decentralized network that hosts app-specific secure and performant confidential computing.`}
      />
      <HowItWorksCard
        imageUrl="/how-it-works/fairy-kit.svg"
        title="FairyKit"
        content="A module that enables confidential computing for cApps within our native ecosystem or across external chains."
      />
    </div>
  );
};

const SecondTab = () => {
  return (
    <div className="w-full">
      <img className="mx-auto w-full lg:max-w-[60%]" src="/how-it-works/frictionless-ux.svg" alt="frictionless-ux" />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col gap-8 p-4 sm:px-8 items-center">
      <div>
        <Title title="Architecture" />
      </div>
      <SwitchTabs
        firstTabLabel="Core Components"
        secondTabLabel="Frictionless UX"
        FirstTabComponent={FirstTab}
        SecondTabComponent={SecondTab}
      />
    </div>
  );
};
export default Section2;
