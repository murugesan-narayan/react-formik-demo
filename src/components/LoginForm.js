import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
    chakra_email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    chakra_email: Yup.string().required().email(),
    password: Yup.string().required(),
  });
  const onSumbmit = (values) => console.log(values);
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
              control="chakra-input"
              type="email"
              label="Chakra Email"
              name="chakra_email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
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

export default LoginForm;
