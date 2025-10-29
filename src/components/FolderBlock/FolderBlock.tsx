import { useState } from "react";

import Files from "../Files/Files";
import Folder from "../Folder/Folder";
import Filter from "../Filter/Filter";

import { MOCK_FOLDER_DATA } from "../../data/folderData";
import { FILTER_OPTIONS } from "../../data/filterOptions";

const FolderBlock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFolderIndex, setSelectedFolderIndex] = useState<number | null>(
    null
  );

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleOpenFolder = (index: number) => {
    setSelectedFolderIndex(index);
    setIsOpen(true);
  };

  const handleCloseFolder = () => {
    setIsOpen(false);
    setSelectedFolderIndex(null);
  };

  console.log("selectedFilter:", selectedFilter);

  const folderData = MOCK_FOLDER_DATA;

  return (
    <div>
      {!isOpen ? (
        <section aria-label="folders section" className="p-[30px] ">
          <div aria-label="filter section" className="mb-[20px] w-fit">
            <Filter
              filters={FILTER_OPTIONS}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {folderData.map((folder, index) => (
              <Folder
                key={index}
                name={folder.name}
                onClick={() => handleOpenFolder(index)}
              />
            ))}
          </div>
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
