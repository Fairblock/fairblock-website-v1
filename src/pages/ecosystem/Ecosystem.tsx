import { useEffect } from "react";
// components
import Section1 from "./Section1";
import Section2 from "./Section02";
// import Section3 from "./Section3";
// import Section4 from "./Section4";

const Ecosystem = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col gap-10 sm:gap-16 overflow-hidden relative mx-auto max-w-[1920px]">
      <Section1 />
      <Section2 />
      {/* <Section3 />
      <Section4 /> */}
    </div>
  );
};

export default Ecosystem;
