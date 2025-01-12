import NetWorkAlert from "../../AntdComponents/Alert";
import PropTypes from "prop-types";

function NetWork({ onNetworkState, internet }) {
  window.onoffline = () => {
    onNetworkState();
  };
  window.ononline = () => {
    onNetworkState();
  };

  return internet ? null : (
    <div className="offlineAlert">
      <NetWorkAlert />
    </div>
  );
}
export default NetWork;

NetWork.defaultProps = {
  onNetworkState: () => {},
  internet: true
}

NetWork.propTypes = {
  onNetworkState: PropTypes.func,
  internet: PropTypes.bool
}
