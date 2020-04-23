import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
    return (
        <Layout>
            <SEO title="About Us" />
            <div>
                <h2 className="bg-secondary-light text-2xl font-bold inline-block my-8 p-3">Our team</h2>
            </div>
        </Layout>
    );
}

export default AboutPage;
