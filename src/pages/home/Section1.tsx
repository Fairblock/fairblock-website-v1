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
        className="w-full h-[87vh] sm:h-[82vh] object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={videoSrc}
      />
      <h2 className="hidden absolute bottom-[10%] font-test-tiempos-headline sm:flex justify-center pb-1 text-4xl sm:text-5xl w-full overflow-hidden">
        <ScrambleText
          text="Powering Incorruptible Markets and Machines"
          speed={40}
          scrambleOnLoad={true}
        />
      </h2>
      <h2 className="sm:hidden absolute bottom-[4%] font-test-tiempos-headline flex flex-col gap-2 items-center justify-center pb-1 text-4xl w-full overflow-hidden">
        <ScrambleText
          text="Powering Incorruptible"
          speed={40}
          scrambleOnLoad={true}
        />
        <ScrambleText
          text="Markets and Machines"
          speed={40}
          scrambleOnLoad={true}
        />
      </h2>
    </div>
  );
};

export default Section1;
