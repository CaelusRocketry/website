import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

import Logo from "../../static/brand/banner/banner_COLOR-W-T.png";

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-primary-dark z-10">
      <div className="flex flex-wrap items-center justify-between max-w-5xl mx-auto p-4 md:p-8">
        <Link className="flex items-center no-underline text-white" to="/">
          <img src={Logo} className="mr-4 h-10 md:py-0 py-1" />
          <p className="font-bold text-xl tracking-tight whitespace-no-wrap md:block hidden">
            Caelus Rocketry
          </p>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
          style={{textAlign: "center"}}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/sponsors`,
              title: `Sponsors`,
            },
            {
              route: "/projects",
              title: "Projects",
            },
            {
              route: `/outreach`,
              title: `Outreach`,
            },
            {
              route: "/blog",
              title: "Blog",
            },
            // {
            //   route: `/contact`,
            //   title: `Contact`,
            // },
          ].map((link) => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          <div style={{marginLeft: isExpanded ? `0` : `30px`}}>
            <a 
              className="transition opacity-75 hover:opacity-100 p-2 border-4 border-secondary-light"
              style={{
                textAlign: "center", 
                borderRadius: "10px",
                borderColor: "white", 
                color: "white", 
                fontSize: "15px", 
                display: "block",
                margin: "10px auto",
                border: "10px",
                width: "90px",
                backgroundColor: "red",
                fontWeight: "bolder"

              }}
              href="https://www.gofundme.com/f/support-project-caelus-hs-liquid-fueled-rocket"
              target="_blank" rel="noreferrer"
            >
              Donate
            </a>
          </div>

        </nav>

      </div>
    </header>
  );
};

const Footer = () => (
  <div className="w-full p-8">
    <div className="container text-center mx-auto text-black">
      <p className="mb-4">
        Caelus Rocketry | Copyright © 2018-{new Date().getFullYear()}. All rights
        reserved.
      </p>
      <div className="flex justify-center mb-4">
        <a href="https://www.facebook.com/projectcaelus">
          <FaFacebook className="transition opacity-75 hover:opacity-100 text-2xl mx-2" />
        </a>
        <a href="https://www.instagram.com/project.caelus">
          <FaInstagram className="transition opacity-75 hover:opacity-100 text-2xl mx-2" />
        </a>
        <a href="https://www.youtube.com/channel/UCmEHZ7KGBH_jcsugP_SLY8w">
          <FaYoutube className="transition opacity-75 hover:opacity-100 text-2xl mx-2" />
        </a>
        <a href="https://www.linkedin.com/company/projectcaelus">
          <FaLinkedin className="transition opacity-75 hover:opacity-100 text-2xl mx-2" />
        </a>
      </div>
      <p>
        <a href="mailto:contact@caelusrocketry.org">contact@caelusrocketry.org</a>
      </p>
    </div>
  </div>
);

function Layout({ children }) {
  return (
    <div className="font-sans bg-primary-light text-primary-light flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col">
        <Header className="flex-shrink-0" />
        <main id="main" className="text-lg leading-relaxed py-2">
          {children}
        </main>
      </div>

      <div className="pin-b">
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
