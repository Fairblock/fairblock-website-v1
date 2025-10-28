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
      <div className="flex flex-nowrap justify-center rounded-lg mx-auto text-lg sm:text-xl w-full sm:w-[600px]">
        <button
          className={`${
            activeTab === firstTabLabel ? "bg-primary-blue text-black" : "bg-primary-blue/10"
          } border border-primary-blue cursor-pointer font-test-tiempos-headline px-2 py-3 rounded-l-md sm:rounded-l-xl text-sm sm:text-2xl text-nowrap min-w-[180px] sm:min-w-[55%]`}
          onClick={() => handleTabSelect(firstTabLabel)}
        >
          {firstTabLabel}
        </button>
        <button
          className={`${
            activeTab === secondTabLabel ? "bg-primary-blue text-black" : "bg-primary-blue/10"
          } border border-primary-blue cursor-pointer font-test-tiempos-headline px-2 py-3 rounded-r-md sm:rounded-r-xl text-sm sm:text-2xl text-nowrap min-w-[180px] sm:min-w-[55%]`}
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
