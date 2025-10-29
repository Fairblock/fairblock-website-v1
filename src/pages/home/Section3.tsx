// components
import Title from "../../common/Title";
import SubTitle from "../../common/SubTitle";
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
      <h3 className="font-light font-test-tiempos-headline text-4xl">
        {title}
      </h3>
      <div className="w-48">
        <img className="w-full" src={imageUrl} alt={title} />
      </div>
      <p className="leading-5 text-center whitespace-pre-line">{content}</p>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 p-4 sm:px-8">
      <SubTitle title="Features" />
      <Title title="Built to Be Used" />
      <div className="lg:mx-auto lg:w-4/5">
        <Slider
          gap="7rem"
          width={200}
          height={340}
          speed={80}
          play={false}
          items={[
            <Card
              title="Accessible"
              imageUrl="/home/accessible.svg"
              content={`Confidentiality is always\none click away.`}
            />,
            <Card
              title="Expansive"
              imageUrl="/home/dynamic.svg"
              content={`Unlocking impactful DeFi\n and Al apps.`}
            />,
            <Card
              title="Composable"
              imageUrl="/home/composable.svg"
              content={`Pluggable confidential logic\ninto any application.`}
            />,
            <Card
              title="Dynamic"
              imageUrl="/home/compliant.svg"
              content="Fine-tuned performance and security for each application."
            />,
            <Card
              title="Compliant"
              imageUrl="/home/expansive.svg"
              content="Zero compliance risks with post-transaction accountability."
            />,
          ]}
        />
      </div>
    </div>
  );
};
export default Section3;
