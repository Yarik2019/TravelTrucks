import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen  bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center text-white px-4 sm:px-8">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-extrabold mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Whoops! Page Not Found
        </h2>
        <p className="text-xl sm:text-2xl mb-6">
          Looks like you're lost in space.
        </p>
        <p className="text-lg sm:text-xl mb-6">
          Don't worry, it happens to the best of us. Let's get you back on
          track.
        </p>
        <NavLink
          to="/"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
