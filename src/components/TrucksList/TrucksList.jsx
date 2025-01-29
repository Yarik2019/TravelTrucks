import TrucksItem from "../TrucksItem/TrucksItem";
const TrucksList = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 xl:gap-8">
      <TrucksItem />
      <TrucksItem />
      <TrucksItem />
      <TrucksItem />
    </div>
  );
};

export default TrucksList;
