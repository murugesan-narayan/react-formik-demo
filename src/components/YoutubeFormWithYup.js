import React, { useState } from "react";
import {
  ErrorMessage,
  Field,
  FastField,
  FieldArray,
  Form,
  Formik,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phone_numbers: ["", ""],
  video_list: [""],
};

const savedValues = {
  name: "Karnan",
  email: "kn@gmail.com ",
  channel: "kn-offcial",
  comments: "welcome to KN Offcial",
  address: "75, Winmark street",
  social: {
    facebook: "kn-offcial",
    twitter: "kn-offcial",
  },
  phone_numbers: ["353535363", "567732378"],
  video_list: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  console.log(onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required().max(22),
  email: Yup.string().required().email(),
  channel: Yup.string().required().max(22),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

function YoutubeFormWithYup() {
  const [formValues, setFormdValues] = useState(null);
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  //   //    validate,
  // });
  //  console.log(formik.values);
  //  console.log(formik.errors);
  //console.log(formik.touched);
  return (
    <Formik
      initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      // validateOnBlur={false}
      // validateOnChange={false}
      validateOnMount
      enableReinitialize
    >
      {(formik) => {
        console.log(formik.touched);
        return (
          <Form>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              //{...formik.getFieldProps("name")}
            />
            {/* {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null} */}
            <ErrorMessage name="name" component={TextError} />
            <label htmlFor="email">E-Mail</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>

            <label htmlFor="channel">Channel</label>
            <Field
              type="text"
              id="channel"
              name="channel"
              placeholder="Channel Name"
            />
            <ErrorMessage name="channel" />

            <label htmlFor="comments">Comments</label>
            <Field
              as="textarea"
              id="comments"
              name="comments"
              validate={validateComments}
            />
            <ErrorMessage name="comments" component={TextError} />

            <label htmlFor="address">Address</label>
            <FastField name="address">
              {/* FastField rerenders only when it gets updated not for other changes */}
              {(props) => {
                //console.log("field render...inside address field");
                //const { field, form, meta } = props;
                const { field, meta } = props;
                return (
                  <div>
                    <input type="text" id="address" {...field} />
                    {meta.touched && meta.error ? (
                      <div>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </FastField>
            <ErrorMessage name="address" />

            <label htmlFor="facebook">Facebook</label>
            <Field id="facebook" name="social.facebook" />

            <label htmlFor="twitter">Twitter</label>
            <Field id="twitter" name="social.twitter" />

            <label htmlFor="primaryPh">Primary Phone</label>
            <Field id="primaryPh" name="phone_numbers[0]" />

            <label htmlFor="secondaryPh">Secondary Phone</label>
            <Field id="secondaryPh" name="phone_numbers[1]" />

            <label htmlFor="videoList">Video List</label>
            <FieldArray id="videoList" name="video_list">
              {(fieldArrayProps) => {
                //console.log(fieldArrayProps);
                const { push, remove, form } = fieldArrayProps;
                const { video_list } = form.values;
                return (
                  <div>
                    {video_list.map((video, index) => (
                      <div key={index}>
                        <Field name={`video_list[${index}]`} />
                        {index > 0 && (
                          <button type="button" onClick={() => remove(index)}>
                            {` - `}
                          </button>
                        )}
                        <button type="button" onClick={() => push("")}>
                          {` + `}
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>

            <br />
            <button
              type="button"
              onClick={() => {
                formik.validateField("comments");
                formik.setFieldTouched("comments");
              }}
            >
              Validate Comments
            </button>
            <button
              type="button"
              onClick={() => {
                formik.validateForm();
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                });
              }}
            >
              Validate All
            </button>
            {/* <button type="submit" disabled={!(formik.dirty && formik.isValid)}> */}
            <button type="button" onClick={() => setFormdValues(savedValues)}>
              Load Saved Data
            </button>
            <button type="reset">Reset</button>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeFormWithYup;
