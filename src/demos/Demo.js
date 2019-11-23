import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

export const Demo = () => {
  const _handleSubmit = e => {
    console.log(e);
  };
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={_handleSubmit}
      >
        {({ errors, touched, handleChange }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">FirstName</label>
              <Field
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={handleChange}
              />
              {errors.firstName && touched.firstName && (
                <p className="alert alert-danger">{errors.firstName}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Lastname</label>
              <Field
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={handleChange}
              />
              {errors.lastName && touched.lastName && (
                <p className="alert alert-danger">{errors.lastName}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                type="email"
              />
              {errors.email && touched.email && (
                <p className="alert alert-danger">{errors.email}</p>
              )}
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
