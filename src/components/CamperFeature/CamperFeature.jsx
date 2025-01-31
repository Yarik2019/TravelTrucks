import sprite from "../../assets/img/sprite.svg";

const CamperFeature = ({ camperInfo }) => {
  const allowedFeatures = [
    "automatic",
    "diesel",
    "AC",
    "bathroom",
    "TV",
    "radio",
    "microwave",
    "water",
  ];
  const feature = Object.entries(camperInfo)
    .filter(([key, value]) => allowedFeatures.includes(key) && value)
    .map(([key]) => key);

  return (
    <ul className="flex flex-wrap gap-2 mb-5 xl:mb-7">
      {feature.map((item, i) => (
        <li className="flex bg-gray-100 rounded-3xl py-3 px-[18px]" key={i}>
          <svg
            className={`w-5 h-5 ${
              ["microwave", "water"].includes(item)
                ? "fill-transparent stroke-black"
                : ""
            }`}
          >
            <use href={`${sprite}#${item}`} />
          </svg>
          <p className="text-base font-medium text-text-color ml-2">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </p>
        </li>
      ))}
    </ul>
  );
};
export default CamperFeature;
