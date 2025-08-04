// components
import Title from "../../common/Title";

const Section2 = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="">
        <Title title={"Example User Flow"} />
      </div>
      <div className="relative overflow-hidden pt-8 w-full">
        <img
          className="mx-auto lg:w-[90%] sm:max-w-[700px] p-2"
          src="/how-it-works/user-flow.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section2;
