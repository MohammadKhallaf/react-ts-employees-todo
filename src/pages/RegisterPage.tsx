import React from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../app/services/api";

const RegisterPage = () => {
  const register = useRegister();

  const registerHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: {
        value: string;
      };
      password: {
        value: string;
      };
      first_name: {
        value: string;
      };
      last_name: {
        value: string;
      };
    };

    const email = target.email.value;
    const password = target.password.value;
    const first_name = target.first_name.value;
    const last_name = target.last_name.value;
    const { data, error } = await register(
      email,
      password,
      first_name,
      last_name
    );

    //TODO: build UI indication of success
  };
  return (
    <div className="container mx-auto ">
      <div className="mx-auto min-w-[30rem] p-8 lg:w-1/3 ">
        <div className=" rounded-b-lg bg-slate-200 py-12 px-4  lg:px-24">
          <h3 className="text-center text-3xl font-semibold text-gray-900">
            Register
          </h3>
          <form className="mt-6" onSubmit={registerHandler}>
            <div className="flex flex-col gap-3 md:flex-row ">
              <div className="relative flex-grow">
                <input
                  className="focus:shadow-outline w-full appearance-none rounded-md border border-gray-100 py-3  pl-12  leading-tight text-gray-600 shadow-sm transition focus:placeholder-gray-600 focus:shadow-md focus:outline-none focus:ring-gray-600"
                  id="first_name"
                  type="text"
                  placeholder="First Name"
                  autoComplete="new-username"
                />
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-7 w-7 p-1 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative flex-grow">
                <input
                  className="focus:shadow-outline w-full appearance-none rounded-md border border-gray-100 py-3  pl-12  leading-tight text-gray-600 shadow-sm transition focus:placeholder-gray-600 focus:shadow-md focus:outline-none focus:ring-gray-600"
                  id="last_name"
                  type="text"
                  placeholder="Last Name"
                  autoComplete="new-username"
                />
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-7 w-7 p-1 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative mt-3">
              <input
                className="focus:shadow-outline w-full appearance-none rounded-md border border-gray-100 py-3  pl-12  leading-tight text-gray-600 shadow-sm transition focus:placeholder-gray-600 focus:shadow-md focus:outline-none focus:ring-gray-600"
                id="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 h-7 w-7 p-1 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>
            <div className="relative mt-3">
              <input
                className="focus:shadow-outline w-full appearance-none rounded-md border border-gray-100 py-3  pl-12  leading-tight text-gray-600 shadow-sm transition focus:placeholder-gray-600 focus:shadow-md focus:outline-none focus:ring-gray-600"
                id="password"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
              />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 h-7 w-7 p-1 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <button className="transform rounded bg-indigo-500 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-lg">
                Register
              </button>
              <Link to="/login" className="flex items-center justify-center">
                <button
                  className="transform rounded bg-cyan-500 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-lg"
                  type="button"
                >
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
