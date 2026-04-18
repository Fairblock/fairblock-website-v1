import Title from "../../common/Title";

const Section1 = () => {
  return (
    <div className="bg-gradient-to-b from-transparent via-transparent to-primary-blue/20">
      <div className="p-4 sm:px-8 pb-12 mx-auto max-w-[1920px]">
        <div className="mb-10">
          <Title title="Our Applications" />
        </div>
        <p className="lg:text-lg text-justify mx-auto lg:w-3/5">
          Fairblock is product-first. Rather than being a general-purpose
          infrastructure project focused solely on cryptography research or
          marketing, we prioritize building and collaborating on real,
          seamless, and high-impact applications that deliver measurable value
          to users.
        </p>
      </div>
    </div>
  );
};
export default Section1;
