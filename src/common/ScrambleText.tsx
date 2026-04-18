import { useState, useEffect, useRef } from "react";

// Cipher-only chars — looks like real encrypted text, not keyboard noise
const CIPHER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const rand = () => CIPHER[Math.floor(Math.random() * CIPHER.length)];

type ScrambleTextProps = {
  text: string;
  speed?: number; // ms cascade delay between each character resolving
  scrambleOnLoad?: boolean;
  scrambleOnHover?: boolean;
};

const ScrambleText = ({
  text,
  speed = 15,
  scrambleOnLoad = false,
  scrambleOnHover = false,
}: ScrambleTextProps) => {
  const chars = text.split("");

  const [displayed, setDisplayed] = useState<string[]>(() =>
    scrambleOnLoad ? chars.map(c => (c === " " ? " " : rand())) : chars
  );
  const [hoverActive, setHoverActive] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAll = () => {
    timers.current.forEach(t => clearTimeout(t));
    timers.current = [];
  };

  const runDecrypt = (onComplete?: () => void) => {
    clearAll();
    const resolved = new Array(chars.length).fill(false);

    // Background noise: unresolved chars keep cycling at 55ms
    const noise = setInterval(() => {
      setDisplayed(prev => {
        const next = [...prev];
        for (let i = 0; i < chars.length; i++) {
          if (!resolved[i] && chars[i] !== " ") next[i] = rand();
        }
        return next;
      });
    }, 55);
    timers.current.push(noise as unknown as ReturnType<typeof setTimeout>);

    // Cascade: each char resolves after i * speed ms
    const FLICKERS = 4;
    const FLICKER_MS = 38;

    chars.forEach((char, i) => {
      if (char === " ") { resolved[i] = true; return; }

      const start = setTimeout(() => {
        let f = 0;
        const flicker = setInterval(() => {
          if (f < FLICKERS) {
            setDisplayed(prev => { const n = [...prev]; n[i] = rand(); return n; });
            f++;
          } else {
            clearInterval(flicker);
            resolved[i] = true;
            setDisplayed(prev => { const n = [...prev]; n[i] = char; return n; });
          }
        }, FLICKER_MS);
        timers.current.push(flicker as unknown as ReturnType<typeof setTimeout>);
      }, i * speed);

      timers.current.push(start);
    });

    // Stop noise and finalize after everything resolves
    const total = chars.length * speed + FLICKERS * FLICKER_MS + 80;
    const done = setTimeout(() => {
      clearInterval(noise);
      setDisplayed(chars);
      onComplete?.();
    }, total);
    timers.current.push(done);
  };

  useEffect(() => {
    if (!scrambleOnLoad) { setDisplayed(chars); return; }
    const t = setTimeout(() => runDecrypt(), 120);
    timers.current.push(t);
    return clearAll;
  }, [text]);

  const handleMouseEnter = () => {
    if (!scrambleOnHover || hoverActive) return;
    setHoverActive(true);
    setDisplayed(chars.map(c => (c === " " ? " " : rand())));
    setTimeout(() => runDecrypt(() => setHoverActive(false)), 30);
  };

  return <span onMouseEnter={handleMouseEnter}>{displayed.join("")}</span>;
};

export default ScrambleText;
