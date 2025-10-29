import { Link } from "react-router-dom";
// components
import Title from "../../common/Title";
import Button from "../../common/Button";

const Section4 = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 p-4 sm:px-8 mx-auto max-w-screen-2xl">
      <div className="px-4">
        <Title title="Seamless Confidential Apps" />
      </div>
      <div className="mx-auto lg:w-3/5 xl:w-[60%] max-w-full">
        <img
          className="w-full"
          src="/home/dynamic-confidential-compute.svg"
          alt="dynamic-confidential-compute"
        />
      </div>
      <Link to="how-it-works" className="mx-auto">
        <Button buttonText="How it Works" />
      </Link>
    </div>
  );
};
export default Section4;
