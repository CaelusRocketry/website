import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import exports from './../../tailwind.config';

function ContactPage() {
    return (
        <Layout>
            <SEO title="Contact Us!" />
            <div>
                <h2 className="bg-accent text-2xl font-bold inline-block my-3 p-3 text-primary-light">Contact us!</h2>
                <p className="leading-loose my-3">Fill out your information and we will get back to you shortly.</p>
                <label class="block">
                    <span class="text-gray-700">Name</span>
                    <input type="name" class="form-input mt-1 my-5 block w-full" placeholder="John Smith"></input>
                </label>
                <label class="block">
                    <span class="text-gray-700">Email</span>
                    <input type="email" class="form-input mt-1 my-5 block w-full" placeholder="john@example.com"></input>
                </label>
                <label class="block">
                    <span class="text-gray-700">Subject</span>
                    <input type="subject" class="form-input mt-1 my-5 block w-full" placeholder="Hello!"></input>
                </label>
                <label class="block">
                    <span class="text-gray-700">Message</span>
                    <textarea class="form-textarea mt-1 my-5 block w-full" rows="3" placeholder="Say something..."></textarea>
                </label>
                <button className="bg-primary-light p-2">Submit</button>
            </div>
            
        </Layout>
        
    );
}

export default ContactPage;
