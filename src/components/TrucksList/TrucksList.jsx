import TrucksItem from "../TrucksItem/TrucksItem";
import { useDispatch, useSelector } from "react-redux";
import LoadMoreButton from "../buttons/LoadMoreButton/LoadMoreButton";
import {
  selectCampers,
  selectIsLoading,
  selectIsError,
  selectPage,
  selectParams,
} from "../../redux/campers/selectors";
import { useEffect } from "react";
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
  if (!campers || campers.length === 0) return null;
  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <ul className="flex flex-col gap-3 md:gap-5 xl:gap-8">
            {campers.map((camper) => (
              <li key={camper.id}>
                <TrucksItem camperInfo={camper} />
              </li>
            ))}
          </ul>
          {!isError ? <LoadMoreButton /> : <p>Sorry, nothing found</p>}
        </div>
      )}
    </>
  );
};

export default TrucksList;
