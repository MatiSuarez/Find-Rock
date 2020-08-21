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
                  img={artista.image}
                  titulos={artista.name}
                  key={i}
                />
              );
            })}

            {/*<ArtistCard
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
            /> */}
            <h1>{this.props.busqueda}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
