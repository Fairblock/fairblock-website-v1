import Title from "../../common/Title";

const Section1 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7fcff] to-primary-blue/15 border-b border-primary-blue/10">
      <div className="absolute -top-24 left-[8%] h-64 w-64 rounded-full bg-primary-blue/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 right-[6%] h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" aria-hidden="true" />
      <div className="relative px-4 sm:px-8 py-5 sm:py-7 mx-auto max-w-[1920px]">
        <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-white/80 bg-white/45 px-5 py-6 sm:px-8 sm:py-7 shadow-[0_18px_60px_rgba(55,159,218,0.1)] backdrop-blur-xl">
          <div className="mb-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Title title="Application Showcase" />
            <a
              href="https://docs.fairblock.network/ct/guides/build/building-with-sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline shrink-0"
            >
              Start building
            </a>
          </div>
          <p className="text-center text-neutral-600 text-sm sm:text-[0.95rem] leading-relaxed lg:whitespace-nowrap">
            Explore live products and demos that bring confidentiality to digital assets,
            intelligent applications, and onchain markets.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Section1;
