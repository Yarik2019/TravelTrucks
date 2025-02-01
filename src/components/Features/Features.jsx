import { useSelector } from "react-redux";
import { selectOneCamper } from "../../redux/campers/selectors.js";
import CamperFeature from "../CamperFeature/CamperFeature";
const Features = () => {
  const camperInfo = useSelector(selectOneCamper);
  const featureClass = true;
  const { form, length, width, height, tank, consumption } = camperInfo;
  return (
    <div className="w-full h-full py-5 px-3 lg:py-8 2xl:py-11 lg:px-8 2xl:px-[52px] bg-inputs rounded-[10px]">
      {/* md:mb-10 lg:mb-14 2xl:mb-[204px] */}
      <div className="h-[204px]">
        <CamperFeature camperInfo={camperInfo} featureClass={featureClass} />
      </div>
      <h3 className="text-xl font-semibold leading-tight text-text-color  mb-6">
        Vehicle equipment
      </h3>
      <div className="pt-px bg-gray-light mb-6"></div>
      <ul className="flex flex-col gap-4">
        <li className="flex justify-between font-medium">
          <p>Form</p>
          <p>{form}</p>
        </li>
        <li className="flex justify-between font-medium">
          <p>Length</p>
          <p>{length}</p>
        </li>
        <li className="flex justify-between font-medium">
          <p>Width</p>
          <p>{width}</p>
        </li>
        <li className="flex justify-between font-medium">
          <p>Height</p>
          <p>{height}</p>
        </li>
        <li className="flex justify-between font-medium">
          <p>Tank</p>
          <p>{tank}</p>
        </li>
        <li className="flex justify-between font-medium">
          <p>Consumption</p>
          <p>{consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
