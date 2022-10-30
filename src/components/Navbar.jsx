import { useState } from "react";

import { close, logo, menu, globe } from "../assets";
import { navLinks } from "../constants";
import { useTranslation } from 'react-i18next';



const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const { t, i18n } = useTranslation();


  return (
    <nav className="relative w-full flex flex-row py-6 justify-between items-center navbar">
      <img onClick={() => window.location.replace("/")} src={logo} alt="edithproductions" className="w-[200px] h-[54px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">

        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="fixed w-[28px] h-[28px] object-contain z-[10]"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          }  p-6 bg-black-gradient fixed top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[10]`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
