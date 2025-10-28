// components
import { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col pt-24 xl:pt-40 overflow-hidden relative mx-auto max-w-[1920px]">
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
      <div>
        <div className="bg-[url(/how-it-works/bg-1.svg)] bg-cover py-5 sm:pb-8 sm:pt-10">
          <Section2 />
        </div>
        <div className="bg-[url(/how-it-works/bg-2.svg)] py-5 sm:py-8">
          <Section3 />
        </div>
        <div className="bg-[url(/how-it-works/bg-3.svg)] py-5 sm:pb-8 sm:pt-10">
          <Section4 />
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
