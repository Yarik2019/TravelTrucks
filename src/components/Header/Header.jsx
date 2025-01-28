import { NavLink } from "react-router-dom";
import sprite from "../../assets/img/sprite.svg";
// import { useState } from "react";
const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100">
      <div className="max-w-[1440px] w-full m-auto py-7 px-16 flex ">
        <div className="">
          <svg className="" width={136} height={16}>
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </div>
        <nav className="w-full xl:flex justify-center ">
          <ul className="flex justify-center items-center  gap-8">
            <li>
              <NavLink
                className={({ isActive }) =>
                  ` transition-all duration-300 hover:text-btn-red font-bold ${
                    isActive ? "text-btn-red" : "text-text-color"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-btn-red font-bold ${
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

    // <div className="min-h-screen bg-white flex">
    //   <div className="text-lg font-bold md:py-0 py-4">Logo</div>
    //   <nav className="flex px-4 border-b md:shadow-lg items-center relative">
    //     {/* Мобільне меню */}
    //     <button
    //       className="ml-auto md:hidden text-gray-500 cursor-pointer"
    //       onClick={() => setIsOpen(!isOpen)}
    //     >
    //       {isOpen ? (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-5 h-5 fill-current"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
    //         </svg>
    //       ) : (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-6 h-6 fill-current"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M3 6h18M3 12h18m-18 6h18" />
    //         </svg>
    //       )}
    //     </button>

    //     <ul
    //       className={`md:flex md:space-x-4 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent md:flex-row flex-col ${
    //         isOpen ? "block" : "hidden"
    //       }`}
    //     >
    //       <li>
    //         <a href="#" className="block md:inline-block p-4 hover:bg-gray-50">
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="block md:inline-block p-4 hover:bg-gray-50">
    //           Products
    //         </a>
    //       </li>
    //       <li className="relative group">
    //         <a
    //           href="#"
    //           className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2"
    //         >
    //           <span>Service</span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-4 h-4 fill-current pt-1"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
    //           </svg>
    //         </a>
    //         <ul className="hidden group-hover:block md:absolute top-full bg-white md:shadow-lg rounded-b w-full md:w-48">
    //           <li>
    //             <a href="#" className="block px-4 py-3 hover:bg-gray-50">
    //               Web Development
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="block px-4 py-3 hover:bg-gray-50">
    //               Web Design
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="block px-4 py-3 hover:bg-gray-50">
    //               Machine Learning
    //             </a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li>
    //         <a href="#" className="block md:inline-block p-4 hover:bg-gray-50">
    //           About Us
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
};
export default Header;
