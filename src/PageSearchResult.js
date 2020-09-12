import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import SearchResult from "./Components/SearchResult";

class PageSearchResult extends Component {
  state = {
    search: "",
  };

  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");

    this.setState({
      search: search,
    });
  }

  changeHandle = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar onChange={this.changeHandle} search={this.state.search} />

        <SearchResult search={this.state.search} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
