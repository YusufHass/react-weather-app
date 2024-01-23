// Navigation.js
import React, { Fragment, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Navigation = () => {
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     navigate("/");
  //   }, [navigate]);
  return (
    <div className="flex flex-row w-3/4 items-center justify-center spa gap-x-4 ">
      <div className="flex justify-around">
        <Link
          to="/hourly"
          className="text-red-500 text-lg font-medium hover:scale-125"
        >
          Hourly
        </Link>
      </div>
      <div className="flex justify-around">
        <Link
          to="/daily"
          className="text-red-500 text-lg font-medium hover:scale-125"
        >
          Daily
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
