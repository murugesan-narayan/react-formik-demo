import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function CourseEnrollmentForm() {
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skillset: [],
    courseDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    bio: Yup.string().required(),
    course: Yup.string().required(),
    courseDate: Yup.date().required().nullable(),
  });
  const onSumbmit = (values) => console.log(values);
  const courseOptions = [
    { key: "select a course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];
  const skillsetOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
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
            <FormikControl control="textarea" label="Bio" name="bio" />
            <FormikControl
              control="select"
              label="Course"
              options={courseOptions}
              name="course"
            />
            <FormikControl
              control="checkbox"
              label="Skillset"
              options={skillsetOptions}
              name="skillset"
            />
            <FormikControl
              control="date"
              type="text"
              label="Course Date"
              name="courseDate"
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

export default CourseEnrollmentForm;
