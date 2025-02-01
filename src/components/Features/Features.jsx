import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectOneCamper,
} from "../../redux/campers/selectors.js";
import CamperFeature from "../CamperFeature/CamperFeature";
import Loader from "../Loader/Loader.jsx";

const Features = () => {
  const camperInfo = useSelector(selectOneCamper) || {}; // Захист від null/undefined
  const isLoading = useSelector(selectIsLoading);
  const featureClass = true;

  // Безпечний доступ до властивостей
  const {
    form = "N/A",
    length = "N/A",
    width = "N/A",
    height = "N/A",
    tank = "N/A",
    consumption = "N/A",
  } = camperInfo;

  const features = [
    { label: "Form", value: form },
    { label: "Length", value: length },
    { label: "Width", value: width },
    { label: "Height", value: height },
    { label: "Tank", value: tank },
    { label: "Consumption", value: consumption },
  ];

  return (
    <>
      {isLoading ? (
        <div className="h-full flex justify-center items-center">
          <Loader height="40" width="40" />
        </div>
      ) : (
        <div className="w-full h-full py-5 px-3 lg:py-8 2xl:py-11 lg:px-8 2xl:px-[52px] bg-inputs rounded-[10px]">
          <div className="h-[204px]">
            <CamperFeature
              camperInfo={camperInfo}
              featureClass={featureClass}
            />
          </div>
          <h3 className="text-xl font-semibold leading-tight text-text-color mb-6">
            Vehicle equipment
          </h3>
          <div className="pt-px bg-gray-light mb-6"></div>
          <ul className="flex flex-col gap-4">
            {features.map(({ label, value }) => (
              <li key={label} className="flex justify-between font-medium">
                <p>{label}</p>
                <p>{value}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Features;
