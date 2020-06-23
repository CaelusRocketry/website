import React from 'react';
import BackgroundImage from "gatsby-background-image";

import Layout from '../components/layout';
import SEO from '../components/seo';
import Subheading from "../components/subheading";
import Statistics from "../components/statistics";

function ProjectsPage({data}) {
    return (
        <Layout>
            <SEO title="Projects" />


            <section className="flex flex-col bg-primary-dark justify-center">

                <Subheading heading="Projects in the Works"></Subheading>
                <section class='flex mb-4 container mx-auto'>
                {[2, 3].map((index) => (
                    <div class='flex-auto w-full md:w-1/3 justify-center' style={{ padding: 20, margin: 30}}>
                        <h1 class="font-serif text-3xl text-white-800 text-center mb-2"> {data.posts.nodes[index].title}</h1>
                        <p className="container mx-auto" style={{ textAlign: 'center'}} >{data.posts.nodes[index].description}</p>
                    </div>
                ))}
                </section>


                <Subheading heading="Projects for the Future"></Subheading>
                <BackgroundImage
                  fluid={data.file.childImageSharp.fluid}
                  className="md:mt-0 -mt-16"
                  style={{
                    height: "55vh",
                    width: "100%",
                    backgroundSize: "contain",
                  }}
                /><br></br><br></br>
                <section class='flex mb-4 container mx-auto'>
                {[9, 10, 4].map((index) => (
                    <div class='w-full md:w-1/3 justify-center' style={{ padding: 10, margin: 15}}>
                        <h1 class="font-serif text-3xl text-white-800 text-center mb-2"> {data.posts.nodes[index].title}</h1>
                        <p className="" style={{ textAlign: 'center'}} >{data.posts.nodes[index].description}</p>
                    </div>
                ))}
                </section>

                <div>
                  {/* const rows = ['Engine', 'Thrust', 'Propellants', 'Specific impulse', 'Burn time', 'Feed system', 'Cooling system', 'ignition source', 'Recovery system', 'Altitude', 'Max speed']; */}

                  <p className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Aphlex 1A</p>
                  <Statistics data = {["", "1000 N (225 lbs.)", "Gaseous oxygen, isopropanol", "205 sec", "	10 sec", "Helium blowdown", "Aluminium heat sink", "Spark plug", "", "", ""]} > </Statistics>

                  <h3 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Callisto I</h3>
                  <Statistics data = {["Aphlex 5A", "5000 N (1124 lbs.)", "Liquid methane, liquid oxygen", "242 sec", "43 sec", "Helium blowdown", "Regenerative & film cooling", "Pyrotechnic charge", "Dual-deploy parachutes", "12 km (7.5 miles)", "480 m/s (1073 mph)"]} > </Statistics>

                  <h2 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Callisto II</h2>
                  <Statistics data = {["Aphlex 30A", "~40 kN (9000 lbs.)", "Liquid methane, liquid oxygen", "280 sec", "~70 sec", "Helium DPR", "Regenerative & film cooling", "Pyrotechnic charge", "", "48 km (30 miles)", "1300 m/s (2910 mph)"]} > </Statistics>

                </div>

            </section>
            
        </Layout>
    );
}

export default ProjectsPage;

export const query = graphql`
  query {    
    file(relativePath: { eq: "infographic.png" }) {
      childImageSharp {
          fluid {
          ...GatsbyImageSharpFluid
          }
      }
    },
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
