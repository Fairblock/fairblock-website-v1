import { useEffect, useState } from "react";
// components
import ScrambleText from "../../common/ScrambleText";

const Section1 = () => {
  const [videoSrc, setVideoSrc] = useState("/home/hero-desktop.mp4");

  useEffect(() => {
    const updateVideo = () => {
      if (window.innerWidth < 640) {
        setVideoSrc("/home/hero-mobile.mp4");
      } else {
        setVideoSrc("/home/hero-desktop.mp4");
      }
    };

    updateVideo(); // run on mount
    window.addEventListener("resize", updateVideo);

    return () => window.removeEventListener("resize", updateVideo);
  }, []);

  return (
    <div className="relative sm:mt-[18vh] h-full w-full">
      <video
        className="w-full h-[70vh] sm:h-[82vh] object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
      />
      <h2 className="hidden absolute bottom-[10%] sm:flex justify-center pb-1 text-2xl sm:text-4xl lg:text-5xl w-full overflow-hidden">
        <ScrambleText
          text="Powering incorruptible markets and machines"
          speed={40}
          scrambleOnLoad={true}
        />
      </h2>
      <h2 className="sm:hidden absolute bottom-[4%] flex flex-col gap-2 items-center justify-center pb-1 text-3xl w-full overflow-hidden">
        <ScrambleText
          text="Powering incorruptible"
          speed={40}
          scrambleOnLoad={true}
        />
        <ScrambleText
          text="markets and machines"
          speed={40}
          scrambleOnLoad={true}
        />
      </h2>
    </div>
  );
};

export default Section1;
