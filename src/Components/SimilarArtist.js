import React, { Component } from "react";
import ArtistCard from "./ArtistCard";

class SimilarArtist extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-12 margenes50">
          <h4> Similar Artist</h4>
          <hr />
        </div>

        <div className="row">
          <div className="col-md-3">
            <ArtistCard
              img="https://place-hold.it/350x350"
              titulo="Test Loco"
            />
          </div>
          <div className="col-md-3">
            <ArtistCard
              img="https://place-hold.it/350x350"
              titulo="Test Loco"
            />
          </div>
          <div className="col-md-3">
            <ArtistCard
              img="https://place-hold.it/350x350"
              titulo="Test Loco"
            />
          </div>
          <div className="col-md-3">
            <ArtistCard
              img="https://place-hold.it/350x350"
              titulo="Test Loco"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
