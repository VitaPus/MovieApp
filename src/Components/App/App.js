import { Component } from "react";
import debounce from "lodash.debounce";
import FilmList from "../FilmList/FilmList";
import SearchForm from "../SearchForm/SearchForm";
import FilmsService from "../../FilmsService/FilmsService";
import NetWork from "../NetWork/NetWork";
import PaginationFilms from "../../AntdComponents/Pagination";
import { FilmDataProvider } from "../../FilmsService/Film-context";
import RatedButtons from "../RatedButtons/RatedButtons";

export default class App extends Component {
  FilmsService = new FilmsService();

  state = {
    label: "",
    totalPages: null,
    totalResults: null,
    filmData: null,
    loading: false,
    internet: true,
    page: 1,
    genres: null,
    guest_id: null,
    search: true,
    ratedFilms: [],
  };

  componentDidMount() {
    this.FilmsService.guestSession().then((res) =>
      this.setState({ guest_id: res })
    );
    this.FilmsService.getGenres().then((genre) => {
      this.setState({ genres: genre });
    });
  }

  Search = () => {
    this.setState({ search: true });
  };

  Rated = () => {
    this.setState({ search: false });
  };

  addFilms = debounce(() => {
    this.FilmsService.getFilms(this.state.label, this.state.page).then(
      ([arr, pages, results, page]) => {
        this.setState({
          filmData: arr,
          loading: false,
          totalPages: pages,
          totalResults: results,
          page: page,
        });
      }
    );
  }, 500);

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
      loading: true,
      page: 1,
    });
    let strArr = e.target.value.split("");
    if (strArr[0] !== " " && strArr[strArr.length - 1] !== " ") {
      this.addFilms();
    } else {
      this.setState({
        loading: false,
      });
    }
  };

  onNetworkState = () => {
    this.setState(({ internet }) => {
      return {
        internet: !internet,
      };
    });
  };

  onPageChange(pageN) {
    this.setState({
      page: pageN,
    });
    this.addFilms();
    this.getRatedFilms();
    console.log(this.state.page);
  }

  getRatedFilms = () => {
    this.FilmsService.getRating(this.state.guest_id).then((arr) => {
      this.setState({ ratedFilms: arr.results });
    });
  };

  render() {
    return (
      <>
        <FilmDataProvider value={this.state.genres}>
          <RatedButtons
            getRatedFilms={this.getRatedFilms}
            Search={this.Search}
            Rated={this.Rated}
          />
          <SearchForm
            search={this.state.search}
            onLabelChange={this.onLabelChange}
            label={this.state.label}
          />
          <NetWork
            onNetworkState={this.onNetworkState}
            internet={this.state.internet}
          />
          <FilmList
            search={this.state.search}
            ratedFilms={this.state.ratedFilms}
            guest_id={this.state.guest_id}
            addRating={this.FilmsService.addRating}
            session={this.state.session}
            filmData={this.state.filmData}
            loading={this.state.loading}
            totalResults={this.state.totalResults}
          />
          <PaginationFilms
            page={this.state.page}
            search={this.state.search}
            loading={this.state.loading}
            filmData={this.state.filmData}
            totalPages={this.state.totalPages}
            onPageChange={this.onPageChange.bind(this)}
          />
        </FilmDataProvider>
      </>
    );
  }
}
