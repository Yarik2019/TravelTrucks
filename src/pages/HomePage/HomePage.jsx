import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { fetchCatalog } from "../../redux/catalog/operations";

import { fetchCampers } from "../../redux/campers/operations";
import CommonButton from "../../components/CommonButton/CommonButton";
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className="h-screen bg-[url('/assets/img/truck_bg.jpg')] bg-cover bg-center bg-no-repeat bg-retina">
      <div className="max-w-[1440px] m-auto h-full px-4 sm:px-8 md:px-16 flex flex-col justify-center">
        <div className="h-44">
          <h1 className="text-gray-100 text-4xl sm:text-5xl font-semibold leading-8 mb-4">
            Campers of your dreams
          </h1>
          <p className="text-gray-100 text-xl sm:text-2xl leading-8 font-semibold mb-10">
            You can find everything you want in our catalog
          </p>
          <CommonButton value={"View No"} redirect={"catalog"} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
