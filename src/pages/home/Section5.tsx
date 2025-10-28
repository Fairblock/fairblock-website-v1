// components
import Title from "../../common/Title";

const PLATFORMS: string[] = [
  "anagram",
  "galileo",
  "dialectic",
  "lemniscap",
  "robot-ventures",
  "axelar",
  "arbitrum",
  "gsr",
  "chorus-one",
  "reverie",
];
const INVESTORS: string[] = [
  "Zaki Manian",
  "Waikit Lau",
  "Leland Lee",
  "Calvin Liu",
  "George Lambeth",
  "Xavier Meegan",
  "Stefan Coolican",
  "Richard Malone",
  "Collin Myers",
  "Batu",
];

const Section5 = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-8 p-4 sm:px-8">
        {/* LEFT BORDER IMAGE */}
        <img
          loading="lazy"
          className="hidden xl:block w-36 h-96"
          src="/home/backers/border.svg"
          alt="Decoration"
        />

        {/* BACKERS */}
        <div className="flex flex-col gap-10 justify-center items-center">
          <Title title="Backers" />
          {/* PLATFORM IMAGES */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-12 items-center justify-between">
            {PLATFORMS.map((item, index) => (
              <img
                loading="lazy"
                key={index}
                className="max-w-36 w-full"
                src={`/home/backers/${item}.png`}
                alt={item}
              />
            ))}
          </div>

          {/* INVESTOR NAMES */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center items-center justify-center">
            {INVESTORS.map((item, index) => (
              <span
                className="px-4 py-1 text-xl"
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT BORDER IMAGE */}
        <img
          loading="lazy"
          className="hidden xl:block w-36 h-96 rotate-180"
          src="/home/backers/border.svg"
          alt="Decoration"
        />
      </div>
    </div>
  );
};
export default Section5;
