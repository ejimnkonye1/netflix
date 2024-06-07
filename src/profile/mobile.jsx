import React, { useState } from "react";
import "../css/login.css";

export const Mobile = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailTouched(true);
    setEmailValid(e.target.checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailTouched(true);
    setEmailValid(email.includes("@")); // Simple email validation check

    if (emailValid) {
      // Handle form submission
      console.log("Form submitted with email:", email);
    }
  };

  return (
    <div className="container">
      <div className="backgroud-img">
        <div className="header">
          <nav className="navbar">
            <div className="container-fluid">
              <a className="navbar-brand netflix-name" href="#">NETFLIX</a>
            </div>
          </nav>
        </div>

        <div className="main-div">
          <div className="black-container">
            <form className="m-5" onSubmit={handleSubmit}>
              <header className="sign">Sign in</header>
              <div className="form-floating mb-3 mt-4">
                <input
                  type="email"
                  className={`form-control ${emailTouched && (emailValid ? "is-valid" : "is-invalid")}`}
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <label htmlFor="floatingInput">Email or mobile number</label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please provide a valid email.</div>
              </div>

              <p className="text-center text-light">Message and data rates may apply</p>
              <div className="login-button mt-4">
                <button type="submit" className="btn btn-danger">Sign in</button>
              </div>
              <div>
                <p className="text-center text-light mt-3">OR</p>
              </div>
              <div className="sign-button">
                <button type="button" className="btn btn-light">Use Password</button>
              </div>
              <div className="forget text-center mt-4">
                <a href="#" className="frgt">Forget email or phone number</a>
              </div>
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label text-light" htmlFor="defaultCheck1">Remember me</label>
              </div>
              <div className="d-flex">
                <p className="new-cl m-1">New to Netflix?</p>
                <a href="#" className="text-light m-1 sign-link">Sign up now.</a>
              </div>
              <div>
                <p className="learn">
                  This page is protected by Google reCAPTCHA to<br /> ensure you're not a bot
                  <a href="#" className="learn-a">Learn more.</a>
                </p>
              </div>
            </form>
          </div>
        </div>

        <footer className="py-5 footer text-lg-start">
          <div className="container small-top py-5">
            <div className="footer-head">
              <a href="">Question? Contact us</a>
            </div>
            <div className="row small-row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 col-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-body">FAQ</a>
                  </li>
                  <li className="mt-3">
                    <a href="#!" className="text-body">Cookie Preferences</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 col-6">
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-body">Help center</a>
                  </li>
                  <li className="mt-3">
                    <a href="#!" className="text-body">Corporate information</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 col-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-body">Terms of use</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 col-6">
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-body">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
