import React, { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserProfile } from "~/app/features/user/read";
import { supabase } from "../app/services/api";
import { useAppDispatch } from "../app/store";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logged_user = useLoaderData() as { user: User };
  console.log(logged_user);
  useEffect(() => {
    if (logged_user.user) {
      navigate("/");
    }
  }, []);
  const loginHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return;
    }
    dispatch(getUserProfile());
    toast.success(`Welcome ${data.user?.user_metadata.first_name}`);
    navigate("/");
  };
  return (
    <div className="container mx-auto">
      <div className="mx-auto p-8 lg:w-1/2">
        <div className=" rounded-b-lg bg-slate-200 py-12 px-4  lg:px-24">
          <h3 className="text-center text-3xl font-semibold text-gray-900">
            Login
          </h3>
          <form className="mt-6" onSubmit={loginHandler}>
            <div className="relative">
              <input
                className="focus:shadow-outline w-full appearance-none rounded-md border border-gray-100 py-3  pl-12  leading-tight text-gray-600 shadow-sm transition focus:placeholder-gray-600 focus:shadow-md focus:outline-none focus:ring-gray-600"
                id="email"
                type="email"
                placeholder="Email"
                required={true}
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
                required={true}
                autoComplete="password"
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
            <div className="mt-4 flex items-center text-gray-500">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-3"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                className="transform rounded bg-indigo-500 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-lg"
                type="submit"
              >
                Sign in
              </button>
              <Link to="/register" className="flex items-center justify-center">
                <button
                  className="transform rounded bg-cyan-500 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-lg"
                  type="button"
                >
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
