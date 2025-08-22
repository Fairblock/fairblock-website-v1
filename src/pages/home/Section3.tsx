// components
import Title from "../../common/Title";
import SubTitle from "../../common/SubTitle";
import Slider from "../../common/Slider";
// types
type CardProps = {
  content: string;
  imageUrl: string;
  title: string;
}

const Card = ({ title, imageUrl, content }: CardProps) => {
  return (
    <div
      className="border border-primary-blue cursor-pointer flex flex-col gap-4 items-center p-4 rounded-2xl min-w-64"
    >
      <h3 className="font-light text-4xl">{title}</h3>
      <div className="w-48">
        <img className="w-full" src={imageUrl} alt={title} />
      </div>
      <p className="text-lg lg:text-xl text-center">{content}</p>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 p-4 sm:px-8">
      <SubTitle title="Features" />
      <div>
        <Title title="Built to Be Used" />
      </div>
      <div className="lg:mx-auto lg:w-4/5">
        <Slider
          gap="6rem"
          width={200}
          height={400}
          speed={80}
          play={false}
          items={[
            <Card
              title="Accessible"
              imageUrl="/home/accessible.svg"
              content="Confidentiality is always one click away."
            />,
            <Card
              title="Expansive"
              imageUrl="/home/expansive.svg"
              content="Unlocking impactful DeFi and Al apps."
            />,
            <Card
              title="Composable"
              imageUrl="/home/composable.svg"
              content="Pluggable confidential logic into any application."
            />,
            <Card
              title="Dynamic"
              imageUrl="/home/dynamic.svg"
              content="Fine-tuned performance and security for each application."
            />,
            <Card
              title="Compliant"
              imageUrl="/home/compliant.svg"
              content="Zero compliance risks with post-transaction accountability."
            />,
          ]}
        />
      </div>
    </div>
  );
};
export default Section3;
