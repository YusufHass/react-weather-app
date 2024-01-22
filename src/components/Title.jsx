import "./App.css";
import React, { Fragment, useEffect } from "react";
import { Link, Outlet, useNavigate} from "react-router-dom";
export const Title = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/");
  // }, [navigate]);
  return (
    <Fragment>
    <div>
      <Link to="/">
        <h1 className="text-gray-500 text-2xl font-bold">
          Accurate <span className="text-red-500">Weather</span>
        </h1>
      </Link>
    </div>
    </Fragment>
  );
};
