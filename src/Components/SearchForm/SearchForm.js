import { Input } from "antd";
import PropTypes from "prop-types";

function SearchForm({ onLabelChange, label, search }) {
  const form = search ? (
    <div className="search-form">
      <Input
        placeholder="Search films"
        autoFocus
        onChange={onLabelChange}
        value={label}
      />
    </div>
  ) : null;

  return form;
}

export default SearchForm;

SearchForm.defaultProps = {
  onLabelChange: () => {},
  label: "qwe",
  search: true
}

SearchForm.propTypes = {
  onLabelChange: PropTypes.func,
  label: PropTypes.string,
  search: PropTypes.bool
}


