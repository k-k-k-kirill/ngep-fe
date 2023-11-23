"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactSection.module.css";
import Section from "../Section";
import Button from "../Button/Button";
import { useTranslations } from "next-intl";

interface ContactSectionProps {
  data: any;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const { Title } = data;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = useTranslations("Contact");

  const validationSchema = Yup.object().shape({
    Name: Yup.string().required(t("nameError")),
    Email: Yup.string().email(t("emailErrorInvalid")).required(t("emailError")),
    CompanyWebsite: Yup.string().url(t("companyWebsiteInvalidError")),
    Message: Yup.string().required(t("messageError")),
    PrivacyPolicyAgreed: Yup.boolean().oneOf([true], t("privacyPolicyError")),
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
          <h2 className="mb-2">{t("successTitle")}</h2>
          <p>{t("successText")}</p>
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
                    placeholder={`${t("name")}*`}
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
                    placeholder={`${t("email")}*`}
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
                    placeholder={`${t("companyWebsite")}`}
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
                    placeholder={`${t("message")}*`}
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
                      {t.rich("agreePrivacyPolicy", {
                        privacyPolicyLink: (chunks) => (
                          <a
                            className="underline"
                            href="https://drive.google.com/file/d/1VgecL311kU_fNJwdUbNnHr4w5tvclDnJ/view?usp=drive_link"
                          >
                            {chunks}
                          </a>
                        ),
                      })}
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="ml-auto"
                  disabled={isSubmitting || !values.PrivacyPolicyAgreed}
                  title={t("button")}
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
