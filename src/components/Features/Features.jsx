import { useLocation } from "react-router-dom";
import CamperFeature from "../CamperFeature/CamperFeature";
const Features = () => {
  const location = useLocation();
  const featuresData = location.state?.data;
  console.log(featuresData);
  return (
    <div className="w-full h-full py-5 px-3 lg:py-8 2xl:py-11 lg:px-8 2xl:px-[52px] bg-inputs rounded-[10px]">
      <div className="md:mb-10 lg:mb-14 2xl:mb-[100px]">
        <CamperFeature camperInfo={featuresData} />
      </div>
      <h3 className="text-xl font-semibold leading-tight text-text-color mb-6">
        Vehicle equipment
      </h3>
      <div className="pt-px bg-gray-light mb-6"></div>
      <ul className="flex flex-col gap-3 md:gap-5 lg:gap-6">
        <li className="flex justify-between mb-4">
          <h3 className="text-base font-medium leading-1.5 text-[#101828]">
            From
          </h3>
          <p className="text-base font-medium leading-1.5 text-[#101828]">
            {featuresData?.form}
          </p>
        </li>
        <li className="flex justify-between mb-4">
          <h3 className="text-base font-medium leading-1.5 text-[#101828]">
            Length
          </h3>
          <p className="text-base font-medium leading-1.5 text-[#101828]">
            {featuresData?.length}
          </p>
        </li>
        <li className="flex justify-between mb-4">
          <h3 className="text-base font-medium leading-1.5 text-[#101828]">
            Width
          </h3>
          <p className="text-base font-medium leading-1.5 text-[#101828]">
            {featuresData?.width}
          </p>
        </li>
        <li className="flex justify-between mb-4">
          <h3 className="text-base font-medium leading-1.5 text-[#101828]">
            Height
          </h3>
          <p className="text-base font-medium leading-1.5 text-[#101828]">
            {featuresData?.height}
          </p>
        </li>
        <li className="flex justify-between mb-4">
          <h3 className="text-base font-medium leading-1.5 text-[#101828]">
            Tank
          </h3>
          <p className="text-base font-medium leading-1.5 text-[#101828]">
            {featuresData?.tank}
          </p>
        </li>
        <li className="flex justify-between">
          <h3 className="text-base font-medium leading-1.5 text-[#101828]">
            Consumption
          </h3>
          <p className="text-base font-medium leading-1.5 text-[#101828]">
            {featuresData?.consumption}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
