// Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex flex-row w-3/4 items-center justify-center spa gap-x-4 ">
      <div className="flex justify-around">
        <button className="text-red-500 text-lg font-medium hover:scale-125">
          Hourly
        </button>
      </div>
      <div className="flex justify-around">
        <button className="text-red-500 text-lg font-medium hover:scale-125">
          Daily
        </button>
      </div>
    </div>
  );
};

export default Navigation;
