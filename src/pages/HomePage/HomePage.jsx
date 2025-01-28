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
    <div
      style={{ backgroundImage: "url('../../assets/img/truck_bg.jpg')" }}
      className="h-screen bg-cover bg-center bg-no-repeat bg-retina"
    >
      <div className="max-w-[1440px] m-auto h-full px-16 flex flex-col justify-center">
        <div className="h-[176px]">
          <h1 className="text-gray-100 text-[48px] font-semibold leading-[32px] mb-4">
            Campers of your dreams
          </h1>
          <p className="text-gray-100  text-[24px] leading-[32px] font-semibold mb-[40px]">
            You can find everything you want in our catalog
          </p>
          <CommonButton value={"View No"} redirect={"catalog"} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
