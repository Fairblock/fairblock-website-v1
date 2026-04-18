const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="font-heading font-bold text-primary-blue text-4xl sm:text-5xl text-center">
      {title}
    </h2>
  );
};

export default Title;
