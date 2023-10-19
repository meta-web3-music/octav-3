import React from "react";
import { Outlet } from "react-router-dom";

const Start: React.FC = () => {
  return (
    <div>
      <Outlet />

      <div className="flex justify-around border-t-2 py-4 border-solid border-[#AAAAAA26] fixed bottom-0 w-[100vw]">
        <button className="text-[#8A8B8F] flex flex-col items-center w-1/3">
          <span className="text-xl">
            <span className="iconify" data-icon="fluent:home-32-regular" />
          </span>
          <label className="text-xs">Home</label>
        </button>

        <button className="text-[#8A8B8F] flex flex-col items-center w-1/3 mt-[1px]">
          <span className="text-xl">
            <span className="iconify" data-icon="mdi:compass-outline" />
          </span>
          <label className="text-xs">Discover</label>
        </button>

        <button className="text-[#8A8B8F] flex flex-col items-center w-1/3 mr-1">
          <span className="text-xl">
            <span className="iconify" data-icon="ic:outline-notifications" />
          </span>
          <label className="text-xs">Notifications</label>
        </button>
      </div>
    </div>
  );
};

export default Start;
