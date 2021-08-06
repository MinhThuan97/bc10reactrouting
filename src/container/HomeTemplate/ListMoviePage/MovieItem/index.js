import React, { Component } from "react";

export default class MovieItem extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <img className="card-img-top" src="holder.js/100x180/" alt />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
          </div>
        </div>
      </div>
    );
  }
}
