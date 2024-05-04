import React from "react";
import { useLoaderData } from "react-router-dom";

export const Cheakout = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Cheakout</div>;
};
