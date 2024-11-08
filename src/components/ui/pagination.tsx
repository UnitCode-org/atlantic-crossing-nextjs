import { ArrowDown2 } from "iconsax-react";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  itemsPerPage: number;
  pageCount: number;
  currentPage: number;
  options: number[];
  dataCount: number;
  handleItemsPerPageChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handlePageClick: (event: { selected: number }) => void;
};

function Pagination({
  itemsPerPage,
  pageCount,
  currentPage,
  options,
  dataCount,
  handleItemsPerPageChange,
  handlePageClick,
}: PaginationProps) {
  return (
    <div className="pagination-container">
      <div>
        <label>Showing </label>
        <div className="pagination-select">
          <select
            id="itemsPerPage"
            value={itemsPerPage > dataCount ? dataCount : itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            <option value={dataCount}>All</option>
          </select>
          <ArrowDown2
            size="14"
            className="pagination-select-arrow"
            color="#525254"
          />
        </div>
        <label> of {dataCount}</label>
      </div>
      <ReactPaginate
        key={itemsPerPage}
        breakLabel={null}
        nextLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width={16}
            height={16}
            fill="currentColor"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        }
        pageRangeDisplayed={currentPage === 1 ? 2 : 3}
        forcePage={currentPage}
        marginPagesDisplayed={0}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width={16}
            height={16}
            fill="currentColor"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        }
        renderOnZeroPageCount={null}
        className="pagination-control"
      />
    </div>
  );
}

export default Pagination;
