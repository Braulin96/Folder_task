import { useState } from "react";
import FilterImage from "../../assets/icons/filter.svg";

type Props = {
  filters: string[];
  selectedFilter?: string | null;
  setSelectedFilter: (filter: string) => void;
};

const Filter = ({ filters, selectedFilter, setSelectedFilter }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedFilter = (filter: string) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };

  return (
    <section className="relative">
      <button
        onClick={handleOpenFilter}
        className=" bg-gray-600 rounded-[8px] flex px-[12px] py-[8px] gap-x-[4px] hover:bg-gray-500 transition-all duration-500">
        <p className="text-[12px] text-gray-100 font-semibold">
          <span className="mr-[2px]">Sort by:</span>
          {selectedFilter || ""}
        </p>
        <img src={FilterImage} alt="filter" className="rotate-90 size-[20px]" />
      </button>
      {isOpen && (
        <ul className="mt-[8px] bg-gray-500 rounded-[8px] shadow-lg p-[8px] flex flex-col gap-y-[4px] absolute z-10 w-full">
          {filters?.map((filter, index) => (
            <li
              key={index}
              onClick={() => handleSelectedFilter(filter)}
              className="text-gray-200 text-[14px] hover:underline cursor-pointer font-semibold">
              {filter}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Filter;
