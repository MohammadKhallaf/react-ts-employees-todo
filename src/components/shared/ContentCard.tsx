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
    <div className="w-full p-4 md:w-1/2 xl:w-1/4">
      <Link to={to}>
        <div className="rounded-lg border border-gray-200 p-6 shadow hover:shadow-md">
          <div className=" mb-4 inline-flex h-8 w-full items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
            {Icon}
          </div>
          <h2 className="mb-2 text-lg font-medium text-gray-900">{title}</h2>
          <p className="text-base leading-relaxed">{content}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;
