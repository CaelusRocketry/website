import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="font-sans bg-primary-dark text-primary-light flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col">
        <Header className="flex-shrink-0" />
        <main id="main">{children}</main>
      </div>

      <div className="pin-b">{/* <Footer /> */}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
