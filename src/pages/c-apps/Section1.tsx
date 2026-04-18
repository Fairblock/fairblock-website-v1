import Title from "../../common/Title";

const Section1 = () => {
  return (
    <div className="bg-gradient-to-b from-transparent via-transparent to-primary-blue/20">
      <div className="p-4 sm:px-8 pb-12 mx-auto max-w-[1920px]">
        <div className="mb-4">
          <Title title="Privacy in Production" />
        </div>
        <p className="text-center opacity-60 text-lg max-w-xl mx-auto">
          Confidential applications built with Fairblock.
        </p>
      </div>
    </div>
  );
};
export default Section1;
