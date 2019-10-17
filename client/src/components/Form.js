import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const UserForm = ({ values, touched, errors }) => {
  return (
    <Form>
      <Field type="text" name="name" placeholder="Name" value={values.name} />
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
      />
      {touched.email && errors.email && <p>{errors.email}</p>}

      <Field
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
      />
      {touched.password && errors.password && <p>{errors.password}</p>}

      <label>
        <Field type="checkbox" name="terms" />" I agree to the terms and
        conditions."
      </label>
      <button type="submit">Submit</button>
    </Form>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string().required(),
    password: Yup.string().required()
  })
})(UserForm);

export default FormikUserForm;
