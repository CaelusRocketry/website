import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import exports from './../../tailwind.config';

function ContactPage() {
    return (
        <Layout>
            <SEO title="Contact Us!" />
            <div>
                <h2 className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">Fill out your information below and we will get back to you shortly.</h2>
            </div>
        </Layout>
    );
}

export default ContactPage;
