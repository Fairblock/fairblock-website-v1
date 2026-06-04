import Title from "../../common/Title";
import FadeIn from "../../common/FadeIn";

const PLATFORMS: string[] = [
  "anagram", "galileo", "dialectic", "lemniscap", "robot-ventures",
  "axelar", "arbitrum", "gsr", "chorus-one", "reverie",
];
const INVESTORS: string[] = [
  "Zaki Manian", "Waikit Lau", "Leland Lee", "Calvin Liu", "George Lambeth",
  "Xavier Meegan", "Stefan Coolican", "Richard Malone", "Collin Myers", "Batu",
];

const Section5 = () => {
  return (
    <div>
      <FadeIn>
        <div className="flex items-center justify-center gap-8 p-4 sm:px-8">
          <img
            className="hidden xl:block w-36 h-96 invert opacity-80"
            src="/home/backers/border.svg"
            alt=""
          />
          <div className="flex flex-col gap-10 justify-center items-center">
            <Title title="Backers" />
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 lg:gap-12 items-center">
              {PLATFORMS.map((item) => (
                <img
                  key={item}
                  loading="lazy"
                  className="max-w-36 w-full invert opacity-70 hover:opacity-100 transition-opacity duration-200"
                  src={`/home/backers/${item}.png`}
                  alt={item}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
              {INVESTORS.map((name) => (
                <span key={name} className="px-2 py-1 text-sm sm:text-base md:text-lg opacity-60">
                  {name}
                </span>
              ))}
            </div>
          </div>
          <img
            className="hidden xl:block w-36 h-96 rotate-180 invert opacity-80"
            src="/home/backers/border.svg"
            alt=""
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default Section5;
