import { useCallback, memo } from "react";

import FolderBackground from "../../assets/icons/folder.svg";

type Props = {
  id: string | number;
  name?: string;
  onOpen?: (id: number) => void;
};

const Folder = ({ id, name, onOpen }: Props) => {
  const handleClick = useCallback(() => onOpen?.(id as number), [onOpen, id]);

  return (
    <button
      onClick={handleClick}
      aria-label="folder"
      className="size-[120px] rounded-[12px] shadow-lg bg-gray-600 hover:translate-y-[-6px] transition-all duration-300 hover:bg-gray-500">
      <img
        src={FolderBackground}
        alt="folder icon"
        className="mx-auto size-[90px]"
      />
      <p className="text-gray-100 text-[16px] mt-[2px] font-semibold">{name}</p>
    </button>
  );
};

export default memo(Folder);
