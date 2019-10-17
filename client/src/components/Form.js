import React from "react";
import { Form, Field, withFormik } from "formik";

const UserForm = ({ values }) => {
  return (
    <Form>
      <Field type="text" name="name" placeholder="Name" value={values.name} />
      <Field
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
      />
      <label>
        <Field component="checkbox" name="terms" />" I agree to the terms and
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
  }
})(UserForm);

export default FormikUserForm;
