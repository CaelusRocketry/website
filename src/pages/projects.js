import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function ProjectsPage() {
    return (
        <Layout>
            <SEO title="Projects" />
            <div>
                <h3 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Static Engine Test</h3>
                <p className="leading-loose">Statistics</p>
                <p className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Aphlex 1A</p>
                <p className="leading-loose">Statistics</p>
                <h3 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Callisto 1</h3>
                <p className="leading-loose">Statistics</p>                
                <h2 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Callisto 2</h2>
                <p className="leading-loose">Statistics</p>
                <h2 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Callisto 3</h2>
            </div>
        </Layout>
    );
}

export default ProjectsPage;
