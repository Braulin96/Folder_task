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
      className="size-[120px] rounded-[12px] shadow-lg"
      style={{
        backgroundImage: `url(${FolderBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <p className="text-gray-800 text-[16px] mt-[20px]"> {name}</p>
    </button>
  );
};

export default Folder;
