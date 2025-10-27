// types
export type ButtonProps = {
  buttonText: string;
  size?: string;
}

const Button = ({ buttonText, size = "w-fit" }: ButtonProps) => {
  return (
    <button className={`bg-white hover:bg-[#58BDF6] cursor-pointer duration-300 font-medium px-6 py-2 rounded-xl text-black text-lg lg:text-xl transition-all -tracking-[0.1rem] ${size}`}>
      {buttonText}
    </button>
  );
};
export default Button;
