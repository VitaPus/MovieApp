import { Pagination } from "antd";
import "./AntdComponents.css";
import PropTypes from "prop-types";

function PaginationFilms({
  loading,
  filmData,
  totalPages,
  onPageChange,
  search,
  page,
}) {
  const pagination = search ? (
    <div className="Pagination">
      {loading || filmData === null || filmData.length === 0 ? null : (
        <Pagination
          defaultCurrent={page}
          total={totalPages ? totalPages * 10 : 50}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      )}
    </div>
  ) : null;
  return pagination;
}

export default PaginationFilms;

PaginationFilms.defaultProps = {
  loading: false,
  filmData: [],
  totalPages: 1,
  onPageChange: () => {},
  search: true,
  page: 1,
};

Pagination.propTypes = {
  loading: PropTypes.bool,
  filmData: PropTypes.array,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
  search: PropTypes.bool,
  page: PropTypes.number,
};
