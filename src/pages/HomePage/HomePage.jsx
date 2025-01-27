import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { fetchCatalog } from "../../redux/catalog/operations";
import { fetchCampers } from "../../redux/campers/operations";
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      <NavLink to="/about">About</NavLink>
      Home Page
    </div>
  );
};

export default HomePage;
