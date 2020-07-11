import React from "react";
import BackgroundImg from "gatsby-background-image";
const BlockContent = require("@sanity/block-content-to-react");

const Event = props =>
  props.data.map(event => (
    <section className="flex flex-col bg-primary-dark justify-center">
      <h1
        style={{
          fontSize: "50px",
          fontWeight: 300,
          textAlign: "center",
          padding: 10,
          marginTop: 50
        }}
      >
        --- {event.title} ---
      </h1>
      <section class="flex container max-w-5xl mx-auto">
        <div
          class="flex-auto container md:w-1/2 justify-center"
          style={{ margin: 5 }}
        >
          <div className="body" style={{ textAlign: "left" }}>
            <BlockContent blocks={event.description} />
          </div>
        </div>
        <div
          class="flex-auto container md:w-1/2 justify-center"
          style={{ margin: 10 }}
        >
          <BackgroundImg
            fluid={event.image.asset.fluid}
            className="md:mt-0 -mt-16"
            style={{
              height: "100%",
              width: "100%",
              backgroundSize: "contain"
            }}
          />
        </div>
      </section>
    </section>
  ));

export default Event;
