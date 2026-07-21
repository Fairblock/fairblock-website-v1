import HeroNetworkAnimation from "./HeroNetworkAnimation";
import FadeIn from "../../common/FadeIn";

export default function Section1() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 p-4 sm:px-8 mx-auto max-w-screen-xl w-full py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

          {/* ── Left: Text ── */}
          <div className="flex flex-col justify-center w-full lg:w-[42%] lg:pr-10">
            <FadeIn>
              <h1 className="font-heading font-normal" style={{ lineHeight: 1.05, letterSpacing: "-0.025em", fontSize: "clamp(3.2rem, 5.2vw, 6rem)" }}>
                <span>Powering </span>
                <em style={{ color: "#58BDF6", fontStyle: "italic" }}>Incorruptible </em>
                <span>Markets and Machines</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex gap-3 flex-wrap mt-10">
                <a href="https://docs.fairblock.network/"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-ink">
                  Read the docs
                </a>
                <a href="https://docs.fairblock.network/ct/guides/build/building-with-sdk"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-outline">
                  Start building
                </a>
              </div>
            </FadeIn>
          </div>

          {/* ── Right: Animation ── */}
          <FadeIn delay={150} className="w-full lg:w-[58%] flex items-center">
            <HeroNetworkAnimation />
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
