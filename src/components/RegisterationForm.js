import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function RegisterationForm() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    contactMode: "",
    phone: "",
  };
  const phoneRegex = RegExp("^[+]?[\\s0-9]+$");
  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords don't match"),
    contactMode: Yup.string().required(),
    phone: Yup.string()
      .matches(
        phoneRegex,
        "phone should contain only numbers with optional prefix '+'"
      )
      .when("contactMode", {
        is: "phone",
        then: Yup.string().required(),
      }),
  });
  const onSumbmit = (values) => console.log(values);
  const contactModeOptions = [
    { key: "Email", value: "email" },
    { key: "Phone", value: "phone" },
  ];
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSumbmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              label="Mode of Contact"
              options={contactModeOptions}
              name="contactMode"
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone"
              name="phone"
            />

            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterationForm;
