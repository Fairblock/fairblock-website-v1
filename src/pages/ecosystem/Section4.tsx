// components
import Title from "../../common/Title";
// icons
import { PiArrowUpRightBold } from "react-icons/pi";
// types
import type { CAppHighlightCardProps } from "./types";

const CAppHighlightCard = ({ title, subTitle, content }: CAppHighlightCardProps) => {
  return (
    <div className="bg-white hover:bg-primary-blue cursor-pointer duration-300 group p-4 lg:p-6 rounded-2xl text-black max-w-96">
      <div className="flex justify-end mb-2">
        <div className="bg-primary-blue group-hover:bg-white duration-300 p-3 rounded-full w-fit">
          <PiArrowUpRightBold className="duration-300 font-bold text-white group-hover:text-primary-blue text-2xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-end">
          <h3 className="font-medium text-2xl">{title}</h3>
          <p className="text-lg">{subTitle}</p>
        </div>
        <p className="text-lg/5">{content}</p>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:px-8">
      <div className="mb-8 sm:mb-12">
        <Title title="cApps Highlight" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <CAppHighlightCard
          title="Fairates"
          content="One rate for all. Fixed lending and borrowing via sealed-bid auctions with no centralized control or opaque pricing."
        />
        <CAppHighlightCard
          title="FairEx"
          content="Protect orders and encrypt swaps on Arbitrum. Prevent frontrunning and information leakage prior to execution."
        />
        <CAppHighlightCard
          title="Fairlaunch"
          subTitle="(In Development)"
          content="Token launches with same, transparent clearing price powered by sealed-bid auctions. No bid sniping or unfair tactics."
        />
      </div>
    </div>
  );
};
export default Section4;
