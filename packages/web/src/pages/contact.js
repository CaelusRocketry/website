import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Layout from "../components/layout";
import SEO from "../components/seo";

const FormField = ({ title, type }) => (
  <div className="mb-4 w-full">
    <label className="heading text-2xl mb-2">{title}</label>
    <Field
      type={type}
      as={type === "textarea" ? "textarea" : "input"}
      rows="6"
      name={title.toLowerCase()}
      className={`transition text-primary-dark w-full 
        border-4 border-secondary-light focus:border-accent focus:outline-none rounded p-3 mb-2`}
    />
    <ErrorMessage
      name={title.toLowerCase()}
      component="div"
      className="text-accent mb-6"
    />
  </div>
);

const ContactPage = ({ data }) => {
  const [formResult, setFormResult] = useState(null);

  return (
    <Layout>
      <SEO title="Contact" />
      <section className="container">
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          validate={(values) => {
            const errors = {};

            console.log(values);

            if (!values.name) {
              errors.name = "A name is required";
            }

            if (!values.email) {
              errors.email = "An email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.subject) {
              errors.subject = "A subject is required";
            }

            if (!values.message) {
              errors.message = "A message is required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert("SUBMIT!");
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, setFieldValue }) => {
            return (
              <Form>
                <FormField title="Name" type="text" />
                <FormField title="Email" type="email" />
                <FormField title="Subject" type="subject" />
                <FormField title="Message" type="textarea" />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="block cursor-pointer mt-6"
                >
                  <p className="transition bg-accent hover:bg-red-700 text-primary-light p-4 rounded-sm font-bold uppercase">
                    Submit
                  </p>
                </button>
              </Form>
            );
          }}
        </Formik>
      </section>
    </Layout>
  );
};

export default ContactPage;
