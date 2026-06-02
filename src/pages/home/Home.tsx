import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section5 from "./Section5";
import SectionCTA from "./SectionCTA";
import SectionContact from "./SectionContact";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-10 mx-auto overflow-hidden relative max-w-[1920px]">
      <Section1 />
      <Section2 />
      <Section3 />
      <SectionCTA />
      <SectionContact />
      <Section5 />
    </div>
  );
};

export default Home;
