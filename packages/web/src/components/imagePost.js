import React from "react";
import { Link } from "gatsby";
import converter from "./dateconverter";

// ref: https://wdexplorer.com/20-examples-beautiful-css-typography-design/

const ImagePost = (props) => {
  return (
    <div class="text-center w-full flex items-start transition duration-500 ease-in-out text-white hover:text-red-600 transform hover:-translate-y-1 hover:scale-95">
      <Link
        to={"/blog/" + props.slug}
        class="inline-block w-2/5"
      >
        <div
          style={{
            backgroundColor: "#f1111d",
            padding: 0,
            borderRadius: 10,
            margin: 5,
            width: "80%",
          }}
          class="inline-block border-solid border-2 border-black"
        >
          <div
            style={{
              position: "relative",
              left: 20,
              top: 20,
            }}
            class="border-solid border-2 border-black"
          >
            {props.children}
          </div>
        </div>
      </Link>
      <div class="inline-block w-2/5" style={{ wordWrap: "break-word" }}>
        <Link to={"/blog/" + props.slug}>
          <h1 class="font-serif text-3xl text-white-800 text-center mb-2">
            {props.header}<br/>
            <div class="text-2xl">By: Project Caelus</div>
            <div class="text-2xl">- {converter(props.date)}</div>
          </h1>

          <p class="justify-center mx-10 mt-5 text-lg">
            {props.desc}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ImagePost;
