import React from "react";
import {
  Switch,
  Link,
  useRouteMatch,
  NavLink,
  useHistory,
} from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import UserOrders from "../UserOrders/UserOrders";
import UserReview from "../UserReview/UserReview";
import logo from "../../../Images/logo.png";

const Dashboard = () => {
  const { logOutUser } = useAuth();
  let { path, url } = useRouteMatch();
  const [showNav, setShowNav] = useState(false);
  const history = useHistory();
  const handleLogOut = () => {
    logOutUser();
    history.replace("/");
  };

  return (
    <div className="grid grid-cols-5 min-h-screen py-10 md:py-0 relative">
      <div onClick={() => setShowNav(true)} className="absolute left-3 top-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24 "
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <div
        className={`fixed top-0 w-2/3 sm:w-1/2 h-full bg-gray-100 shadow-md md:hidden  p-2 ${
          showNav ? "block" : "hidden"
        }`}
      >
        <div>
          <svg
            onClick={() => setShowNav(false)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 ml-auto cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="my-7">
          <Link to="/">
            <img width="200" src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col mt-8">
              <NavLink
                exact
                activeClassName="text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700  mx-3"
                to={`${url}`}
                className="text-md px-4 py-3"
              >
                Pay
              </NavLink>
              <NavLink
                activeClassName="text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 mx-3"
                to={`${url}/my-orders`}
                className="text-md px-4 py-3"
              >
                My Orders
              </NavLink>
              <NavLink
                activeClassName="text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 mx-3"
                to={`${url}/review`}
                className="text-md px-4 py-3"
              >
                Review
              </NavLink>
            </div>
            <div className="mt-16">
              <button
                onClick={handleLogOut}
                className="inline-block px-5 py-4 text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8 md:transform md:-translate-y-2"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bg-white w-64 hidden top-0 h-screen border-r-2 md:block ">
        <div className="px-4 pt-6">
          <Link to="/">
            <img width="250" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-col justify-between h-5/6 ">
          <div className="flex flex-col mt-8">
            <NavLink
              exact
              activeClassName="text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 mx-3"
              to={`${url}`}
              className="text-xl px-4 py-3"
            >
              Pay
            </NavLink>
            <NavLink
              activeClassName="text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 mx-3"
              to={`${url}/my-orders`}
              className="text-xl px-4 py-3"
            >
              My Orders
            </NavLink>
            <NavLink
              activeClassName="text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 mx-3"
              to={`${url}/review`}
              className="text-xl px-4 py-3"
            >
              Review
            </NavLink>
          </div>
          <div>
            <button
              onClick={handleLogOut}
              className="inline-block px-5 py-4 text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8 md:transform md:-translate-y-2"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div
        className="col-span-5 md:ml-64 px-3 p-6"
        onClick={() => setShowNav(false)}
      >
        <Switch>
          <PrivateRoute exact path={path}>
            <h3 className="text-2xl">Payment System is Coming soon ....</h3>
          </PrivateRoute>
          <PrivateRoute path={`${path}/my-orders`}>
            <UserOrders />
          </PrivateRoute>
          <PrivateRoute path={`${path}/review`}>
            <UserReview />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
