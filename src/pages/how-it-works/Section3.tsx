// components
import Title from "../../common/Title";
// types
import type { HowItWorksCardProps } from "./types";

const HowItWorksCard = ({ imageUrl, title, content }: HowItWorksCardProps) => {
  return (
    <div className="bg-primary-blue cursor-pointer flex flex-col gap-8 p-4 lg:py-8 rounded-2xl hover:scale-[1.04] duration-300 transition-all will-change-transform text-black w-full max-w-72 lg:max-w-[310px]">
      <div className="">
        <img className="aspect-square mx-auto w-48 lg:w-52" src={imageUrl} alt={title} />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-3xl">{title}</h3>
        <p className="text-lg/5 lg:text-xl/5">{content}</p>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 sm:px-8">
      <div className="">
        <Title title={"Confidential Stabelcoins"} />
      </div>
      <div>
        <img
          className="mx-auto lg:w-[90%]"
          src="/how-it-works/confidential-stablecoins.svg"
          alt="confidential-stablecoins"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16">
        <HowItWorksCard
          imageUrl="/how-it-works/fairy-ring.svg"
          title="Fairyring"
          content="A dynamic and decentralized network that hosts app-specific secure and performant confidential computing."
        />
        <HowItWorksCard
          imageUrl="/how-it-works/fairy-kit.svg"
          title="FairyKit"
          content="A module that enables confidential computing for applications within our native ecosystem or across external chains."
        />
      </div>
    </div>
  );
};

export default Section3;
