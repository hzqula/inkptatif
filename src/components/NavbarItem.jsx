import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = ({ content = "Ini Link", path = "/" }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "text-customWhite font-medium inline-block py-2 text-[14px] font-primary relative after:contents[''] after:w-full after:h-[2px] after:inline-block after:absolute after:bottom-0 after:left-0 after:bg-secondary after:transition-all after:duration-[400ms]"
          : "text-customWhite font-medium inline-block py-2 text-[14px] font-primary relative after:contents[''] after:w-0 after:h-[2px] after:inline-block after:absolute after:bottom-0 after:left-0 after:bg-secondary after:transition-all after:duration-[400ms] hover:after:w-full hover:after:transition-all hover:after:duration-[400ms]"
      }
    >
      <li className="inline-block">{content}</li>
    </NavLink>
  );
};

export default NavbarItem;
