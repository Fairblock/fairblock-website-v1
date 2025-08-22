// components
import Title from "../../common/Title";
// icons
import { PiArrowUpRightBold } from "react-icons/pi";
// types
type CardProps = {
  content: string;
  imageUrl: string;
  link: string;
  title: string;
}

const StartBuildingCard = ({ imageUrl, title, content, link }: CardProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-b from-primary-blue via-primary-blue/50 to-primary-blue/20 rounded-3xl w-full md:w-80 max-w-80">
      <div className="bg-primary-darkBlue hover:cursor-pointer duration-300 flex flex-col gap-4 items-center p-4 pt-8 m-[1px] relative rounded-3xl hover:shadow shadow-primary-blue">
      <PiArrowUpRightBold className="absolute top-3 right-3 bg-primary-blue p-1 rounded-full text-primary-darkBlue text-2xl" />
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
    </a>
  );
};

const Section7 = () => {
  return (
    <div className="bg-gradient-to-b from-transparent via-transparent to-primary-blue/20">
      <div className="p-4 sm:px-8 pb-20">
      <div className="mb-8">
        <Title title="Start Building" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <StartBuildingCard
          content="Get started with our docs."
          imageUrl="/home/developer-docs.svg"
          link="https://docs.fairblock.network/docs/welcome/Vision"
          title="Wander the woods"
        />
        <StartBuildingCard
          content="Build your Confidential App in 5 minutes"
          imageUrl="/home/build-c-app.svg"
          link="https://docs.fairblock.network/docs/start-a-capp-in-5-minutes/"
          title="Build cAPP"
        />
        <StartBuildingCard
          content="Become a mushroom in a fairy ring"
          imageUrl="/home/join-discord.svg"
          link="https://discord.com/invite/fairblock"
          title="Join our Fairy Ring"
        />
      </div>
    </div>
    </div>
  );
};
export default Section7;
