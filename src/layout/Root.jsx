import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared/Navbar";
import { Footer } from "../Shared/Footer";

export const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1100px] mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
