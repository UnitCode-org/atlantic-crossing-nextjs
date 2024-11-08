import { useCallback, useEffect, useMemo, useState } from "react";

function usePagination<T>(data: T[], defaultItemsPerPage: number = 5) {
  const [paginatedData, setPaginatedData] = useState<T[] | null>(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  const options = useMemo(
    () =>
      [5, 10, 15, 20, 25, 50, 100, data.length].filter(
        (option) => option < data.length
      ),
    [data]
  );

  useEffect(() => {
    setItemOffset(0);
    setCurrentPage(0);
    setItemsPerPage(defaultItemsPerPage);
  }, [data, defaultItemsPerPage]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPaginatedData(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = useCallback(
    (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
      setCurrentPage(event.selected);
    },
    [data, itemsPerPage]
  );

  const handleItemsPerPageChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newItemsPerPage = parseInt(event.target.value);
      setItemsPerPage(newItemsPerPage);
      setItemOffset(0);
      setCurrentPage(0);
    },
    []
  );

  return {
    paginatedData,
    itemOffset,
    options,
    currentPage,
    pageCount,
    itemsPerPage,
    handleItemsPerPageChange,
    handlePageClick,
  };
}

export default usePagination;
