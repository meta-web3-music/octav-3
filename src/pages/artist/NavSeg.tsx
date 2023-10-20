import React, { PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  path: string;
};
const NavSeg: React.FC<PropsWithChildren & Props> = ({ children, path }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      className={`w-1/4 py-1 flex justify-center ${
        location.pathname == path ? "border-b-2 border-black" : "text-[#999]"
      }`}
      onClick={() => {
        if (location.pathname != path) {
          navigate(path);
        }
      }}
    >
      <p>{children}</p>
    </div>
  );
};

export default NavSeg;
