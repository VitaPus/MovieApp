import { Component } from "react";
import { Tabs } from "antd";
import PropTypes from "prop-types";

export default class RatedButtons extends Component {
  onChange = (key) => {
    if (key === "1") this.props.Search();
    if (key === "2") this.onRatedClick();
  };

  onRatedClick = () => {
    this.props.Rated();
    this.props.getRatedFilms();
  };

  render() {
    const items = [
      {
        key: "1",
        label: `Search`,
      },
      {
        key: "2",
        label: `Rated`,
      },
    ];
    return (
      <div className="tabs">
        <Tabs defaultActiveKey="1" items={items} onChange={this.onChange} />
      </div>
    );
  }
}

RatedButtons.defaultProps = {
  Search: () => {},
  Rated: () => {},
  getRatedFilms: () => {}
}

RatedButtons.propTypes = {
  Search: PropTypes.func,
  Rated: PropTypes.func,
  getRatedFilms: PropTypes.func,
}
