import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "60px",
        height: "60px",
        margin: "auto",
        display: "block",
        color: "#CB1A80",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}
