const SubTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="border border-primary-blue bg-primary-blue/30 font-test-tiempos-headline mx-auto px-6 lg:px-8 py-1 rounded-lg text-xl lg:text-2xl w-fit">
      {title}
    </h3>
  );
};
export default SubTitle;
