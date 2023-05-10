import { useCallback } from "react";
import { ItemsList } from "./ItemsList";

const MainContent = ({
  currentPage,
  setCurrentPage,
  nbPages,
  data,
  setData,
}) => {
  const handlePrevButton = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage, setCurrentPage]);

  const handleNextButton = useCallback(() => {
    if (currentPage < nbPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, nbPages, setCurrentPage]);

  const handleRemove = useCallback(
    (todoId) => {
      const itemsClone = structuredClone(data);

      itemsClone?.hits?.forEach((item) => {
        if (todoId === item.objectID) {
          itemsClone.hits.splice(itemsClone.hits.indexOf(item), 1);
        }
      });
      setData(itemsClone);
    },
    [data, setData]
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <div>
        <button
          onClick={handlePrevButton}
          className="px-4 py-1 bg-[#49a6e9] text-sm rounded m-8 text-white font-bold tracking-widest"
        >
          Prev
        </button>

        <span className="font-bold text-lg text-[#324d67]">
          {currentPage + 1} of {nbPages}
        </span>

        <button
          onClick={handleNextButton}
          className="px-4 py-1 bg-[#49a6e9] text-sm rounded m-8 text-white font-bold tracking-widest"
        >
          Next
        </button>
      </div>
      <div className="w-full">
        <ItemsList data={data} onClick={handleRemove} />
      </div>
    </div>
  );
};

export default MainContent;
