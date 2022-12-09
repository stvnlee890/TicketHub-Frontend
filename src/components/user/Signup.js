import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserSignup } from "../../api/HttpRequest";

const Signup = () => {
  const navigate = useNavigate();
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [signup, setSingup] = useState(initialFormState);
  const [formIsValid, setIsFormValid] = useState(false);

  const checkForm =
    signup.email.includes("@") &&
    signup.password.trim().length >= 6 &&
    signup.firstName !== "" &&
    signup.lastName !== "";

  useEffect(() => {
    setIsFormValid(checkForm);
  });
  console.log(checkForm);

  const handleChange = (e) => {
    e.preventDefault();
    setSingup({ ...signup, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserSignup(signup).then((res) => {
      if (res.status === 200) navigate("/login");
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          id="firstName"
          placeholder="First Name"
          value={signup.firstName}
        ></input>
        <input
          onChange={handleChange}
          id="lastName"
          placeholder="Last Name"
          value={signup.lastName}
        ></input>
        <input
          onChange={handleChange}
          id="email"
          placeholder="Email"
          value={signup.email}
        ></input>
        <input
          onChange={handleChange}
          id="password"
          type="password"
          placeholder="Password"
          value={signup.password}
        ></input>
        {formIsValid ? (
            <button type="submit">Submit</button>
        ) : (
            <button disabled type="submit">Submit</button>
        )
        }

      </form>
    </div>
  );
};

export default Signup;
