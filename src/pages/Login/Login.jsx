import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { assets } from "../../assets";
import { login, signUp } from "../../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    try {
      if (signState === "Sign In") {
        await login(email, password);
        navigate("/");
      } else {
        await signUp(name, email, password);

        navigate("/"); //
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="login">
      <img src={assets.logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" && (
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
