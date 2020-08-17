import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import ArtistCard from "./Components/ArtistCard";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <div className="container">
          <div className="row">
            <ArtistCard
              img="https://www.enter.co/wp-content/uploads/2018/08/The-Beatles-1-300x300.jpg"
              titulo="The Beatles"
            />
            <ArtistCard
              img="https://i.pinimg.com/originals/a2/ed/46/a2ed464f355ece92e971f26238902726.jpg"
              titulo="The Who"
            />
            <ArtistCard
              img="https://www.cranford.com/wp-content/uploads/2017/11/rollingstones-300x300.jpg"
              titulo="The Rolling Stones"
            />
            <ArtistCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbPIvFYtK-XT7Zfwgl_Dg-c7DO_7J1HEwwzw&usqp=CAU"
              titulo="Led Zeppelin"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
