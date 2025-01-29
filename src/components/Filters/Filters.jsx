import { useState } from "react";
import sprite from "../../assets/img/sprite.svg";
const Filters = () => {
  const [isActive, setIsActive] = useState({});

  const vehicleEquipment = [
    { id: "ac", icon: "icon-wind", label: "AC" },
    { id: "automatic", icon: "icon-diagram", label: "Automatic" },
    { id: "kitchen", icon: "icon-cup-hot", label: "Kitchen" },
    { id: "tv", icon: "icon-tv", label: "TV" },
    { id: "bathroom", icon: "icon-ph-shower", label: "Bathroom" },
  ];

  const vehicleType = [
    { id: "van", icon: "icon-bi-grid", label: "Van" },
    { id: "integrated", icon: "icon-bi-grid-4", label: "Fully Integrated" },
    { id: "alcove", icon: "icon-bi-grid-9", label: "Alcove" },
  ];
  const toggleIsActive = (active) => {
    setIsActive((prev) => ({
      ...prev,
      [active]: !prev[active],
    }));
  };
  return (
    <div className="w-full 2xl:max-w-[360px]">
      <div className="mb-4 md:mb-5 xl:mb-10">
        <h3 className="text-base font-semibold text-[#6c717b] leading-normal	 mb-2">
          Location
        </h3>
        <div className="mt-2">
          <input
            type="text"
            placeholder="search city"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <h3 className="text-base font-medium leading-normal text-[#475467] mb-3 md:mb-5 xl:mb-8">
        Filters
      </h3>

      <div className="flex flex-col w-full mb-5 sm:flex-row sm:gap-10 xl:gap-0 xl:flex-col xl:mb-10">
        <div className="mb-5 xl:mb-8">
          <h2 className="text-xl font-semibold leading-tight text-text-color mb-6">
            Vehicle equipment
          </h2>
          <div className="pt-px bg-gray-100 mb-6"></div>
          <ul className="flex flex-wrap gap-y-2 gap-x-3">
            {vehicleEquipment.map(({ id, icon, label }) => (
              <li key={id}>
                <button
                  onClick={() => toggleIsActive(id)}
                  className={`w-28 min-h-[96px] flex flex-col items-center justify-center border-solid border-[1px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105
                  ${isActive[id] ? "border-[#e44848]" : "border-[#dadde1]"}`}
                >
                  <svg className="w-8 h-8">
                    <use href={`${sprite}#${icon}`}></use>
                  </svg>
                  <p className="text-base font-medium text-text-color mt-2">
                    {label}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold leading-tight text-text-color mb-6">
            Vehicle type
          </h2>
          <div className="pt-px bg-gray-100 mb-6"></div>
          <ul className="flex flex-wrap gap-y-2 gap-x-3">
            {vehicleType.map(({ id, icon, label }) => (
              <li key={id}>
                <button
                  onClick={() => toggleIsActive(id)}
                  className={`w-28 min-h-[96px] flex flex-col items-center justify-center border-[1px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105
                  ${isActive[id] ? "border-[#e44848] " : "border-[#dadde1]"}`}
                >
                  <svg className="w-8 h-8">
                    <use href={`${sprite}#${icon}`}></use>
                  </svg>
                  <p className="text-base font-medium text-text-color mt-2">
                    {label}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="w-full bg-btn-red inline-block text-gray-100 px-[48px] py-[16px] rounded-[200px] transition-transform transform hover:scale-105 sm:w-[166px]">
        Search
      </button>
    </div>
  );
};

export default Filters;
