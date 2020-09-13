import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./PageSearchResult";
import PageHome from "./PageHome";
import PageArtist from "./PageArtist";
import Layout from "./Components/Layout";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult} />
            <Route exact path="/artista" component={PageArtist} />
            <Route exact path="/" component={PageHome} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
