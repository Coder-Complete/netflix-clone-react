import "./login.css";

import React, { useState } from "react";

import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();

  function validate() {
    return true;
  }

  function signIn() {
    if (validate()) {
      navigate("../browse", { replace: true });
      // redirect("browse");
    }
  }

  return (
    <div className="login">
      <div className="background">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/bac85149-5350-453a-bbf9-677b01f5558e/US-en-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <h1 style={{ color: "var(--red)" }}>Netflix</h1>
      <div className="sign-in-container">
        <h2>Sign In</h2>
        <form action="" onSubmit={signIn}>
          <label htmlFor="">
            Email or phone number
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            style={{ backgroundColor: "var(--red)", color: "white" }}
            type="submit"
          >
            Sign In
          </button>
          <div className="space-between">
            <label htmlFor="" id="row-label">
              <input type="checkbox" name="" id="" />
              Remember me
            </label>
            <span>Need help?</span>
          </div>
        </form>
        <div>
          <p>
            New to Netflix? <b>Sign up now.</b>
          </p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span style={{ color: "blue" }}>Learn more</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
