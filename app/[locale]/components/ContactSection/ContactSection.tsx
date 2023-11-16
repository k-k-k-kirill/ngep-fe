"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactSection.module.css";
import Section from "../Section";
import Button from "../Button/Button";

interface ContactSectionProps {
  data: any;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const { Title } = data;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object().shape({
    Name: Yup.string().required("Name is required"),
    Email: Yup.string().email("Invalid email").required("Email is required"),
    CompanyWebsite: Yup.string().url("Invalid URL"),
    Message: Yup.string().required("Message is required"),
    PrivacyPolicyAgreed: Yup.boolean().oneOf(
      [true],
      "You must agree to the privacy policy"
    ),
  });

  const initialValues = {
    Name: "",
    Email: "",
    CompanyWebsite: "",
    Message: "",
    PrivacyPolicyAgreed: false,
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/form-submissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: values,
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        resetForm();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Section className="bg-greyish py-5">
        <div className="container mx-auto px-4">
          <h2 className="mb-2">Thank You!</h2>
          <p>
            Your message has been successfully sent. We will get back to you
            soon.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact" className="bg-greyish py-5">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>{Title && <h2>{Title}</h2>}</div>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values }) => (
              <Form>
                <div className="mb-2">
                  <Field
                    className={styles.textInput}
                    type="text"
                    name="Name"
                    placeholder="Name*"
                  />
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="Name"
                    component="div"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    className={styles.textInput}
                    type="email"
                    name="Email"
                    placeholder="Email*"
                  />
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="Email"
                    component="div"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    className={styles.textInput}
                    type="text"
                    name="CompanyWebsite"
                    placeholder="Company Website"
                  />
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="CompanyWebsite"
                    component="div"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    className={`${styles.textInput} ${styles.textArea}`}
                    as="textarea"
                    name="Message"
                    placeholder="Message*"
                  />
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="Message"
                    component="div"
                  />
                </div>

                <div className="mb-2">
                  <label
                    className={`flex items-center ${styles.checkboxLabel}`}
                  >
                    <Field
                      className={styles.checkboxField}
                      type="checkbox"
                      name="PrivacyPolicyAgreed"
                    />
                    <span
                      style={{ display: "inline-block", marginLeft: "5px" }}
                    >
                      I agree to the privacy policy
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="ml-auto"
                  disabled={isSubmitting || !values.PrivacyPolicyAgreed}
                  title={"Get in touch"}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
