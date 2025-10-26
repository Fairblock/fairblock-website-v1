// components
import SubTitle from "../../common/SubTitle";

const Section2 = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:px-8">
      <div className="flex flex-col gap-8">
        <SubTitle title="Foundational Tech" />
        <div className="text-center text-white/70 text-lg lg:text-xl">
          <p>
            Powering secure, fast, and confidential applications <br />
            (cApps) with dynamic, multimodal cryptography
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-b from-transparent via-transparent to-primary-blue/60 p-4 lg:p-12 rounded-b-3xl">
        <img
          className="mx-auto w-full xl:w-[75%]"
          src="/ecosystem/foundational-tech.svg"
          alt="foundational-tech"
        />
      </div>
    </div>
  );
};

export default Section2;
