import React from "react";

import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div className="d-flex gap-2 fs-3 align-items-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="m-0">Loading...</p>
    </div>
  );
}

export default Loader;
