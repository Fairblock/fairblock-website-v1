import { Link } from "react-router-dom";
// components
import Title from "../../common/Title";
import Button from "../../common/Button";

const Section4 = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 p-4 sm:px-8 mx-auto max-w-screen-2xl">
      <div className="px-4">
        <Title title="Seamless Confidential Apps" />
      </div>
      <div className="mx-auto lg:w-3/5 xl:1/2 max-w-full">
        <img className="w-full" src="/home/dynamic-confidential-compute.svg" alt="" />
      </div>
      <Link to="how-it-works" className="mx-auto mt-8">
        <Button buttonText="How it works"/>
      </Link>
    </div>
  )
}
export default Section4;