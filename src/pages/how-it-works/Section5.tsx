// components
import Title from "../../common/Title";

type Card = {
  title: string;
  content: string;
};

const Card = ({ title, content }: Card) => {
  return (
    <div className="relative flex flex-col gap-2 items-center justify-start text-center px-14 py-8 h-[230px] w-[420px]">
      <img className="h-8 w-full absolute top-0 left-1" src="/how-it-works/key-benefits-border-top.svg" alt="" />
      <img className="w-7 absolute top-7 right-7" src="/how-it-works/key-benefits-border-right.svg" alt="" />
      <img className="h-8 w-full absolute bottom-0 left-1" src="/how-it-works/key-benefits-border-bottom.svg" alt="" />
      <img className="w-7 absolute top-7 left-7" src="/how-it-works/key-benefits-border-left.svg" alt="" />
      <div className="hover:bg-primary-blue/20 cursor-pointer duration-300 flex flex-col items-center justify-center py-2 px-2 h-full transition-all">
        <h4 className="relative sm:-left-[6px] lg:left-0 font-medium text-2xl text-primary-blue">{title}</h4>
      <p className="relative sm:-left-[6px] lg:left-0 text-lg lg:text-xl">{content}</p>
      </div>
    </div>
  );
};

// const Card2 = ({ title, content }: Card) => {
//   return (
//     <div className="bg-[url('/how-it-works/key-benefits-border-mobile.svg')] sm:bg-[url('/how-it-works/key-benefits-border.svg')] bg-contain bg-no-repeat flex flex-col gap-2 items-center justify-start p-10 lg:py-11 lg:px-14 h-[240px] lg:h-[300px] w-[360px] text-center">
//       <h4 className="relative sm:-left-[6px] lg:left-0 font-medium text-2xl text-primary-blue">{title}</h4>
//       <p className="relative sm:-left-[6px] lg:left-0 text-lg lg:text-xl">{content}</p>
//     </div>
//   );
// };

const Section5 = () => {
  return (
    <div className="flex flex-col gap-10 p-4 sm:px-8">
      <div className="md:mb-8">
        <Title title="Key Benefits" />
      </div>
      <div className="flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col sm:flex-row items-center justify-between lg:justify-center gap-8 lg:gap-12 xl:gap-24">
          <Card
            title="Composable"
            content="Developers can build confidentiality features directly into the chains and applications they already know and love."
          />
          <div className="relative -top-6 hidden lg:block max-w-36">
            <img src="/how-it-works/key-benefits.svg" alt="fairy-key" />
          </div>
          <Card
            title="Chain Agnostic"
            content="FairyKit is compatible with major L1s, L2s such as ..."
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between lg:justify-center gap-10 lg:gap-20">
          <Card
            title="Performant and Scalable"
            content="Linear bandwidth scaling and encryption run times in milliseconds, ensuring frictionless user experience."
          />
          <Card
            title="Dynamic"
            content="There is no one-size-fits-all encryption solution. Fairblock's MPC schemes can be combined and configured for any use case or level of confidentiality."
          />
        </div>
      </div>
    </div>
  );
};
export default Section5;
