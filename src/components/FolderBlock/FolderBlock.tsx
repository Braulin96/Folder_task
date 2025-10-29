import { useState, useMemo, useCallback } from "react";
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

  const folderData = useMemo(() => MOCK_FOLDER_DATA, []);

  const openFolder = useCallback((id: number ) => {
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
      {!isOpen ? (
        <section aria-label="folders section" className="p-[30px]">
          <div className="flex flex-wrap gap-[10px]">
            {folderData.map((folder, index) => (
              <Folder
                key={folder.id ?? index} // prefer folder.id if you have one
                id={folder.id ?? index}
                name={folder.name}
                onOpen={openFolder} // ✅ stable reference
              />
            ))}
          </div>
        </section>
      ) : (
        <section className="flex flex-col p-[30px] gap-y-[8px]">
          <div className="flex justify-between">
            <button
              onClick={closeFolder}
              aria-label="back button"
              className="text-[14px] text-gray-200 underline w-fit">
              Back
            </button>

            <Filter
              filters={FILTER_OPTIONS}
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
                        new Date(b.added).getTime() -
                        new Date(a.added).getTime()
                      );
                    default:
                      return 0;
                  }
                })
                .map((file) => (
                  <Files
                    key={file.id ?? file.name}
                    name={file.name}
                    fileType={file.type}
                    dateAdded={file.added}
                  />
                ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default FolderBlock;
