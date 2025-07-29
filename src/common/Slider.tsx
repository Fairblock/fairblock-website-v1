import React, { useEffect, useRef, useState } from "react";

type SliderProps = {
  items: React.ReactNode[];
  width: number;
  height?: number;
  gap?: string;
  speed?: number;            // px/sec
  play?: boolean;            // true = always autoplay (ignore hover pause)
  direction?: "left" | "right"; // scroll direction
};

const Slider: React.FC<SliderProps> = ({
  items,
  width,
  height = 200,
  gap = "1rem",
  speed = 60,
  play = true,
  direction = "left",
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const lastTime = useRef<number | null>(null);
  const animRef = useRef<number | null>(null);

  const [paused, setPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
  const track = trackRef.current;
  const container = track?.parentElement;

  if (track && container) {
    const totalWidth = track.scrollWidth / 2; // one set of items
    if (direction === "right") {
      // Start so that the rightmost edge of the first set is just outside the right edge
      offset.current = -totalWidth + container.clientWidth;
    } else {
      offset.current = 0;
    }
    track.style.transform = `translateX(${offset.current}px)`;
  }
}, [direction, items, width, gap]);

  const animate = (time: number) => {
    if (lastTime.current != null) {
      const delta = (time - lastTime.current) / 1000;
      const move = speed * delta * (direction === "right" ? 1 : -1);

      offset.current += move;

      const track = trackRef.current;
      if (track) {
        const totalWidth = track.scrollWidth / 2; // half = one full set

        if (direction === "left" && offset.current <= -totalWidth) {
          offset.current += totalWidth;
        } else if (direction === "right" && offset.current >= 0) {
          offset.current -= totalWidth;
        }

        track.style.transform = `translateX(${offset.current}px)`;
      }
    }
    lastTime.current = time;
    if (!paused) animRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!paused) animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current!);
  }, [paused, direction, speed]);

  return (
    <div
      style={{ overflow: "hidden", height }}
      onMouseEnter={() => {
        if (!play) setPaused(true);
      }}
      onMouseLeave={() => {
        if (!play) setPaused(false);
        setHoveredIndex(null);
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap,
          willChange: "transform",
        }}
      >
        {[...items, ...items].map((item, i) => {
          const isHovered = hoveredIndex === i % items.length;
          return (
            <div
              className="flex items-center"
              key={i}
              style={{
                flex: "0 0 auto",
                width,
                height,
                transition: "filter 0.3s ease",
                filter:
                  hoveredIndex === null || isHovered
                    ? "grayscale(0%)"
                    : "grayscale(100%)",
              }}
              onMouseEnter={() => setHoveredIndex(i % items.length)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
