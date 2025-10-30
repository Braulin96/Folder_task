import { motion } from "framer-motion";
import { memo } from "react";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delay }}
      onClick={onClick}
      aria-label="file"
      className="bg-gray-200 size-[120px] rounded-[12px] shadow-lg flex flex-col items-center justify-center">
      <p className="text-gray-800 text-[16px] mt-[40px]">{name}</p>
      <footer className="flex justify-between w-full mt-auto mb-[8px] px-[8px]">
        <p className="text-gray-600 text-[12px]">{dateAdded}</p>
        <p className="text-gray-600 text-[12px]">.{fileType}</p>
      </footer>
    </motion.li>
  );
};

export default memo(Files);
