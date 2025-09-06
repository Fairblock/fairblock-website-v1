// components
import Button from "../../common/Button";

const Section1 = () => {
  return (
    <div className="bg-[url(/public/ecosystem/hero-mobile.svg)] md:bg-[url(/public/ecosystem/hero-desktop.svg)] bg-cover flex lg:items-center min-h-[60vh] sm:min-h-[50vh] xl:h-[82vh] mt-[18vh]">
      <div className="mx-auto w-[1920px]">
        <div className="flex flex-col items-start gap-6 mt-[40%] sm:mt-[25%] md:mt-[20%] mb-16 xl:mt-20 xl:mb-0 px-4 sm:px-8">
          <h1 className="font-medium text-primary-blue text-6xl lg:text-8xl">
            Ecosystem
          </h1>
          <h6 className="font-light font-eb-garamond text-lg lg:text-2xl w-3/4 md:w-2/3 lg:w-1/2">
            Discover a growing network of confidential applications (cApps)
            across stablecoins, protected trading, and incorruptible AI.
          </h6>
          <a
            href="https://docs.fairblock.network/docs/start-a-capp-in-5-minutes/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button buttonText="Start building" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
