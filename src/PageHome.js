import React, { Component } from "react";
import "./PageHome.css";
import logo from "./logo.svg";
import ReactDOM from "react-dom";

class PageHome extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };

  handleClick = (e) => {
    console.log("me pincharon");
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
    modal: false,
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="FOrm"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.state.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search Similar Artist
                </button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(<h1> </h1>, document.getElementById("teleport"))}
      </div>
    );
  }
}

export default PageHome;
