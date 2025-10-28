// data
import ecosystemCards from "./ecosystemData.json";
// icons
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
// types
type ecosystemData = {
  category: string[];
  coreCryptography: string[];
  description: string;
  id: number;
  imageUrl: string;
  projectName: string;
  projectLink: string;
  readMoreLink?: string | null;
  readMoreText?: string | null;
};

type CardProps = {
  ecosystem: ecosystemData;
};

const buttons: string[] = [
  "All",
  "Confidential Stablecoins",
  "Protected Trading",
  "Confidential AI",
];

const Card = ({ ecosystem }: CardProps) => {
  return (
    <div className="border border-primary-blue hover:bg-primary-blue duration-150 flex flex-col gap-4 group p-5 rounded-lg min-h-[250px] hover:text-black">
      {/* logo + tags */}
      <div className="flex justify-between">
        <a
          className="cursor-pointer"
          href={ecosystem.projectLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="grayscale" src={ecosystem.imageUrl} alt={ecosystem.projectName} />
        </a>
        <div className="duration-300 flex gap-2 text-sm">
          {ecosystem.coreCryptography.includes("mpc") && (
            <span className="border border-[#58BDF6] group-hover:border-[#A7C7FF] bg-[#58BDF6]/20 group-hover:bg-[#718BD2] duration-150 h-fit pt-1 px-2 rounded-sm group-hover:text-black transition-all">
              MPC
            </span>
          )}
          {ecosystem.coreCryptography.includes("mpc-ibe") && (
            <span className="border border-[#58BDF6] group-hover:border-[#A7C7FF] bg-[#58BDF6]/20 group-hover:bg-[#718BD2] duration-150 h-fit pt-1 px-2 rounded-sm group-hover:text-black transition-all">
              MPC - IBE
            </span>
          )}
          {ecosystem.coreCryptography.includes("he") && (
            <span className="border border-[#D4FA62] bg-[#D4FA62]/20 group-hover:bg-[#A5AB56] duration-300 h-fit pt-1 px-2 rounded-sm group-hover:text-black transition-all">
              HE
            </span>
          )}
          {ecosystem.coreCryptography.includes("tee") && (
            <span className="border border-[#FFB164] bg-[#FFB164]/20 group-hover:bg-[#EE7D4D] duration-300 h-fit pt-1 px-2 rounded-sm group-hover:text-black transition-all">
              TEE
            </span>
          )}
          {ecosystem.coreCryptography.includes("fhe") && (
            <span className="border border-[#F6AAFF] bg-[#F6AAFF]/20 group-hover:bg-[#9D7BA1] duration-300 h-fit pt-1 px-2 rounded-sm group-hover:text-black transition-all">
              FHE
            </span>
          )}
        </div>
      </div>
      {/* title + description */}
      <div className="flex flex-col gap-2">
        <a
          className="cursor-pointer"
          href={ecosystem.projectLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3 className="font-bold font-test-tiempos-headline line-clamp-1 text-2xl">
            {ecosystem.projectName}
          </h3>
        </a>
        <p className="line-clamp-3">{ecosystem.description}</p>
        {ecosystem.readMoreLink && (
          <a
            className="cursor-pointer mt-2 text-sm underline"
            href={ecosystem.readMoreLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {ecosystem.readMoreText}
          </a>
        )}
      </div>
    </div>
  );
};

const Section2 = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [filteredList, setFilteredList] =
    useState<ecosystemData[]>(ecosystemCards);

  useEffect(() => {
    console.log(selectedFilter, "SF");
  });

  const handleFilter = (filter: string) => {
    if (filter === "All") {
      setFilteredList(ecosystemCards);
    } else {
      setFilteredList(
        ecosystemCards.filter((card) => card.category.includes(filter))
      );
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilteredList(
      ecosystemCards.filter((card) =>
        card.projectName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="flex flex-col gap-8 p-4 sm:px-8">
      {/* filter & search menu */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap w-full sm:w-fit">
          {buttons.map((button, index) => (
            <button
              className={`${
                selectedFilter === button ? "bg-primary-blue" : "bg-white"
              } border border-primary-blue cursor-pointer flex-shrink-0 px-4 pt-2 pb-1 rounded-md text-black text-lg`}
              onClick={() => {
                handleFilter(button);
                setSelectedFilter(button);
              }}
              key={index}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="bg-white border border-primary-blue flex gap-2 items-center pl-3 pr-2 pt-2 pb-1 rounded-md text-black w-full sm:w-fit">
          <IoIosSearch className="text-2xl" />
          <form onSubmit={handleSearch}>
            <input
              className="outline-none placeholder:text-black text-lg"
              placeholder="Search via project"
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              value={searchTerm}
            />
          </form>
        </div>
      </div>
      {/* ecosystem cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {filteredList.map((item) => (
          <Card key={item.id} ecosystem={item} />
        ))}
      </div>
    </div>
  );
};
export default Section2;
