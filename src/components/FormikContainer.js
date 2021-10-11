import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const initialValues = {
    email: "",
    description: "",
    topic: "",
    subscription: "",
    membership: [],
    dateOfBirth: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    description: Yup.string().required(),
    topic: Yup.string().required(),
    subscription: Yup.string().required(),
    membership: Yup.array().min(1),
    dateOfBirth: Yup.date().required(),
  });
  const onSumbmit = (values) => console.log(values);
  const topicOptions = [
    { key: "select an option", value: "" },
    { key: "News", value: "news" },
    { key: "Science", value: "science" },
    { key: "Sports", value: "sports" },
  ];
  const subscriptionOptions = [
    { key: "Monthly", value: "monthly" },
    { key: "Weekly", value: "weekly" },
    { key: "Daily", value: "daily" },
    { key: "None", value: "none" },
  ];
  const membershipOptions = [
    { key: "Gold", value: "gold" },
    { key: "Silver", value: "silver" },
    { key: "Bronze", value: "bronze" },
    { key: "Free", value: "free" },
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
              control="textarea"
              label="Description"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select a topic"
              options={topicOptions}
              name="topic"
            />
            <FormikControl
              control="radio"
              label="Email Subscription"
              options={subscriptionOptions}
              name="subscription"
            />
            <FormikControl
              control="checkbox"
              label="Membership"
              options={membershipOptions}
              name="membership"
            />
            <FormikControl
              control="date"
              label="Date of Birth"
              name="dateOfBirth"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
