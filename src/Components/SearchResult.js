import React, { Component } from "react";
import ArtistCard from "./ArtistCard";
import Loading from "./Loading";
import Error from "./Error";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  componentWillReceiveProps(e) {
    let termino = e.search;
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=357bc03a9067280c3fb6659f9cb3cf21&format=json"
    );
  }

  /* componentDidMount() {
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=thebeatles&api_key=357bc03a9067280c3fb6659f9cb3cf21&format=json"
    );
  } */

  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "lo que trae la api");
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message,
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}

        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((artista, i) => {
              return (
                <ArtistCard
                  img={artista.image[3]["#text"]}
                  titulos={artista.name}
                  key={i}
                />
              );
            })}
          </div>
          <h1> {this.state.search}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
