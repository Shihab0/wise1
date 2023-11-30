import React, { useState } from "react";
import "../../App.css";
import "../../Responsive.css";
import LogoWhite from "../../images/logo-white.png";
import SignUpImg from "../../images/sign1.png";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

const SignUp = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="signUp-area">
      {/* left  */}
      <div className="left left-signup">
        <h1>Big title goes here and here and here to make three lines.</h1>
        <div className="signImg">
          <img src={SignUpImg} alt="" />
        </div>
      </div>
      {/* right  */}
      <div className="right right-signup">
        <img className="signUp-logo" src={LogoWhite} alt="" />
        <div className="signUp-Input">
          <div className="signUp-Input-Icon">
            <input type="text" placeholder="Name" name="" id="" />
          </div>
          <div className="signUp-Input-Icon">
            <input type="text" placeholder="Email" name="" id="" />
          </div>
          <div className="signUp-Input-Icon">
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="Password"
              name=""
              id=""
            />
            <div onClick={togglePasswordVisibility1}>
              {" "}
              {showPassword1 ? (
                <IoEyeSharp className="Input-Icon" />
              ) : (
                <IoEyeOffSharp className="Input-Icon" />
              )}
            </div>
          </div>

          <a href="">
            <button className="sign-btn">Sign up</button>
          </a>
          <a href="">
            <button className="sign-btn sign-btn-fb">
              Sign up with Facebook
            </button>
          </a>
          <p className="or">
            Already have an account?{" "}
            <a className="or" href="">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
