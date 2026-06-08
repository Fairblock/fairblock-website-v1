import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
};

export default function LazyImage({ src, alt, aspectRatio = "16/9", className }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio, overflow: "hidden", background: "#eeece8" }}>
      {!loaded && (
        <div className="skeleton-shimmer" style={{ position: "absolute", inset: 0 }} />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={className}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
    </div>
  );
}
