import { NavLink } from "react-router-dom";

const CommonButton = ({ value, redirect }) => {
  return (
    <NavLink
      className="bg-btn-red inline-block transition-all transform duration-300 hover:bg-hover-btn-red hover:scale-105 text-gray-100 px-[48px] py-[16px] rounded-[200px]"
      to={`/${redirect}`}
    >
      {value}
    </NavLink>
  );
};
export default CommonButton;
