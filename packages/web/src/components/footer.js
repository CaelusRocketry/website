import React from "react";
import {
  // FaRegCopyright,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "gatsby";

const Footer = (props) => (
  <div>

    
<br></br><br></br><br></br>
      <hr style= {{border: "1px solid"}} />
      <br></br><br></br>

    <div className="flex flex-wrap">


      <div className="w-full md:w-1/2 justify-center">
        <Link to="/contact">
          {" "}
          <p style={{ textAlign: "center", fontSize: "25px" }}>
            {" "}
            Contact us
          </p>{" "}
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex text-lg justify-center">
        <a href="https://www.facebook.com/projectcaelus">
          {" "}
          <FaFacebook size="50px" style={{ margin: "0 15px" }} />{" "}
        </a>
        <a href="https://www.instagram.com/project.caelus">
          {" "}
          <FaInstagram size="50px" style={{ margin: "0 15px" }} />{" "}
        </a>
        <a href="https://www.youtube.com/channel/UCmEHZ7KGBH_jcsugP_SLY8w">
          {" "}
          <FaYoutube size="50px" style={{ margin: "0 15px" }} />{" "}
        </a>
        <a href="https://www.linkedin.com/company/projectcaelus">
          {" "}
          <FaLinkedin size="50px" style={{ margin: "0 15px" }} />{" "}
        </a>
      </div>
    </div>

    <br></br>

    <div>
      <p
        className="container mx-auto justify-center"
        style={{ textAlign: "center" }}
      >
        Project Caelus | Copyright 2018
      </p>
    </div>

    <br></br>
  </div>
);

export default Footer;
