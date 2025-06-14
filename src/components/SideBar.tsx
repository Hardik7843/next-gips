import React from "react";
import NavLink from "./NavLink";
import { navlinks } from "@/config/navConfig";

type SideBarProps = {
  handleClose: () => void;
};

const SideBar: React.FC<SideBarProps> = ({ handleClose }) => {
  return (
    <ul className="flex flex-col py-4 items-center h-screen">
      {navlinks.map((nav, index) => (
        <div onClick={handleClose} key={index}>
          <NavLink name={nav.name} path={nav.path} />
        </div>
      ))}
    </ul>
  );
};

export default SideBar;
