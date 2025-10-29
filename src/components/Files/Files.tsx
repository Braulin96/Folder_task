type Props = {
  fileType?: string;
  name?: string;
  dateAdded?: string;
  onClick?: () => void;
};

const Files = ({ fileType, name, dateAdded, onClick }: Props) => {
  return (
    <div>
      <div
        onClick={onClick}
        aria-label="file"
        className="bg-gray-200 size-[120px] rounded-[12px] shadow-lg flex flex-col items-center justify-center">
        <p className="text-gray-800 text-[16px] mt-[40px]">{name}</p>
        <div className="flex justify-between  w-full mt-auto mb-[8px] px-[8px]">
          <p className="text-gray-600 text-[12px]">{dateAdded}</p>
          <p className="text-gray-600 text-[12px]">{fileType}</p>
        </div>
      </div>
    </div>
  );
};

export default Files;
