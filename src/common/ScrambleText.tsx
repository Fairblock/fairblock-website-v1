import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&<>?";
const SCRAMBLE_PASSES = 8;

type ScrambleTextProps = {
  text: string;
  speed: number;
  scrambleOnLoad?: boolean;
  scrambleOnHover?: boolean;
};

const ScrambleText = ({
  text,
  speed = 50,
  scrambleOnLoad = false,
  scrambleOnHover = false,
}: ScrambleTextProps) => {
  const [displayedText, setDisplayedText] = useState(scrambleOnLoad ? "" : text);
  const [hoverActive, setHoverActive] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const runScramble = (onComplete?: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let frame = 0;
    const totalFrames = text.length * SCRAMBLE_PASSES;

    intervalRef.current = setInterval(() => {
      const lockedCount = Math.floor(frame / SCRAMBLE_PASSES);
      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < lockedCount) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayedText(result);
      frame++;

      if (frame > totalFrames) {
        clearInterval(intervalRef.current!);
        setDisplayedText(text);
        onComplete?.();
      }
    }, Math.max(10, speed / SCRAMBLE_PASSES));
  };

  useEffect(() => {
    if (!scrambleOnLoad) {
      setDisplayedText(text);
      return;
    }
    const timeout = setTimeout(() => runScramble(), 150);
    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speed, scrambleOnLoad]);

  const handleMouseEnter = () => {
    if (!scrambleOnHover || hoverActive) return;
    setHoverActive(true);
    runScramble(() => setHoverActive(false));
  };

  return <span onMouseEnter={handleMouseEnter}>{displayedText}</span>;
};

export default ScrambleText;
