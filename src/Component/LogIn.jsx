import React from "react";
import { Link } from "react-router";

const LogIn = () => {
  const handleLogIn = (e) => {
    e.preventDefault();
    console.log(`logged in`);
  };
  return (
    <div className="card mx-auto mt-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">LogIn now!</h1>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
            {/* Emai */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p>
          Don't Have an account?{" "}
          <Link
            className="text-blue-500 underline font-semibold"
            to={"/register"}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
