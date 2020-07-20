import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <div className="w-full mx-auto text-center">
        <h2 className="bg-yellow-400 text-primary-dark text-2xl font-bold inline-block my-8 p-3">
          Not found.
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
