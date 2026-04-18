// components
import Title from "../../common/Title";
import Slider from "../../common/Slider";
// types
type CardProps = {
  content: string;
  imageUrl: string;
  title: string;
};

const Card = ({ title, imageUrl, content }: CardProps) => {
  return (
    <div className="border border-primary-blue cursor-pointer flex flex-col gap-4 items-center p-4 rounded-2xl min-w-[265px]">
      <h3 className="font-light font-test-tiempos-headline text-2xl">
        {title}
      </h3>
      <div className="w-48">
        <img className="w-full" src={imageUrl} alt={title} />
      </div>
      <p className="font-test-tiempos-headline leading-5 text-center whitespace-pre-line">{content}</p>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 p-4 sm:px-8">
      <Title title="Built To Be Used" />
      <div className="lg:mx-auto lg:w-4/5">
        <Slider
          gap="7rem"
          width={200}
          height={340}
          speed={80}
          play={false}
          items={[
            <Card
              title="Performant"
              imageUrl="/home/accessible.svg"
              content={`High throughput for large\npayments and institutional volumes.`}
            />,
            <Card
              title="Compliant"
              imageUrl="/home/dynamic.svg"
              content={`Privacy as a compliance\nrequirement, not a trade-off.`}
            />,
            <Card
              title="Cross-Chain"
              imageUrl="/home/composable.svg"
              content={`Confidential assets deployable\nacross any chain.`}
            />,
            <Card
              title="Private AI"
              imageUrl="/home/expansive.svg"
              content="Enterprise AI that never sees your confidential data."
            />,
            <Card
              title="30-Min Integration"
              imageUrl="/home/compliant.svg"
              content="Plug into any frontend, neobank, wallet, or agentic platform instantly."
            />,
          ]}
        />
      </div>
    </div>
  );
};
export default Section3;
