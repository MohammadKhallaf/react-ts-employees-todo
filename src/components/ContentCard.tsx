import { ListBulletIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  title: string;
  content: string;
  Icon?: React.ReactNode;
};

const ContentCard = ({ to, title, content, Icon }: Props) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 ">
      <Link to={to}>
        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            {Icon}
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            {title}
          </h2>
          <p className="leading-relaxed text-base">{content}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;
