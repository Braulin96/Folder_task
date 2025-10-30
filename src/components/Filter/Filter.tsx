import { useState, useRef, useEffect } from "react";

import Button from "components/Button/Button";

import FilterImage from "assets/icons/filter.svg";

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
      <Button
        onClick={handleOpenFilter}
        text={selectedFilter || "Sort by"}
        icon={FilterImage}
      />
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
