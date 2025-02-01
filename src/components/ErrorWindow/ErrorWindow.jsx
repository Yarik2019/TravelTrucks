import { useState } from "react";
import { Navigate } from "react-router-dom";

const ErrorWindow = () => {
  const [isError, setIsError] = useState(true);
  const [navigateToHome, setNavigateToHome] = useState(false);

  const handleHomePage = () => {
    setIsError(false);
    setNavigateToHome(true);
  };

  if (navigateToHome) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isError && (
        <div className="fixed inset-0 flex justify-center items-center bg-red-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 text-center relative">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={handleHomePage}
                className="text-red-500 hover:text-red-700 font-bold text-xl"
              >
                ×
              </button>
            </div>
            <div className="flex justify-center mb-4 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p className="text-xl font-semibold text-red-500 mb-4">
              Something went wrong!
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Please try again or contact us if the issue persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 mb-4"
            >
              Try Again
            </button>
            <div className="mt-4">
              <button
                onClick={handleHomePage}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorWindow;
