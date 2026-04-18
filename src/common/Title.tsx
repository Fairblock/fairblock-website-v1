const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="font-heading font-normal text-primary-blue text-3xl sm:text-4xl lg:text-5xl text-center">
      {title}
    </h2>
  );
};

export default Title;
