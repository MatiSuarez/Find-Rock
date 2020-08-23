import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./PageSearchResult";
import PageHome from "./PageHome";
import PageArtist from "./PageArtist";
import Footer from "./Components/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Footer>
          <Switch>
            <Route exact path="/search" component={PageSearchResult} />
            <Route exact path="/artist" component={PageArtist} />
            <Route exact path="/" component={PageHome} />
          </Switch>
        </Footer>
      </BrowserRouter>
    );
  }
}

export default App;
