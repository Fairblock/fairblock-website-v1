import { useState, useEffect } from "react";

type ScrambleTextProps = {
  text: string;
  speed: number;
  scrambleOnLoad?: boolean; // Flag to enable/disable load scrambling
  scrambleOnHover?: boolean; // Flag to enable/disable hover scrambling
};

const ScrambleText = ({
  text,
  speed = 50,
  scrambleOnLoad = false,
  scrambleOnHover = false,
}: ScrambleTextProps) => {
  const [displayedText, setDisplayedText] = useState(scrambleOnLoad ? "" : text); // Initial state
  const [hoverActive, setHoverActive] = useState(false); // Tracks hover state
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Handle onLoad scrambling
  useEffect(() => {
    if (!scrambleOnLoad) {
      setDisplayedText(text); // Skip scrambling if scrambleOnLoad is false
      return;
    }

    let scrambled = "";
    let currentIndex = 0;

    const scramble = () => {
      if (currentIndex < text.length) {
        scrambled = text
          .split("")
          .map((char, i) => (i < currentIndex ? char : chars[Math.floor(Math.random() * chars.length)]))
          .join("");

        setDisplayedText(scrambled);
        currentIndex++;
      } else {
        clearInterval(interval);
        setDisplayedText(text); // Set to the final text
      }
    };

    const interval = setInterval(scramble, speed);

    return () => clearInterval(interval);
  }, [text, speed, scrambleOnLoad]);

  // Handle hover scrambling
  const handleMouseEnter = () => {
    if (!scrambleOnHover || hoverActive) return; // Skip if hover scrambling is disabled or already active
    setHoverActive(true);

    let scrambled = "";
    let currentIndex = 0;

    const scramble = () => {
      if (currentIndex < text.length) {
        scrambled = text
          .split("")
          .map((char, i) => (i < currentIndex ? char : chars[Math.floor(Math.random() * chars.length)]))
          .join("");

        setDisplayedText(scrambled);
        currentIndex++;
      } else {
        clearInterval(interval);
        setDisplayedText(text); // Set to the final text
        setHoverActive(false); // Reset hover state
      }
    };

    const interval = setInterval(scramble, speed);

    return () => clearInterval(interval); // Cleanup if necessary
  };

  return <span onMouseEnter={handleMouseEnter}>{displayedText}</span>;
};

export default ScrambleText;
