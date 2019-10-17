import React from "react";

const User = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>password: {props.password}</p>
      <p>Terms: {props.terms ? "True" : "False"}</p>
    </div>
  );
};

export default User;
