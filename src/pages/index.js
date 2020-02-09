import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
    return (
        <Layout>
            <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="Home" />

            <section className="text-left font-sans">
                <h2 className="bg-accent text-2x1 font-bold inline-block my-5 p-3 text-primary-light">
                    Hey There! Welcome to our website.
                </h2>

                <p className="leading-loose">
                    This is a barebones starter for Gatsby styled using{` `}
                    <a className="font-bold no-underline text-black-900" href="https://tailwindcss.com/">
                        Tailwind
                    </a>
                    , a utility-first CSS framework.
                </p>
            </section>
        </Layout>
    );
}

export default IndexPage;
