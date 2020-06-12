import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import exports from './../../tailwind.config';

const ContactPage = () => (
    <Layout>
        <SEO title="Contact Us!" />
        <div>
            <h2 className="bg-accent text-2xl font-bold inline-block my-3 p-3 pr-4 text-primary-light">Contact us!</h2>
            <p className="leading-loose my-3 w-3/4">Fill out your information and we will get back to you shortly.</p>

            <form action="https://getform.io/f/1225c972-e2eb-4f91-b241-b0da2c03980f" method="POST">
                <label class="block">
                    <span class="text-gray-300 flex justify-center">Name</span>
                    <span class="flex justify-center"><input type="name" class="form-input mt-1 my-5 block w-1/3" placeholder="John Smith"></input></span>
                </label>
                <label class="block">
                    <span class="text-gray-300 flex justify-center">Email</span>
                    <span class="flex justify-center"><input type="email" class="form-input mt-1 my-5 block w-1/3" placeholder="john@example.com"></input></span>
                </label>
                <label class="block">
                    <span class="text-gray-300 flex justify-center">Subject</span>
                    <span class="flex justify-center"><input type="subject" class="form-input mt-1 my-5 block w-1/3" placeholder="Hello!"></input></span>
                </label>
                <label class="block">
                    <span class="text-gray-300 flex justify-center">Message</span>
                    <span class="flex justify-center"><textarea class="form-textarea mt-1 my-5 block w-1/3" rows="6" placeholder="Enter your message"></textarea></span>
                </label>
                <span class="flex justify-center"><button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">Submit</button></span>
            </form>
        </div>

        <div>
            <p className="leading-loose my-3">Or, reach out to us on any of these platforms:</p>
        </div>
        
    </Layout>
)

export default ContactPage;
