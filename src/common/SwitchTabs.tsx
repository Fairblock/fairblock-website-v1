import { useState } from "react";
// types
type SwitchTabsProps = {
  firstTabLabel: string;
  secondTabLabel: string;
  FirstTabComponent: React.ComponentType;
  SecondTabComponent: React.ComponentType;
};

const SwitchTabs = ({
  firstTabLabel,
  secondTabLabel,
  FirstTabComponent,
  SecondTabComponent,
}: SwitchTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(firstTabLabel);

  const handleTabSelect = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-nowrap justify-center mx-auto text-lg sm:text-xl w-full sm:w-[600px]">
        <button
          className={`${
            activeTab === firstTabLabel ? "bg-[#141210] text-white" : "bg-black/5 text-[#141210]"
          } border border-black/15 cursor-pointer font-maison-neue px-2 py-3 text-sm sm:text-2xl text-nowrap min-w-[180px] sm:min-w-[55%] transition-colors duration-200`}
          onClick={() => handleTabSelect(firstTabLabel)}
        >
          {firstTabLabel}
        </button>
        <button
          className={`${
            activeTab === secondTabLabel ? "bg-[#141210] text-white" : "bg-black/5 text-[#141210]"
          } border border-black/15 cursor-pointer font-maison-neue px-2 py-3 text-sm sm:text-2xl text-nowrap min-w-[180px] sm:min-w-[55%] transition-colors duration-200`}
          onClick={() => handleTabSelect(secondTabLabel)}
        >
          {secondTabLabel}
        </button>
      </div>
      <div>
        {activeTab === firstTabLabel &&  <FirstTabComponent />}
        {activeTab === secondTabLabel && <SecondTabComponent />}
      </div>
    </div>
  );
};
export default SwitchTabs;
