import React, { useContext, useState } from "react";
import { AuthContext } from "../assets/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/book/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleConfrim = (id) => {
    axios
      .patch(`http://localhost:5000/book/${id}`, { status: "confrimed" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((el) => {
              return (
                <tr key={el._id}>
                  <th>
                    <label>
                      <button
                        onClick={() => handleDelete(el._id)}
                        className="btn"
                      >
                        X
                      </button>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{el.customerName}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>{el.price}</td>
                  <td>{el.date}</td>
                  <th>
                    <button
                      onClick={() => handleConfrim(el._id)}
                      className="btn btn-ghost btn-xs bg-red-500 text-white"
                    >
                      Confrim
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
