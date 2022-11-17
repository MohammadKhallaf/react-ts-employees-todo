import React, { useState } from "react";
import {
  Pencil2Icon,
  TrashIcon,
  CheckIcon,
  CheckboxIcon,
  BoxIcon,
  BackpackIcon,
} from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "../../app/store";
import withTooltip from "../RadixTooltip";

type Props = {
  user: User;
};

const TaskRow = ({ user }: Props) => {
  const users = useAppSelector((state) => state.user.users);
  const taskUser = users.find((userInst) => userInst.id === user.id);
  const TodoList = withTooltip(
    <TrashIcon className="icon hover:text-red-700" text="Hover" />
  );
  return (
    <tr>
      {/* <td className="text-center">{user.id}</td> */}

      <td className="text-center">
        {`${taskUser?.first_name} ${taskUser?.last_name}`}
      </td>
      <td className="text-center h-12">
        {taskUser?.is_admin ? "Admin" : "Employee"}
      </td>

      <td className="text-center min-w-[3rem] px-0.5">
        <BackpackIcon className="icon hover:text-purple-700" />
      </td>

      <td className="text-center min-w-[3rem] ">
        with
        <TrashIcon className="icon hover:text-red-700" />
      </td>
    </tr>
  );
};

export default TaskRow;
