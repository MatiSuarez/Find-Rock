import React, { Component } from "react";
import "./SearchBar.css";
import logo from "../logo.svg";

class SearchBar extends Component {
  state = {
    busqueda: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name, "Ouch me apretaron");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <img src={logo} alt="" className="logo-barra" />
          </div>
          <div className="col-md-4">
            <form
              className="form-inline"
              name="Form"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
