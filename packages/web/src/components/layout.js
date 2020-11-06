import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiGofundme } from "react-icons/si";

import Logo from "../../static/brand/banner/banner_W-B.svg";

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-transparent z-10">
      <div className="flex flex-wrap items-center justify-between max-w-5xl mx-auto p-4 md:p-8">
        <Link className="flex items-center no-underline text-white" to="/">
          <img src={Logo} className="mr-4 h-10 md:py-0 py-1" />
          <p className="font-bold text-xl tracking-tight whitespace-no-wrap md:block hidden">
            Project Caelus
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
              route: "/projects",
              title: "Projects",
            },
            {
              route: "/blog",
              title: "Blog",
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
            {
              route: `/outreach`,
              title: `Outreach`,
            },
          ].map((link) => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <div className="w-full p-8">
    <div className="container text-center mx-auto">
      <p className="mb-4">
        Project Caelus | Copyright © 2018-{new Date().getFullYear()}. All rights
        reserved.
      </p>
      <div className="flex justify-center">
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
        <a href="https://www.gofundme.com/f/project-caelus">
          <SiGofundme className="transition opacity-75 hover:opacity-100 text-2xl mx-2" />
        </a>
      </div>
    </div>
  </div>
);

function Layout({ children }) {
  return (
    <div className="font-sans bg-primary-dark text-primary-light flex flex-col min-h-screen">
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
