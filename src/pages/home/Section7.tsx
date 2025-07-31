// components
import Title from "../../common/Title";
// icons
import { PiArrowUpRightBold } from "react-icons/pi";
// types
import type { CardProps } from "./types";

const StartBuildingCard = ({ imageUrl, title, content }: CardProps) => {
  return (
    <div className="border border-primary-blue bg-[linear-gradient(to_bottom,transparent_0%,transparent_25%,#58bdf644_50%,#58bdf688_75%,#58bdf6bb_100%)] hover:bg-none hover:cursor-pointer flex flex-col gap-4 items-center p-4 pt-8 relative rounded-3xl w-full md:w-80 max-w-80">
      <PiArrowUpRightBold className="absolute top-2 right-2 bg-primary-blue p-1 rounded-full text-primary-darkBlue text-2xl" />
      <div className="w-56">
        <img className="w-full" src={imageUrl} alt={title} />
      </div>
      <div className="text-center">
        <h3 className="font-light text-3xl mb-1">{title}</h3>
        <p className="font-eb-garamond mx-auto text-lg/5 lg:text-xl/5 w-4/5">
          {content}
        </p>
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className="bg-gradient-to-b from-transparent via-transparent to-primary-blue/20">
      <div className="p-4 sm:px-8 pb-20">
      <div className="mb-8">
        <Title title="Start Building" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <StartBuildingCard
          imageUrl="/home/developer-docs.svg"
          title="Wander the woods"
          content="Get started with our docs."
        />
        <StartBuildingCard
          imageUrl="/home/build-c-app.svg"
          title="Build cAPP"
          content="Build your Confidential App in 5 minutes"
        />
        <StartBuildingCard
          imageUrl="/home/join-discord.svg"
          title="Join our Fairy Ring"
          content="Become a mushroom in a fairy ring"
        />
      </div>
    </div>
    </div>
  );
};
export default Section7;
