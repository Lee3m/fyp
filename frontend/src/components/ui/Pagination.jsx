import React from "react";
import "./Pagination.scss";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = [];
  const maxPagesToShow = 5;

  // Determine the range of page numbers to show
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Next and Previous handlers
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <nav
      aria-label="Pagination"
      className="items-center justify-center flex p-5"
    >
      <ul className="pagination flex space-x-2">
        <li>
          <button
            className="p-2"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            Previous
          </button>
        </li>

        {pageNumbers.map((number, index) => (
          <li key={index}>
            <button
              className={`p-2 ${currentPage === number ? "active" : ""}`}
              onClick={() => setCurrentPage(number)}
              aria-current={currentPage === number ? "page" : null}
              aria-label={`Go to page ${number}`}
              tabIndex={0}
            >
              {number}
            </button>
          </li>
        ))}

        <li>
          <button
            className="p-2"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
