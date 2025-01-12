import { Component } from "react";
import "./FilmList.css";
import Film from "../Film/Film";
import Loader from "../../AntdComponents/Loader";
import { FilmDataConsumer } from "../../FilmsService/Film-context";
import PropTypes from "prop-types";

export default class FilmList extends Component {
  render() {
    const films = this.props.loading ? (
      <div className="loader">
        <Loader />
      </div>
    ) : (
      <FilmDataConsumer>
        {(val) => {
          return (
            <Film
              filmData={this.props.filmData}
              search={this.props.search}
              ratedFilms={this.props.ratedFilms}
              genres={val}
              addRating={this.props.addRating}
              guest_id={this.props.guest_id}
            />
          );
        }}
      </FilmDataConsumer>
    );
    const results =
      this.props.totalResults !== null && this.props.loading === false ? (
        <div className="foundFilms"></div>
      ) : null;
    return (
      <>
        {this.props.search ? results : null}
        {films}
      </>
    );
  }
}

FilmList.defaultProps = {
  loading: false,
  filmData: [],
  search: true,
  ratedFilms: () => {},
  addRating: () => {},
  guest_id: 1,
  totalResults: 0,
}

FilmList.propTypes = {
  loading: PropTypes.bool,
  filmData: PropTypes.array,
  search: PropTypes.bool,
  ratedFilms: PropTypes.func,
  addRating: PropTypes.func,
  guest_id: PropTypes.number,
  totalResults: PropTypes.number,
}
