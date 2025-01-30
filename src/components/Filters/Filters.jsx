import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import SubmitBtn from "../buttons/SubmitBtn/SubmitBtn.jsx";
import { setParams } from "../../redux/campers/slice.js";
import { selectIsLoading } from "../../redux/campers/selectors.js";
import sprite from "../../assets/img/sprite.svg";
const Filters = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const locations = [
    "Kyiv, Ukraine",
    "Poltava, Ukraine",
    "Dnipro, Ukraine",
    "Odesa, Ukraine",
    "Kharkiv, Ukraine",
    "Sumy, Ukraine",
    "Lviv, Ukraine",
  ];
  const handleSubmit = (values) => {
    const params = new URLSearchParams();

    if (values.vehicleEquipment.length) {
      values.vehicleEquipment.map((item) => {
        if (item === "automatic") {
          params.append("transmission", item);
        } else {
          params.append(item, true);
        }
      });
    }

    if (values.vehicleType) {
      params.append("form", values.vehicleType);
    }

    if (values.location) {
      params.append("location", values.location.split(", ")[0]);
    }

    const queryString = params.toString();

    dispatch(setParams(queryString));
  };
  return (
    <Formik
      initialValues={{ location: "", vehicleEquipment: [], vehicleType: "" }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="w-full 2xl:max-w-[360px]">
          <div className="mb-4 md:mb-5 xl:mb-10">
            <label className="">
              <p className="text-base font-semibold text-gray leading-normal mb-2">
                Location
              </p>
              <div className="relative">
                <Field
                  as="select"
                  name="location"
                  className="w-full border-none bg-inputs py-[18px] pl-12 outline-none p-2 rounded-[12px] cursor-pointer appearance-none font-normal"
                >
                  <option value="">All Locations</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </Field>
                <svg
                  className="absolute left-5 top-2/4 translate-y-[-50%]"
                  width={20}
                  height={20}
                >
                  <use href={`${sprite}#icon-map`}></use>
                </svg>
              </div>
            </label>
          </div>
          <h3 className="text-base font-medium leading-normal text-[#475467] mb-3 md:mb-5 xl:mb-8">
            Filters
          </h3>

          <div className="flex flex-col w-full mb-5 sm:flex-row sm:gap-10 xl:gap-0 xl:flex-col xl:mb-10">
            <div className="mb-5 xl:mb-8">
              <h3 className="text-xl font-semibold leading-tight text-text-color mb-6">
                Vehicle equipment
              </h3>
              <div className="pt-px bg-gray-100 mb-6"></div>
              <ul className="flex flex-wrap gap-y-2 gap-x-3">
                <li>
                  <label
                    className={`w-28 min-h-[96px] flex flex-col items-center justify-center border-solid border-[1px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105
                  ${
                    values.vehicleEquipment.includes("AC")
                      ? "border-btn-red"
                      : "border-gray-light"
                  }`}
                  >
                    <Field
                      type="checkbox"
                      name="vehicleEquipment"
                      value="AC"
                      className="hidden"
                    />
                    <svg className="w-8 h-8">
                      <use href={`${sprite}#AC`}></use>
                    </svg>
                    <p className="text-base font-medium text-text-color mt-2">
                      AC
                    </p>
                  </label>
                </li>
                <li>
                  <label
                    className={`w-28 min-h-[96px] flex flex-col items-center justify-center border-solid border-[1px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105
                  ${
                    values.vehicleEquipment.includes("automatic")
                      ? "border-btn-red"
                      : "border-gray-light"
                  }`}
                  >
                    <Field
                      type="checkbox"
                      name="vehicleEquipment"
                      value="automatic"
                      className="hidden"
                    />
                    <svg className="w-8 h-8">
                      <use href={`${sprite}#automatic`}></use>
                    </svg>
                    <p className="text-base font-medium text-text-color mt-2">
                      Automatic
                    </p>
                  </label>
                </li>
                <li>
                  <label
                    className={`w-28 min-h-[96px] flex flex-col items-center justify-center border-solid border-[1px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105
                  ${
                    values.vehicleEquipment.includes("kitchen")
                      ? "border-btn-red"
                      : "border-gray-light"
                  }`}
                  >
                    <Field
                      type="checkbox"
                      name="vehicleEquipment"
                      value="kitchen"
                      className="hidden"
                    />
                    <svg className="w-8 h-8">
                      <use href={`${sprite}#kitchen`}></use>
                    </svg>
                    <p className="text-base font-medium text-text-color mt-2">
                      Kitchen
                    </p>
                  </label>
                </li>
                <li>
                  <label
                    className={`w-28 min-h-[96px] flex flex-col items-center justify-center border-solid border-[1px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105
                  ${
                    values.vehicleEquipment.includes("TV")
                      ? "border-btn-red"
                      : "border-gray-light"
                  }`}
                  >
                    <Field
                      type="checkbox"
                      name="vehicleEquipment"
                      value="TV"
                      className="hidden"
                    />
                    <svg className="w-8 h-8">
                      <use href={`${sprite}#TV`}></use>
                    </svg>
                    <p className="text-base font-medium text-text-color mt-2">
                      TV
                    </p>
                  </label>
                </li>
                <li>
                  <label
                    className={`w-28 min-h-[96px] flex flex-col items-center justify-center border-solid border-[1px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105
                  ${
                    values.vehicleEquipment.includes("bathroom")
                      ? "border-btn-red"
                      : "border-gray-light"
                  }`}
                  >
                    <Field
                      type="checkbox"
                      name="vehicleEquipment"
                      value="bathroom"
                      className="hidden"
                    />
                    <svg className="w-8 h-8">
                      <use href={`${sprite}#bathroom`}></use>
                    </svg>
                    <p className="text-base font-medium text-text-color mt-2">
                      Bathroom
                    </p>
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-tight text-text-color mb-6">
                Vehicle type
              </h3>
              <div className="pt-px bg-gray-100 mb-6"></div>
              <ul className="flex flex-wrap gap-y-2 gap-x-3">
                <li>
                  <label
                    className={`w-28 min-h-[96px] flex flex-col items-center justify-center border-[1px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105
                  ${
                    values.vehicleType === "panelTruck"
                      ? "border-btn-red"
                      : "border-gray-light"
                  }`}
                  >
                    <Field
                      type="radio"
                      name="vehicleType"
                      value="panelTruck"
                      className="sr-only"
                    />
                    <svg className="w-8 h-8">
                      <use href={`${sprite}#icon-bi-grid`}></use>
                    </svg>
                    <p className="text-base font-medium text-text-color mt-2">
                      Van
                    </p>
                  </label>
                </li>
                <li>
                  <label
                    className={`w-28 min-h-[96px] flex flex-col items-center justify-center border-[1px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105
                  ${
                    values.vehicleType === "fullyIntegrated"
                      ? "border-btn-red"
                      : "border-gray-light"
                  }`}
                  >
                    <Field
                      type="radio"
                      name="vehicleType"
                      value="fullyIntegrated"
                      className="sr-only"
                    />
                    <svg className="w-8 h-8">
                      <use href={`${sprite}#icon-bi-grid-4`}></use>
                    </svg>
                    <p className="text-base font-medium text-center text-text-color mt-2">
                      Fully Integrated
                    </p>
                  </label>
                </li>
                <li>
                  <label
                    className={`w-28 min-h-[96px] flex flex-col items-center justify-center border-[1px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105
                  ${
                    values.vehicleType === "alcove"
                      ? "border-btn-red"
                      : "border-gray-light"
                  }`}
                  >
                    <Field
                      type="radio"
                      name="vehicleType"
                      value="alcove"
                      className="sr-only"
                    />
                    <svg className="w-8 h-8">
                      <use href={`${sprite}#icon-bi-grid-9`}></use>
                    </svg>
                    <p className="text-base font-medium text-text-color mt-2">
                      Alcove
                    </p>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <SubmitBtn isLoading={isLoading} value="Search" />
        </Form>
      )}
    </Formik>
  );
};

export default Filters;
