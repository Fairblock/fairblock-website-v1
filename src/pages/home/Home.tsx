import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section5 from "./Section5";
import SectionCTA from "./SectionCTA";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 sm:gap-20 mx-auto overflow-hidden relative max-w-[1920px]">
      <img
        className="absolute w-[1000px] top-[42%] -left-[25%] -z-50"
        src="/home/flow-chart-left-gradient.svg"
        alt=""
      />
      <img
        className="absolute w-[1000px] top-[42%] -right-[25%] -z-50"
        src="/home/flow-chart-right-gradient.svg"
        alt=""
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <SectionCTA />
      <Section5 />
    </div>
  );
};

export default Home;
