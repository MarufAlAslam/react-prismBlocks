import React, { useEffect } from "react";
import logo from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import bars from "../../assets/img/bars.png";

const Nav = () => {
  const [show, setShow] = React.useState(true);
  const [screenSize, setScreenSize] = React.useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, [screenSize]);
  const toggleMenu = () => {
    screenSize < 767 && setShow(!show);
  };
  return (
    <nav className="py-5 relative z-20">
      <div className="container">
        <div className="flex justify-between items-center gap-3">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-14" />
          </NavLink>
          <button onClick={toggleMenu} className="btn md:hidden block">
            <img src={bars} alt="" />
          </button>
          <div
            className={`menu-items transition-[0.5s] items ${
              show ? "translate-x-0" : "translate-x-[-100%]"
            } flex justify-end items-center gap-[10px] bg-[#252525] px-[18px] py-[15px] rounded-[20px]`}
          >
            <Link
              to="/"
              onClick={toggleMenu}
              className="text-white block py-[20px] px-[35px] rounded-[20px] hover:bg-[#0e0e0f]"
            >
              Home
            </Link>
            <Link
              onClick={toggleMenu}
              to="/team"
              className="text-white block py-[20px] px-[35px] rounded-[20px] hover:bg-[#0e0e0f]"
            >
              Our Team
            </Link>
            <Link
              to="/news"
              onClick={toggleMenu}
              className="text-white block py-[20px] px-[35px] rounded-[20px] hover:bg-[#0e0e0f]"
            >
              News and Resources
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="text-white block py-[20px] px-[35px] rounded-[20px] bg-[#0e0e0f]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
