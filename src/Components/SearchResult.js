import React, { Component } from "react";
import ArtistCard from "./ArtistCard";

class SearchResult extends Component {
  state = {
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  componentDidMount() {
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=thebeatles&api_key=357bc03a9067280c3fb6659f9cb3cf21&format=json"
    );
  }

  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((artista, i) => {
              return (
                <ArtistCard
                  img={artista.image[2]["#text"]}
                  titulos={artista.name}
                  key={i}
                />
              );
            })}
          </div>
          <h1> {this.state.busqueda}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
