import { useState, useMemo, useCallback } from "react";

import Files from "components/Files/Files";
import Folder from "components/Folder/Folder";
import Filter from "components/Filter/Filter";

import { MOCK_FOLDER_DATA } from "data/folderData";
import { FILTER_OPTIONS } from "data/filterOptions";

import PrevArrow from "assets/icons/prev.svg";

const FolderBlock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFolderIndex, setSelectedFolderIndex] = useState<number | null>(
    null
  );
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const folderData = useMemo(() => MOCK_FOLDER_DATA, []);
  const filterOptions = useMemo(() => FILTER_OPTIONS, []);

  const openFolder = useCallback((id: number) => {
    setSelectedFolderIndex(id);
    setIsOpen(true);
  }, []);

  const closeFolder = useCallback(() => {
    setIsOpen(false);
    setSelectedFolderIndex(null);
    setSelectedFilter(null);
  }, []);

  return (
    <div>
      <section
        hidden={isOpen}
        aria-label="folders section"
        aria-hidden={isOpen}
        className="p-[30px]">
        <div className="flex flex-wrap gap-[10px]">
          {folderData.map((folder, index) => (
            <Folder
              key={folder.id ?? index}
              id={folder.id ?? index}
              name={folder.name}
              onOpen={openFolder}
            />
          ))}
        </div>
      </section>

      <section
        hidden={!isOpen}
        aria-hidden={!isOpen}
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col p-[30px] gap-y-[8px]`}>
        <div className="flex justify-between">
          <button
            onClick={closeFolder}
            aria-label="back button"
            className="text-[14px] text-gray-200 underline w-fit group">
            <img
              src={PrevArrow}
              alt="previous arrow"
              className="inline-block size-[14px] mr-[2px] group-hover:translate-x-[-2px] transition-all duration-500"
            />
            <span>Back</span>
          </button>

          <Filter
            filters={filterOptions}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>

        <ul aria-label="files list" className="flex flex-wrap gap-[10px]">
          {selectedFolderIndex !== null &&
            [...folderData[selectedFolderIndex].files]
              .sort((a, b) => {
                switch (selectedFilter) {
                  case "name":
                    return a.name.localeCompare(b.name);
                  case "date":
                    return (
                      new Date(b.added).getTime() - new Date(a.added).getTime()
                    );
                  default:
                    return 0;
                }
              })
              .map((file, index) => (
                <Files
                  delay={0.1 * index}
                  key={file.name}
                  name={file.name}
                  fileType={file.type}
                  dateAdded={file.added}
                />
              ))}
        </ul>
      </section>
    </div>
  );
};

export default FolderBlock;
