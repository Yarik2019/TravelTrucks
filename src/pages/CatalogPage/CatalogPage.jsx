import { useSelector } from "react-redux";
import Filters from "../../components/Filters/Filters";
import TrucksList from "../../components/TrucksList/TrucksList";
import Loader from "../../components/Loader/Loader";
import { selectIsLoading, selectIsError } from "../../redux/campers/selectors";
import ErrorWindow from "../../components/ErrorWindow/ErrorWindow";

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <div className="bg-white w-full min-h-screen relative">
      {isLoading && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-100 z-50">
          <Loader height="60" width="60" />
        </div>
      )}
      {isError && <ErrorWindow />}
      <div className="max-w-[1440px] w-full m-auto px-4 sm:px-8 md:px-16">
        <div className="w-full flex flex-col gap-5 md:gap-7 lg:gap-8 xl:gap-16 pt-20 xl:pt-[120px] 2xl:flex-row">
          <Filters />
          <TrucksList />
        </div>
      </div>
    </div>
  );
};
export default CatalogPage;
