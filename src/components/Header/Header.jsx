import { NavLink } from "react-router-dom";
import sprite from "../../assets/img/sprite.svg";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-50 bg-gray-100 w-full">
      <div className="max-w-[1440px] w-full m-auto px-4 sm:px-8 py-4 sm:py-5 md:py-7 md:px-16 flex justify-between items-center md:justify-start">
        <NavLink className="" to="/">
          <svg className="w-[136px] h-4">
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </NavLink>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <nav
          className={`w-full  
                    md:space-x-4 absolute md:relative top-14 left-0 md:top-0 
                    md:left-0  md:p-0 bg-gray-100 md:bg-transparent 
                    transition-all duration-500 ease-in-out transform ${
                      isOpen ? "translate-x-0" : "translate-x-full"
                    } md:translate-x-0`}
        >
          <ul className="w-full flex flex-col md:w-auto md:justify-center  md:flex-row md:items-center md:gap-8">
            <li className="w-full flex justify-center md:w-auto">
              <NavLink
                className={({ isActive }) =>
                  ` p-3 md:p-0 transition-all duration-300 hover:text-btn-red font-bold ${
                    isActive ? "text-btn-red" : "text-text-color"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="w-full flex justify-center md:w-auto">
              <NavLink
                className={({ isActive }) =>
                  `p-3 md:p-0  transition-all duration-300 hover:text-btn-red font-bold ${
                    isActive ? "text-btn-red" : "text-text-color"
                  }`
                }
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
