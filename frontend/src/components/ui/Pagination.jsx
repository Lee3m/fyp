import React from "react";
import "./Pagination.scss";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="items-center justify-center flex p-5">
      <ul className="pagination">
        {pageNumbers.map((number, index) => (
          <button
            key={index}
            className={`p-2 ${currentPage === number ? "active" : ""}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
