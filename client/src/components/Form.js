import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

import User from "./User";

const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledField = styled(Field)`
  width: 50%;
  margin: 10px;
`;

const UserForm = ({ values, touched, errors, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(user => [...user, status]);
  }, [status]);

  return (
    <>
      <StyledForm>
        <StyledField
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
        />
        {touched.name && errors.name && <p>{errors.name}</p>}
        <StyledField
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
        />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <StyledField
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <label>
          <Field type="checkbox" name="terms" />I agree to the terms and
          conditions.
        </label>
        <button type="submit">Submit</button>
      </StyledForm>

      {users.map((user, index) => {
        return <User {...user} key={index} />;
      })}
    </>
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
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters.")
      .required()
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log(res);
        setStatus(res.data);
      })
      .catch(err => console.error(err));
  }
})(UserForm);

export default FormikUserForm;
