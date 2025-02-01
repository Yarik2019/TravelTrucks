import { BallTriangle } from "react-loader-spinner";

const Loader = ({ height = 40, width = 40, color = "#e44848", radius = 5 }) => {
  return (
    <BallTriangle
      height={height}
      width={width}
      radius={radius}
      color={color}
      ariaLabel="ball-triangle-loading"
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
