import React from "react";
import loginimg from "../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="text-center flex justify-center items-center lg:text-left">
            <img className="h-2/4" src={loginimg} alt="" />
          </div>
          <div className="card shrink-0 w-full h-full shadow-2xl bg-base-100">
            <h1 className="text-center mt-10 font-bold text-4xl">Login</h1>
            <form className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#FF3811]">Login</button>
              </div>
              <div className="space-y-4">
                <div className="flex gap-5 items-center">
                  <p className="border-t"></p>
                  <p>Or Sign in with</p>
                  <p className="border-t"></p>
                </div>
                <div className="flex gap-4 justify-center">
                  <FcGoogle size={30} />
                  <FaGithub size={30} />
                </div>
                <p className="text-center">
                  New here? <span className="text-green-600">sign up now</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
