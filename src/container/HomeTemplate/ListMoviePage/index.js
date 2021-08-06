import React, { Component } from "react";
import MovieItem from "./MovieItem";

export default class ListMoviePage extends Component {
  render() {
    return (
      <div>
        <h3>ListMoviePage</h3>
        <div className="row">
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </div>
      </div>
    );
  }
}
