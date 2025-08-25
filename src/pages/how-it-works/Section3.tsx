const Section3 = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:px-8">
      {/* Main Title */}
      <div className="">
        <Title title={"Confidential Stablecoins Flow"} />
      </div>

      {/* Image */}
      <div>
        <img
          className="mx-auto lg:w-[90%]"
          src="/how-it-works/confidential-stablecoins.svg"
          alt="confidential-stablecoins"
        />
      </div>

      {/* New Section Title */}
      <div className="mt-12">
        <Title title="Core Components" />
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 items-center justify-center mt-8">
        <HowItWorksCard
          imageUrl="/how-it-works/fairy-ring.svg"
          title="Fairyring"
          content="A dynamic and decentralized network that hosts app-specific secure and performant confidential computing."
        />
        <HowItWorksCard
          imageUrl="/how-it-works/fairy-kit.svg"
          title="FairyKit"
          content="A module that enables confidential computing for applications within our native ecosystem or across external chains."
        />
      </div>
    </div>
  );
};
