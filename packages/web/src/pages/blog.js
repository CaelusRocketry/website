import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from "../components/post";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />

    <div style={{ textAlign: "center" }}>
      <h2 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">
        Blog
      </h2>
    </div>

    <Post header="Programming is awesome">
      Yo, we've been doing some crazy stuff!
    </Post>
  </Layout>
);

export default BlogPage;
