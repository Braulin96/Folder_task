type Props = {
  text: string;
  icon?: string;
  onClick?: () => void;
};

const Button = ({ text, icon, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className=" bg-dark-gray-600 rounded-[8px] flex px-[12px] py-[8px] gap-x-[4px] hover:bg-gray-500 transition-all duration-500 min-w-[90px] justify-between items-center">
      <p className="text-[12px] text-light-gray-100 font-semibold">{text}</p>
      {icon && (
        <img src={icon} alt="filter" className="rotate-90 size-[20px]" />
      )}
    </button>
  );
};

export default Button;
