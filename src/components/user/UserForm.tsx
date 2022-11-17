import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useRegister } from "../../app/services/api";
import { useAppDispatch, useAppSelector } from "../../app/store";

type Props = {};

const UserForm = (props: Props) => {
  const [valid, setValid] = useState(false);
  const register = useRegister();
  const dispatch = useAppDispatch();

  const inviteUserHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      first_name: { value: string };
      last_name: { value: string };
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
    if (data.user) {
      toast.info("done");
    }
  };
  return (
    <form
      className="flex lg:w-2/3 w-full flex-col mx-auto gap-3 border-2 p-8 rounded-xl shadow"
      onSubmit={inviteUserHandler}
    >
      <h1 className="text-3xl font-bold text-center">Add new user</h1>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-grow w-full">
          <label
            htmlFor="first_name"
            className="leading-7 text-sm text-gray-600"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            autoComplete="first_name"
            className="app-input-text"
            required
          />
        </div>
        <div className="relative flex-grow w-full">
          <label
            htmlFor="last_name"
            className="leading-7 text-sm text-gray-600"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="app-input-text "
            required
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-grow w-full">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="app-input-text "
            required
          />
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="password"
            className="app-input-text "
            required
          />
        </div>
      </div>

      <button
        className="text-white bg-indigo-500 whitespace-nowrap border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5 self-end"
        // onClick={inviteUserHandler}
      >
        Invite User
      </button>
    </form>
  );
};

export default UserForm;
