import React from "react";
import Logo from "../components/Logo";
import Item from "../components/NavbarItem";
import Btn from "../components/BtnCTA";

const Navbar = () => {
  return (
    <header className="flex w-full bg-primary h-[88px] items-center justify-between px-[120px] fixed z-[999]">
      <Logo />
      <nav>
        <div className="flex gap-x-8">
          <Item content="Dashboard" path="/inkptatif/dashboard/" />
          <Item content="Input Nilai KP" path="/inkptatif/input-nilai-kp" />
          <Item content="Input Nilai TA" path="/inkptatif/input-nilai-ta" />
        </div>
      </nav>
      <Btn />
    </header>
  );
};

export default Navbar;
