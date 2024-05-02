import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../assets/images/login/login.svg";

export const SignUp = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="text-center flex justify-center items-center lg:text-left">
            <img className="h-2/4" src={loginimg} alt="" />
          </div>
          <div className="card shrink-0 w-full h-full shadow-2xl bg-base-100">
            <h1 className="text-center mt-10 font-bold text-4xl">
              Registration
            </h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#FF3811]">Sign UP</button>
              </div>
              <div className="space-y-4">
                <p className="text-center">
                  Already have an acoount ?{" "}
                  <Link to="/login" className="text-green-600">
                    login now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
