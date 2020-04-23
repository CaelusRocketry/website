import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function BlogPage() {
    return (
        <Layout>
            <SEO title="Blog" />
            <div>
                <h2 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Blog</h2>
            </div>
        </Layout>
    );
}

export default BlogPage;
