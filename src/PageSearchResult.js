import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import SearchResult from "./Components/SearchResult";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;