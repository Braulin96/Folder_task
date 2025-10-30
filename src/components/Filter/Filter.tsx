import { useState, useRef, useEffect } from "react";
import FilterImage from "../../assets/icons/filter.svg";

type Props = {
  filters: string[];
  selectedFilter?: string | null;
  setSelectedFilter: (filter: string) => void;
};

const Filter = ({ filters, selectedFilter, setSelectedFilter }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOpenFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedFilter = (filter: string) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <section ref={ref} className="relative">
      <button
        onClick={handleOpenFilter}
        className=" bg-dark-gray-600 rounded-[8px] flex px-[12px] py-[8px] gap-x-[4px] hover:bg-gray-500 transition-all duration-500 min-w-[90px] justify-between items-center">
        <p className="text-[12px] text-light-gray-100 font-semibold">
          {selectedFilter || "Sort by"}
        </p>
        <img src={FilterImage} alt="filter" className="rotate-90 size-[20px]" />
      </button>
      {isOpen && (
        <ul className="mt-[8px] bg-gray-500 rounded-[8px] shadow-lg p-[8px] flex flex-col gap-y-[4px] absolute z-10 w-full">
          {filters?.map((filter, index) => (
            <li
              key={index}
              onClick={() => handleSelectedFilter(filter)}
              className="text-light-gray-100 text-[12px] hover:underline cursor-pointer font-semibold">
              {filter}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Filter;
