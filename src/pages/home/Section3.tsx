import Title from "../../common/Title";
import FadeIn from "../../common/FadeIn";
import TiltCard from "../../common/TiltCard";

type CardProps = {
  content: string;
  imageUrl: string;
  title: string;
};

const Card = ({ title, imageUrl, content }: CardProps) => {
  return (
    <TiltCard className="h-full w-full">
      <div className="border border-primary-blue flex flex-col gap-4 items-center p-6 rounded-2xl h-full hover:bg-primary-blue/10 hover:shadow-[0_0_24px_rgba(88,189,246,0.15)] transition-colors duration-300">
        <h3 className="font-heading text-2xl font-semibold">
          {title}
        </h3>
        <div className="w-32">
          <img className="w-full" src={imageUrl} alt={title} />
        </div>
        <p className="leading-6 text-center">{content}</p>
      </div>
    </TiltCard>
  );
};

const cardData = [
  { title: "Performant", imageUrl: "/home/accessible.svg", content: "High throughput for large payments and institutional volumes." },
  { title: "Compliant", imageUrl: "/home/dynamic.svg", content: "Zero compliance risks." },
  { title: "Cross-Chain", imageUrl: "/home/composable.svg", content: "Privacy without the bridge or wallet hassle." },
  { title: "Private AI", imageUrl: "/home/expansive.svg", content: "Enterprise AI that never sees your confidential data." },
  { title: "Composable", imageUrl: "/home/compliant.svg", content: "Plug into any frontend, neobank, wallet, or agentic platform instantly." },
];

const Section3 = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 p-4 sm:px-8">
      <FadeIn>
        <Title title="Built To Be Used" />
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:mx-auto lg:w-4/5">
        {cardData.map((card, index) => (
          <FadeIn key={card.title} delay={index * 120} className="flex">
            <Card {...card} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
export default Section3;
