import React, { Component } from "react";
import "./PageHome.css";
import logo from "./logo.svg";

class PageHome extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/search?" + this.state.search);
  };

  handleClick = (e) => {
    console.log("me pincharon!");
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  state = {
    search: "",
    modal: false,
  };

  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div classname="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form
              className="form-inline"
              name="Form"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <input
                  name="search"
                  type="text"
                  id="buscar"
                  value={this.props.search}
                  placeholder="Busca una banda"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  {" "}
                  Search Similar Artist{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
