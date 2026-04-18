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
      <div className="hidden absolute bottom-[6%] sm:flex flex-col items-center gap-5 w-full">
        <h2 className="font-test-tiempos-headline text-4xl sm:text-5xl">
          <ScrambleText
            text="Powering Incorruptible Markets and Machines"
            speed={40}
            scrambleOnLoad={true}
          />
        </h2>
        <a
          href="mailto:hello@fairblock.network"
          className="bg-white text-black text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary-blue transition-colors duration-300"
        >
          Book a Demo
        </a>
      </div>
      <div className="sm:hidden absolute bottom-[4%] font-test-tiempos-headline flex flex-col gap-3 items-center justify-center pb-1 text-3xl w-full overflow-hidden">
        <h2 className="flex flex-col gap-2 items-center">
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
        <a
          href="mailto:hello@fairblock.network"
          className="bg-white text-black text-sm font-semibold px-5 py-2 rounded-xl hover:bg-primary-blue transition-colors duration-300"
        >
          Book a Demo
        </a>
      </div>
    </div>
  );
};

export default Section1;
