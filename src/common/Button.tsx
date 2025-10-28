// types
export type ButtonProps = {
  buttonText: string;
  size?: string;
}

const Button = ({ buttonText, size = "w-fit" }: ButtonProps) => {
  return (
    <button className={`bg-white hover:bg-[#58BDF6] cursor-pointer duration-300 px-4 sm:px-6 pt-1 sm:pt-3 pb-1 sm:pb-2 rounded-xl text-black lg:text-2xl transition-all ${size}`}>
      {buttonText}
    </button>
  );
};
export default Button;
