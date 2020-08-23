import React from "react";

export default function Footer(props) {
  const children = props.children;
  return (
    <React.Fragment>
      {children}
      <div className="row">
        <div className="col-md-12 centrar">
          <p> Derechos reservados 2020 - Matías Suárez </p>
        </div>
      </div>
    </React.Fragment>
  );
}
