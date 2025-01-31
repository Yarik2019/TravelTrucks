import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/campers/operations";
import {
  selectOneCamper,
  selectIsLoading,
} from "../../redux/campers/selectors";
import CamperCard from "../../components/CamperCard/CamperCard";
const CamperPage = () => {
  const dispatch = useDispatch();
  const camper = useSelector(selectOneCamper);
  const isLoading = useSelector(selectIsLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <div className="bg-white w-full">
      <div className="max-w-[1440px] w-full m-auto px-4 sm:px-8 md:px-16 flex justify-between items-center md:justify-start">
        <div className="w-full flex flex-col gap-5 md:gap-7 lg:gap-8 xl:gap-16 pb-8 md:pb-10 lg:pb-16 2xl:pb-20 pt-20 md:pt-24 xl:pt-[120px] 2xl:flex-row ">
          {isLoading ? <p>Loading...</p> : <CamperCard camper={camper} />}
        </div>
      </div>
    </div>
  );
};

export default CamperPage;
