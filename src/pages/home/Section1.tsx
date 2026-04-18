import { useEffect, useState } from "react";

const text = "Powering Incorruptible Markets and Machines";

const WordFade = ({ sentence }: { sentence: string }) => {
  const ws = sentence.split(" ");
  const [visible, setVisible] = useState<boolean[]>(ws.map(() => false));

  useEffect(() => {
    const timers = ws.map((_, i) =>
      setTimeout(() => setVisible(prev => { const n = [...prev]; n[i] = true; return n; }), 120 + i * 140)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {ws.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: visible[i] ? 1 : 0,
            transform: visible[i] ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            marginRight: i < ws.length - 1 ? "0.3em" : 0,
          }}
        >
          {word}
        </span>
      ))}
    </>
  );
};

const Section1 = () => {
  const [videoSrc, setVideoSrc] = useState("/home/hero-desktop.mp4");

  useEffect(() => {
    const updateVideo = () => {
      setVideoSrc(window.innerWidth < 640 ? "/home/hero-mobile.mp4" : "/home/hero-desktop.mp4");
    };
    updateVideo();
    window.addEventListener("resize", updateVideo);
    return () => window.removeEventListener("resize", updateVideo);
  }, []);

  return (
    <div className="relative sm:mt-[18vh] h-full w-full">
      <video
        className="w-full h-screen sm:h-[82vh] object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={videoSrc}
      />
      {/* Bottom gradient for text legibility on mobile */}
      <div className="sm:hidden absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      <h2 className="hidden absolute bottom-[10%] font-heading font-normal sm:flex justify-center pb-1 text-4xl sm:text-5xl w-full overflow-hidden">
        <WordFade sentence={text} />
      </h2>
      <h2 className="sm:hidden absolute bottom-[17%] font-heading font-normal flex flex-col gap-1 items-center justify-center text-xl w-full px-6 text-center">
        <div><WordFade sentence="Powering Incorruptible" /></div>
        <div><WordFade sentence="Markets and Machines" /></div>
      </h2>
    </div>
  );
};

export default Section1;
