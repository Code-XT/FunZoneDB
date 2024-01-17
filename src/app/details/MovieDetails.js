import React, { useEffect } from "react";
import { Transition } from "react-transition-group";

const MovieDetails = ({ additionalDetails, onClose }) => {
  const {
    title,
    overview,
    poster_path,
    genres,
    production_companies,
    release_date,
    runtime,
    vote_average,
    tagline,
    revenue,
    budget,
    spoken_languages,
    status,
  } = additionalDetails;

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
            onClick={onClose}
          ></div>

          <div
            className={`flex justify-center items-center transition-transform ${
              state === "entering" || state === "exiting"
                ? "opacity-0 scale-95"
                : "opacity-100 scale-100"
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden max-w-screen-xl mx-2 my-2 w-[calc(85vw-96px)] h-[calc(90vh-15px)] p-4 transform transition-transform">
              <div className="flex items-start max-h-full overflow-y-auto">
                <div className="rounded-md overflow-hidden w-1/3 mr-4">
                  <img
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-2/3">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-2xl font-semibold">{title}</h5>
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
                  <div className="max-h-40 overflow-y-auto mb-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      {overview}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5 mr-2 text-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        Genres: {genres.map((genre) => genre.name).join(", ")}
                      </p>
                      <p className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5 mr-2 text-green-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Runtime: {runtime} min
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5 mr-2 text-yellow-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a1 1 0 110 2 1 1 0 010-2zm0 2a1 1 0 110 2 1 1 0 010-2zm0 2a1 1 0 110 2 1 1 0 010-2zm0 2a1 1 0 110 2 1 1 0 010-2z"
                          />
                        </svg>
                        Vote Average: {vote_average}
                      </p>
                      <p className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5 mr-2 text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 10V3M12 21v-7M5 14h14M19 8H5"
                          />
                        </svg>
                        Release Date: {release_date}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h6 className="text-lg font-semibold mb-2">
                        Production Companies
                      </h6>
                      <p>
                        {production_companies
                          .map((company) => company.name)
                          .join(", ")}
                      </p>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold mb-2">Budget</h6>
                      <p>${budget}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h6 className="text-lg font-semibold mb-2">
                        Spoken Languages
                      </h6>
                      <p>
                        {spoken_languages
                          .map((language) => language.english_name)
                          .join(", ")}
                      </p>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold mb-2">Status</h6>
                      <p>{status}</p>
                    </div>
                  </div>
                  <div className="mt-4 max-h-40 mb-4 overflow-y-auto">
                    <h6 className="text-lg font-semibold mb-2">Tagline</h6>
                    <p>{tagline}</p>
                  </div>
                  <div className="mt-4 max-h-40 mb-4 overflow-y-auto">
                    <h6 className="text-lg font-semibold mb-2">Revenue</h6>
                    <p>${revenue}</p>
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

export default MovieDetails;
