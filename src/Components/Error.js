import React from "react";
import "./Loading.css";

export default function Error(props) {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="col-md-12 centrar">
          <h3> Error! {props.errorMensaje}</h3>
        </div>
      </div>
    </React.Fragment>
  );
}
