import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../assets/Provider/AuthProvider";
import Swal from "sweetalert2";

import { useAxiosSequre } from "../Hooks/useAxiosSequre";

export const MyBookings = () => {
  const axiosSecure = useAxiosSequre();
  const [data, setdata] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => setdata(res.data));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/book/${id}`)
          .then((res) => {
            const update = data.filter((el) => el._id !== id);
            setdata(update);
          })
          .catch((err) => console.log(err));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleConfrim = (id) => {
    axiosSecure
      .patch(`/book/${id}`, { status: "confrimed" })
      .then(() => {
        const statusUpdatedId = data.find((el) => el._id == id);
        statusUpdatedId.status = "confrimed";
        const allProductWithoutUpdatedStatus = data.filter(
          (el) => el._id !== id
        );
        setdata([statusUpdatedId, ...allProductWithoutUpdatedStatus]);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
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
