import React, { Component } from "react";
import "./PageHome.css";
import logo from "./logo.svg";

class PageHome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div classname="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form className="form" name="Form" onSubmit={this.handleSubmit}>
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
              <div className="actions">
                <button className="btng"> Search Similar Artist </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
