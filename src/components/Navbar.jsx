import { useState, useEffect, useContext } from "react";
import { CartContext } from "./Context";
import logo from "../assets/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
export function Navbar({ whatTab, setWhatTab, setIsCartOpen }) {
  const { cart } = useContext(CartContext);
  const [isOpen, SetIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolling(true);
      else setScrolling(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const Navlinks = ["home", "products"];
  const handleMenu = () => {
    SetIsOpen((current) => !current);
  };
  const handleClick = (index) => () => {
    setWhatTab(index);
  };
  const handleClickCart = () => {
    setIsCartOpen(true);
  };
  return (
    <div
      className={`w-full ${isOpen ? "h-52" : "h-20"} ${
        scrolling ? "sm:bg-white" : "sm:bg-transparent"
      } flex sm:flex-row flex-col my-auto sm:h-20 gap-4 px-10 fixed transition-all duration-300 ease-in-out overflow-hidden font-roboto  bg-white z-10  `}
    >
      <div className="w-full flex justify-between items-center h-20 flex-shrink-0 ">
        <div className="sm:w-1/3 w-24">
          <Link to={"/"} onClick={handleClick(0)}>
            <img src={logo} alt="" className="lg:w-52 md:w-36 w-24" />
          </Link>
        </div>
        <div className="sm:hidden transition-all delay-75 ease-in-out flex flex-row-reverse gap-4">
          <button onClick={handleMenu}>
            {isOpen ? (
              <FaTimes className="cursor-pointer hover:scale-110 transition-all delay-75 ease-in-out"></FaTimes>
            ) : (
              <FaBars className="cursor-pointer hover:scale-110 transition-all delay-75 ease-in-out"></FaBars>
            )}
          </button>
          <ul className="flex justify-end items-center gap-4 h-full rounded-md ">
            <li>
              <i className="bx bx-search font-light cursor-pointer text-xl hover:scale-110 transition-all delay-75 ease-in-out"></i>
            </li>
            <li className="relative">
              <i
                className="bx bx-cart font-light cursor-pointer text-xl hover:scale-110 transition-all delay-75 ease-in-out"
                onClick={handleClickCart}
              ></i>
              {cart.length > 0 && (
                <div className="absolute -right-1 top-0 w-1 h-1 rounded-full bg-accent "></div>
              )}
            </li>
          </ul>
        </div>
        {/* desktop View */}
        <div className="w-2/3 hidden sm:flex">
          <div className="w-1/2">
            <ul className="flex justify-center gap-10">
              {Navlinks.map((link, index) => {
                return (
                  <li
                    key={link}
                    className={` z-10 py-2  px-2 hover:border-b-2 transition-all duration-150 ease-in-out font-light ${
                      index === whatTab && "border-b-2 border-black"
                    }`}
                  >
                    <div className="h-full w-full" onClick={handleClick(index)}>
                      <NavLink to={`${link === "home" ? "/" : "/" + link}`}>
                        {link.toUpperCase()}
                      </NavLink>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-1/2 flex items-center justify-end">
            <ul className="flex justify-end items-center gap-10 px-6 h-full rounded-md ">
              <li>
                <i className="bx bx-search font-light cursor-pointer text-3xl"></i>
              </li>
              <li className="relative">
                <i
                  className="bx bx-cart font-light cursor-pointer text-3xl"
                  onClick={handleClickCart}
                ></i>
                {cart.length > 0 && (
                  <div className="absolute -right-1 top-0 w-2 h-2 rounded-full sm:bg-accent bg-black"></div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile View */}

      {isOpen && (
        <ul className=" flex-col gap-4 flex sm:hidden">
          {Navlinks.map((link, index) => {
            const Name = link.charAt(0).toUpperCase() + link.slice(1);
            return (
              <li
                key={link}
                onClick={handleClick(index)}
                className={`transition-all duration-150 ease-in-out ${
                  index === whatTab && "border-b border-black"
                }`}
              >
                <Link to={`${link === "home" ? "/" : "/" + link}`}>{Name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
Navbar.propTypes = {
  whatTab: PropTypes.number,
  setWhatTab: PropTypes.func,
  setIsCartOpen: PropTypes.func,
};
