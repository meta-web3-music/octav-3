import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Start: React.FC = () => {
  return (
    <div>
      <Outlet />

      <div className="flex justify-around border-t-2 py-4 border-solid border-[#AAAAAA26] fixed bottom-0 w-[100vw]">
        <Nav path="/start/home" icon="fluent:home-32-regular">
          Home
        </Nav>
        <Nav path="/start/discover" icon="mdi:compass-outline">
          Discover
        </Nav>
        <Nav path="/start/notifications" icon="ic:outline-notifications">
          Notifications
        </Nav>
      </div>
    </div>
  );
};

export default Start;
