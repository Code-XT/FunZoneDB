import React, { useEffect } from "react";
import { Transition } from "react-transition-group";

const SeriesDetails = ({ title, description, image, data, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Transition in={true} timeout={300} unmountOnExit>
      {(state) => (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className={`fixed inset-0 bg-black bg-opacity-80 transition-opacity ${
              state === "entering" || state === "exiting"
                ? "opacity-0"
                : "opacity-100"
            }`}
          ></div>

          <div
            className={`flex justify-center items-center transition-transform ${
              state === "entering" || state === "exiting"
                ? "opacity-0 scale-95"
                : "opacity-100 scale-100"
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden max-w-screen-xl mx-2 my-2 w-[calc(85vw-96px)] h-[calc(100vh-15px)] p-4 transform transition-transform">
              <div className="flex items-start">
                <div className="rounded-md overflow-hidden w-1/3 mr-4">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-2/3">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-xl font-semibold">{title}</h5>
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={onClose}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="max-h-32 overflow-y-auto">
                    <h6 className="text-lg font-semibold mb-2">
                      Oops! 🙈 We're currently working on bringing you more
                      details about your favorite movies and series. The details
                      page is in development and will be live soon. Thank you
                      for your patience! In the meantime, feel free to explore
                      other features on our site. 🎬🍿
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default SeriesDetails;
