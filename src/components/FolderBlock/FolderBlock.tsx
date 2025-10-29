import { useState } from "react";

import Files from "../Files/Files";
import Folder from "../Folder/Folder";

import { MOCK_FOLDER_DATA } from "../../data/folderData";

const FolderBlock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFolderIndex, setSelectedFolderIndex] = useState<number | null>(
    null
  );

  const handleOpenFolder = (index: number) => {
    setSelectedFolderIndex(index);
    setIsOpen(true);
  };

  const handleCloseFolder = () => {
    setIsOpen(false);
    setSelectedFolderIndex(null);
  };

  const folderData = MOCK_FOLDER_DATA;

  return (
    <div>
      {!isOpen ? (
        <section
          aria-label="folders section"
          className="p-[30px] flex flex-wrap gap-[10px]">
          {folderData.map((folder, index) => (
            <Folder
              key={index}
              name={folder.name}
              onClick={() => handleOpenFolder(index)}
            />
          ))}
        </section>
      ) : (
        <section
          about="files section"
          className="flex flex-col p-[30px] gap-y-[8px]">
          <button
            onClick={handleCloseFolder}
            aria-label="back button"
            className="text-[14px] text-gray-200 underline w-fit">
            Back
          </button>
          <ul aria-label="files list" className="flex flex-wrap gap-[10px]">
            {folderData[selectedFolderIndex as number]?.files.map(
              (file, index) => (
                <Files
                  key={index}
                  name={file.name}
                  fileType={file.type}
                  dateAdded={file.added}
                  //   onClick={() => console.log("clicked file index:", index)}
                />
              )
            )}
          </ul>
        </section>
      )}
    </div>
  );
};

export default FolderBlock;
