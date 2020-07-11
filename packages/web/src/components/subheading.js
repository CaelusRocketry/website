import React from "react";

const Subheading = (props) => (
  <div
    style={{
      padding: 20,
      borderRadius: 10,
      margin: 5,
    }}
    className="inline-block"
  >
    <h1
      style={{
        fontSize: "50px",
        fontWeight: 300,
        textAlign: "center",
        padding: 10,
      }}
    >
      {" "}
      --- {props.heading} ---{" "}
    </h1>
    <p className="container mx-auto" style={{ textAlign: "center" }}>
      {" "}
      {props.children}{" "}
    </p>
  </div>
);

export default Subheading;
