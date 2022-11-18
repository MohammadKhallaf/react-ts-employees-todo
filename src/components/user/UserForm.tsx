import React from "react";
import { toast } from "react-toastify";
import { useRegister } from "../../app/services/api";

const UserForm = () => {
  const register = useRegister();

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
      className="mx-auto flex w-full flex-col gap-3 rounded-xl border-2 p-8 shadow lg:w-2/3"
      onSubmit={inviteUserHandler}
    >
      <h1 className="text-center text-3xl font-bold">Add new user</h1>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative w-full flex-grow">
          <label
            htmlFor="first_name"
            className="text-sm leading-7 text-gray-600"
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
        <div className="relative w-full flex-grow">
          <label
            htmlFor="last_name"
            className="text-sm leading-7 text-gray-600"
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

      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative w-full flex-grow">
          <label htmlFor="email" className="text-sm leading-7 text-gray-600">
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
        <div className="relative w-full flex-grow">
          <label htmlFor="password" className="text-sm leading-7 text-gray-600">
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
        className="mt-5 self-end whitespace-nowrap rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none"
        onClick={inviteUserHandler}
        type="submit"
      >
        Invite User
      </button>
    </form>
  );
};

export default UserForm;
