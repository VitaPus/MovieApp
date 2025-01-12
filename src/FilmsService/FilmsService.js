import { Component } from "react";

export default class FilmsService extends Component {
  async getFilms(label, page) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${label}&api_key=f60cbcfc2b1e196f75cd61f820d1232a&page=${page}`
    );
    const res1 = await res.json();
    return [res1.results, res1.total_pages, res1.total_results, res1.page];
  }

  async guestSession() {
    const res = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=f60cbcfc2b1e196f75cd61f820d1232a"
    );
    const res1 = await res.json();
    return res1.guest_session_id;
  }

  async getGenres() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjBjYmNmYzJiMWUxOTZmNzVjZDYxZjgyMGQxMjMyYSIsIm5iZiI6MTczNDYwMTU2NC44NzYsInN1YiI6IjY3NjNlYjVjMGU5ZGMzMjgyY2FiMDNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gegOs93rdE1yZVqVc4THPlMRKGLgBWMLZ9LkIXn2F_o",
      },
    };
    const res = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    );
    const res1 = await res.json();
    return res1;
  }

  async addRating(id, value, session) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=f60cbcfc2b1e196f75cd61f820d1232a&guest_session_id=${session}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ value }),
      }
    );
    const res1 = await res.json();
    console.log(res1);
    return res1;
  }

  async getRating(session) {
    const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${session}/rated/movies?api_key=f60cbcfc2b1e196f75cd61f820d1232a`
    );
    const res1 = await res.json();
    console.log(res1);
    return res1;
  }
}
