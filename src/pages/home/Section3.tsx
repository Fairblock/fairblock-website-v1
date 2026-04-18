import Title from "../../common/Title";

type CardProps = {
  content: string;
  imageUrl: string;
  title: string;
};

const Card = ({ title, imageUrl, content }: CardProps) => {
  return (
    <div className="border border-primary-blue flex flex-col gap-4 items-center p-6 rounded-2xl">
      <h3 className="font-test-tiempos-headline text-2xl font-light">
        {title}
      </h3>
      <div className="w-32">
        <img className="w-full" src={imageUrl} alt={title} />
      </div>
      <p className="leading-6 text-center">{content}</p>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 p-4 sm:px-8">
      <Title title="Built To Be Used" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:mx-auto lg:w-4/5">
        <Card
          title="Performant"
          imageUrl="/home/accessible.svg"
          content="High throughput for large payments and institutional volumes."
        />
        <Card
          title="Compliant"
          imageUrl="/home/dynamic.svg"
          content="Zero-compliance risks"
        />
        <Card
          title="Cross-Chain"
          imageUrl="/home/composable.svg"
          content="Privacy without the bridge or wallet hassle"
        />
        <Card
          title="Private AI"
          imageUrl="/home/expansive.svg"
          content="Enterprise AI that never sees your confidential data."
        />
        <Card
          title="Composable"
          imageUrl="/home/compliant.svg"
          content="Plug into any frontend, neobank, wallet, or agentic platform instantly."
        />
      </div>
    </div>
  );
};
export default Section3;
