import "./pagination.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { MdSecurityUpdateGood } from "react-icons/md";

const Pagination = ({ page, totalPages, pageChangePrev, pageChangeNext }) => {
  return (
    <>
      <div className="pagination-container">
        <div className="pagination">
          <div className="pagination-pages-container">
            Page &nbsp;
            {page + 1}
            <span>&nbsp; of &nbsp;</span>
            {totalPages}
          </div>
          <div className="pagination-btns">
            <div className="pagination-prev-btn" onClick={pageChangePrev}>
              <FiChevronLeft />
            </div>
            <div className="pagination-next-btn" onClick={pageChangeNext}>
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
