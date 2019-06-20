import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };

  schema = {
      username: Joi.string().email().required().label("Username"),
      password: Joi.string().min(5).required(),
      name: Joi.string().required()
  }

  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };

  render() {
    return (
        <div>
            <h1>Register</h1>
        </div>

    );
  }
}

export default RegisterForm;
