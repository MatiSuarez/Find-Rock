import React, { Component } from "react";
import ArtistCard from "./ArtistCard";

class SearchResult extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.artist.map((artista, i) => {
              return (
                <ArtistCard
                  img={artista.image[3]["#text"]}
                  titulos={artista.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
