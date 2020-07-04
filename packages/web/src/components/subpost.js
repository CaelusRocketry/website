import React from "react";
import { Link } from "gatsby";

const SubPost = (props) => (
  <div class="text-center mr-5 transition duration-500 ease-in-out text-white hover:text-red-600 transform hover:-translate-y-1 hover:scale-105">
    <Link
      to={
        "/blog/" + props.slug
      }
    >
      <div
        style={{
          backgroundColor: "#f1111d",
          borderRadius: 10,
          width: props.children.width,
          height: props.children.height,
        }}
        class="inline-block border-solid border-2 border-black mt-10"
      >
        <div
          style={{
            position: "relative",
            left: 20, // 20
            top: 20, // 20
          }}
          class="border-solid border-2 border-black"
        >
          {props.children}
        </div>
      </div>
      
      <h1 class="font-serif text-3xl text-white-800 text-center mt-5">
        {props.header}
      </h1>
    </Link>
  </div>
);

export default SubPost;
