// components
import { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-16 pt-24 xl:pt-40 overflow-hidden relative mx-auto max-w-[1920px]">
      {/* left light-ray */}
      <img
        className="absolute top-0 lg:top-14 -left-52 lg:-left-80 xl:-left-52 rotate-3 sm:rotate-2 lg:-rotate-2 -z-50"
        src="/how-it-works/light-ray.svg"
        alt=""
      />
      {/* right light-ray */}
      <img
        className="absolute top-0 lg:top-14 -right-52 lg:-right-80 xl:-right-52 -rotate-3 sm:-rotate-2 lg:rotate-2 scale-x-[-1] -z-50"
        src="/how-it-works/light-ray.svg"
        alt=""
      />
      <Section1 />
      <img
        className="absolute w-[1000px] top-[16%] lg:top-[13%] -left-[50%] xl:-left-[30%] -z-50"
        src="/how-it-works/user-flow-bg-gradient.svg"
        alt=""
      />
      <img
        className="absolute w-[1000px] top-[16%] lg:top-[13%] -right-[50%] xl:-right-[30%] scale-x-[-1] -z-50"
        src="/how-it-works/user-flow-bg-gradient.svg"
        alt=""
      />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};
export default HowItWorks;
