import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../assets/Provider/AuthProvider";

export const Cheakout = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;
    const order = {
      name,
      email,
      date,
      price,
    };
    console.log(order);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name "
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  name="date"
                  type="date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  disabled
                  defaultValue={user?.email}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Amount</span>
                </label>
                <input
                  defaultValue={`$${data.price}`}
                  name="price"
                  type="text"
                  placeholder="amount"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
