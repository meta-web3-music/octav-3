import React, { PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  path: string;
  icon: string;
};
const Nav: React.FC<PropsWithChildren & Props> = ({ children, path, icon }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      className={`text-[#8A8B8F] flex flex-col items-center w-1/3 mt-[1px] ${
        location.pathname == path ? "text-black" : "text-[#999]"
      }`}
      onClick={() => {
        if (location.pathname != path) {
          navigate(path);
        }
      }}
    >
      <span className="text-xl">
        <span className="iconify" data-icon={icon} />
      </span>
      <label className="text-xs">{children}</label>
    </button>
  );
};

export default Nav;
