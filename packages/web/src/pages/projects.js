import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Subheading from "../components/subheading";
import Img from "gatsby-image"

function ProjectsPage({data}) {
    return (
        <Layout>
            <SEO title="Projects" />


            <section className="flex flex-col bg-primary-dark justify-center">
                <Subheading heading="Projects in the Works"></Subheading>

                <h1 class="font-serif text-3xl text-white-800 text-center mb-2"> {data.posts.nodes[6].title}</h1>
                <p className="container mx-auto" style={{ textAlign: 'center'}} >{data.posts.nodes[6].description}</p>
                <br></br><br></br>

                <h1 class="font-serif text-3xl text-white-800 text-center mb-2"> {data.posts.nodes[7].title} </h1>
                <p className="container mx-auto" style={{ textAlign: 'center'}} >{data.posts.nodes[7].description}</p>


                <Subheading heading="Projects for the Future"></Subheading>

                <section class='flex'>
                {[9, 10, 8].map((index) => (
                    <div class='flex-auto w-full md:w-1/3 justify-center' style={{ padding: 20, margin: 30}}>
                        <h1 class="font-serif text-3xl text-white-800 text-center mb-2"> {data.posts.nodes[index].title}</h1>
                        {index === 9 && <Img fixed={data.posts.nodes[index].image.asset.fixed} fadeIn={true}/>}
                        <p className="container mx-auto" style={{ textAlign: 'center'}} >{data.posts.nodes[index].description}</p>
                    </div>

                ))}
                </section>

                <div>
                  {/* <h3 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Static Engine Test</h3>
                  <p className="leading-loose">Statistics</p> */}
                  <p className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Aphlex 1A</p>
                  <p className="leading-loose">Statistics</p>
                  <h3 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Callisto 1</h3>
                  <p className="leading-loose">Statistics</p>                
                  <h2 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Callisto 2</h2>
                  <p className="leading-loose">Statistics</p>
                  {/* <h2 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Callisto 3</h2> */}
                 </div>

            </section>
            
        </Layout>
    );
}

export default ProjectsPage;

export const query = graphql`
  query {
    posts: allSanityPost {
      nodes {
        title
        description
        image {
          asset {
            fluid(maxWidth: 10) {
              ...GatsbySanityImageFluid
            }
            fixed(width: 300, height: 200) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
