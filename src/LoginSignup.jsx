import React, { useState } from "react";

import "./loginsignup.css";

const LoginSignup = ({ setShow }) => {

  const [isSignup, setIsSignup] =
    useState(false);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [toast, setToast] =
    useState({
      show: false,
      message: "",
      type: "",
    });

  const showToast = (
    message,
    type
  ) => {

    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {

      setToast({
        show: false,
        message: "",
        type: "",
      });

    }, 3000);
  };

  const submitHandler = async () => {

    if (!email || !password) {

      showToast(
        "Please fill all required fields",
        "error"
      );

      return;
    }

    if (
      isSignup &&
      !name
    ) {

      showToast(
        "Please enter your name",
        "error"
      );

      return;
    }

    try {

      setLoading(true);

      const url = isSignup
        ? "http://localhost:3000/api/users/signup"
        : "http://localhost:3000/api/users/login";

      const response =
        await fetch(url, {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            name,
            email,
            password,

          }),

        });

      const data =
        await response.json();

      if (response.ok) {

        showToast(
          data.message ||
            "Success",
          "success"
        );

        setName("");
        setEmail("");
        setPassword("");

        setTimeout(() => {

          setShow(false);

        }, 1500);

      } else {

        showToast(
          data.message ||
            "Something went wrong",
          "error"
        );
      }

    } catch (error) {

      console.log(error);

      showToast(
        "Server Error",
        "error"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="login-overlay">

      {toast.show && (

        <div
          className={`toast ${toast.type}`}
        >

          {toast.type ===
          "success"
            ? "✅"
            : "❌"}

          {" "}

          {toast.message}

        </div>

      )}

      <div className="login-container">

        <button
          className="close-btn"
          onClick={() =>
            setShow(false)
          }
        >
          ✕
        </button>

        <h2>

          {isSignup
            ? "Create Account"
            : "Login"}

        </h2>

        <p>

          {isSignup
            ? "Sign up to continue"
            : "Access your Domino's account"}

        </p>

        {isSignup && (

          <input
            type="text"
            placeholder="Enter Full Name"

            value={name}

            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

        )}

        <input
          type="email"
          placeholder="Enter Email"

          value={email}

          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Enter Password"

          value={password}

          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          className="submit-btn"
          onClick={submitHandler}
          disabled={loading}
        >

          {loading
            ? "PLEASE WAIT..."
            : isSignup
            ? "SIGN UP"
            : "LOGIN"}

        </button>

        <span className="signup-text">

          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}

          <strong
            onClick={() =>
              setIsSignup(
                !isSignup
              )
            }
          >

            {isSignup
              ? " Login"
              : " Sign Up"}

          </strong>

        </span>

      </div>

    </div>

  );
};

export default LoginSignup;