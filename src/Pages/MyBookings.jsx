import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../assets/Provider/AuthProvider";

import axios from "axios";

export const MyBookings = () => {
  const [data, setdata] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => setdata(res.data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/book/${id}`)
        .then((res) => {
          const update = data.filter((el) => el._id !== id);
          setdata(update);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleConfrim = (id) => {
    axios
      .patch(`http://localhost:5000/book/${id}`, { status: "confrimed" })
      .then(() => {
        alert("status updated");
        const statusUpdatedId = data.find((el) => el._id == id);
        statusUpdatedId.status = "confrimed";
        const allProductWithoutUpdatedStatus = data.filter(
          (el) => el._id !== id
        );
        setdata([statusUpdatedId, ...allProductWithoutUpdatedStatus]);
      })
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
                    {el?.status === "confrimed" ? (
                      <button
                        disabled
                        className="bg-green-500 btn btn-xs text-white"
                      >
                        Confrimed
                      </button>
                    ) : (
                      <button
                        onClick={() => handleConfrim(el._id)}
                        className="btn btn-ghost btn-xs bg-red-500 text-white"
                      >
                        Confrim
                      </button>
                    )}
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
