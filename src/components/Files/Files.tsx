import { motion } from "framer-motion";
import { memo } from "react";

import DocImage from "../../assets/icons/doc.svg";
import MovieImage from "../../assets/icons/movie.svg";

type Props = {
  fileType?: string;
  name?: string;
  dateAdded?: string;
  onClick?: () => void;
  duration?: number;
  delay?: number;
};

const Files = ({ fileType, name, dateAdded, onClick, delay = 0 }: Props) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: delay }}
      onClick={onClick}
      aria-label="file"
      className="size-[120px] rounded-[12px] shadow-lg bg-dark-gray-600 hover:translate-y-[-6px] transition-all duration-300 hover:bg-gray-500 flex flex-col">
      <>
        <img
          src={fileType === "doc" ? DocImage : MovieImage}
          alt="document icon"
          className="mx-auto size-[40px] mt-[10px]"
        />
        <p className="text-[10px] -mt-[10px] -mr-[50px]">.{fileType}</p>
      </>
      <p className="text-light-gray-100 text-[13px] leading-4 font-semibold mt-[4px]">
        {name}
      </p>
      <p className="text-[10px] mt-auto mb-[4px] px-[8px] text-light-gray-100 mr-auto">
        {dateAdded}
      </p>
    </motion.li>
  );
};

export default memo(Files);
