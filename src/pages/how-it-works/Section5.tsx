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