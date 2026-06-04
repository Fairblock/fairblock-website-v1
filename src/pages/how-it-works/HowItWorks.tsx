// components
import { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col pt-32 xl:pt-40 overflow-hidden relative mx-auto max-w-[1920px]">
      <Section1 />
      <div className="flex flex-col gap-8 py-5 sm:pb-8 sm:pt-10">
        <Section2 />
        <Section4 />
      </div>
    </div>
  );
};
export default HowItWorks;
