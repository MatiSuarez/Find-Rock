import React from "react";
import "./ArtistCard.css";

class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <div className="item">
          <img src={this.props.img} alt="" className="pic img-fluid" />
          <p className="titulo"> {this.props.titulo} </p>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
