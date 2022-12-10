import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../api/HttpRequest";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../features/isLoggedIn/loginSlice";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const initialFormState = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initialFormState);

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserLogin(login).then((res) => {
      console.log(res);
      if (res.status === 200) {
        // window.localStorage.setItem("token", res.token);
        // window.localStorage.setItem("isLoggedIn", true);
        dispatch(setLoggedIn())
        navigate("/");
      } else if (res.statusCode === 422) {
        alert("email or password is incorrect");
        setLogin(initialFormState);
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          id="email"
          placeholder="email"
          value={login.email}
        ></input>
        <input
          onChange={handleChange}
          id="password"
          placeholder="password"
          type="password"
          value={login.password}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
