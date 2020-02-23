import React, { Component } from "react";
import ApiServices from "../API/Index";

class MovieList extends Component {
  // constructor(props){
  //   super(props);
  //
  // }

  componentDidMount() {
    ApiServices.getAvengerList()
      .then(res => {
        console.log("getAvengerList res", res);
      })
      .catch();
  }

  render() {
    return (
      <div>
        <h2> Movie Component </h2>
      </div>
    );
  }
}
export default MovieList;
