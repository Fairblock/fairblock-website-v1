import { useEffect } from "react";
// components
import Section1 from "./Section1";
import Section2 from "./Section2";

const CApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-10 sm:gap-16 pt-24 xl:pt-32">
      <Section1 />
      <Section2 />
    </div>
  );
};
export default CApps;
