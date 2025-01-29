import TrucksList from "../../components/TrucksList/TrucksList";
import Filters from "../../components/Filters/Filters";
const CatalogPage = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1440px] w-full m-auto px-4 sm:px-8 py-4 sm:py-5 md:py-7 md:px-16 flex justify-between items-center md:justify-start">
        <div className="w-full flex flex-col gap-5 md:gap-7 lg:gap-8 xl:gap-16 pt-14 md:pt-16 xl:pt-24 2xl:flex-row ">
          <Filters />
          <TrucksList />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
