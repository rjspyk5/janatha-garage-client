import React, { useContext } from "react";
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

  console.log(isPending);

  return <div>MyBookinffgs</div>;
};
