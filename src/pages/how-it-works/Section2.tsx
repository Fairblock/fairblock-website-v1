// components
import Title from "../../common/Title";
import SwitchTabs from "../../common/SwitchTabs";

const FirstTab = () => {
  return (
    <div className="w-full">
      <img
        className="mx-auto w-full lg:max-w-[75%]"
        src="/how-it-works/general-user-flow.svg"
        alt="general-user-flow"
      />
    </div>
  );
};

const SecondTab = () => {
  return (
    <div className="w-full">
      <img
        className="mx-auto w-full lg:max-w-[80%]"
        src="/how-it-works/confidential-stablecoins.png"
        alt="confidential-stablecoins"
      />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col gap-8 p-4 sm:px-8 items-center">
      <div>
        <Title title="UserFlow" />
      </div>
      <SwitchTabs
        firstTabLabel="General"
        secondTabLabel="Confidential Stablecoins"
        FirstTabComponent={FirstTab}
        SecondTabComponent={SecondTab}
      />
    </div>
  );
};
export default Section2;
