import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Subheading from "../components/subheading";

const Subheading = (props) => (
  <div
      style={{

          padding: 20,
          borderRadius: 10,
          margin: 50,
      }}
      className='inline-block'
  >
      <h1 style={{ 
          fontSize: '50px',
          fontWeight: 300,
          textAlign: 'center',
          padding: 10
       }}>
      --- {props.heading} --- </h1>
      <div className="flex flex-col mx-auto">
        <p style={{ textAlign: 'left'}}> {props.children}</p>
        
      </div>
      

  </div>
)

function OutreachPage({ data }) {
  return (
    <Layout>
      <SEO title="Outreach" />
    
      <section className="flex flex-col bg-primary-dark justify-center">
        {/* <Subheading heading={data.posts.nodes[4].title}>{data.posts.nodes[4].description}</Subheading> */}
        <Subheading heading={data.posts.nodes[4].title}>
            <p>Seeing as all schools in Virginia are closed amidst the global pandemic, it is crucial all of us students.</p>
        </Subheading>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "team.jpg" }) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    },
    posts: allSanityPost {
      nodes {
        title
        description
      }
    }
  }
`;

export default OutreachPage;
