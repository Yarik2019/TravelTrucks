import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrucksItem from "../TrucksItem/TrucksItem";
import LoadMoreButton from "../buttons/LoadMoreButton/LoadMoreButton";
import Loader from "../Loader/Loader";
import {
  selectCampers,
  selectIsLoading,
  selectIsError,
  selectPage,
  selectParams,
} from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";

const TrucksList = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);
  const page = useSelector(selectPage);
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchCampers({ params, page }));
  }, [dispatch, page, params]);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50">
          <Loader height="50" width="50" />
        </div>
      )}

      {isError ? (
        <p className="text-center text-red-500">Sorry, nothing found.</p>
      ) : (
        <>
          <ul className="flex flex-col gap-3 md:gap-5 xl:gap-8">
            {campers.map((camper) => (
              <li key={camper.id}>
                <TrucksItem camperInfo={camper} />
              </li>
            ))}
          </ul>
          <LoadMoreButton />
        </>
      )}
    </div>
  );
};

export default TrucksList;
