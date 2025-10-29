import FolderBackground from "../../assets/icons/folder.svg";

type Props = {
  name?: string;
  onClick?: () => void;
};

const Folder = ({ name, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      aria-label="folder"
      className="size-[120px] rounded-[12px] shadow-lg bg-gray-600 hover:translate-y-[-6px] transition-all duration-[600] hover:bg-gray-500">
      <img
        src={FolderBackground}
        alt="folder icon"
        className="mx-auto  size-[90px]"
      />
      <p className="text-gray-100 text-[16px] mt-[2px] font-semibold">{name}</p>
    </button>
  );
};

export default Folder;
