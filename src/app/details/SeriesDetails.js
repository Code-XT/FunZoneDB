import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import RecommendationCard from "../cards/recommendationCard";
import { MovRecommend } from "../util/requests";

const SeriesDetails = ({ additionalDetails, onClose }) => {
  const {
    id,
    name,
    overview,
    poster_path,
    genres,
    production_companies,
    first_air_date,
    last_air_date,
    number_of_episodes,
    number_of_seasons,
    languages,
    networks,
    seasons,
    popularity,
    status,
    vote_average,
    vote_count,
    homepage,
  } = additionalDetails;

  const [recommendations, setRecommendations] = useState(null);

  const fetchRecommendations = async () => {
    try {
      const recommendationsData = await MovRecommend(id, "tv");
      setRecommendations(recommendationsData);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

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
                    alt={name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-2/3">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-2xl font-semibold">{name}</h5>
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
                        First Air Date: {first_air_date}
                      </p>
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
                        Number of Episodes: {number_of_episodes}
                      </p>
                    </div>
                    <div>
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
                        Last Air Date: {last_air_date}
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
                        Number of Seasons: {number_of_seasons}
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
                      <h6 className="text-lg font-semibold mb-2">Languages</h6>
                      <p>{languages.join(", ")}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h6 className="text-lg font-semibold mb-2">Networks</h6>
                      <p>
                        {networks.map((network) => (
                          <span key={network.id} className="flex items-center">
                            <img
                              src={`https://image.tmdb.org/t/p/original${network.logo_path}`}
                              alt={network.name}
                              className="h-6 w-6 mr-2"
                            />
                            {network.name}
                          </span>
                        ))}
                      </p>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold mb-2">Status</h6>
                      <p>{status}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h6 className="text-lg font-semibold mb-2">Seasons</h6>
                      <ul>
                        {seasons.map((season) => (
                          <li key={season.id}>
                            <span className="flex items-center">
                              <span className="mr-2">
                                {season.air_date ? (
                                  <span>
                                    {season.name} - {season.air_date}
                                  </span>
                                ) : (
                                  season.name
                                )}
                              </span>
                              <span className="text-gray-500">
                                {season.episode_count} episodes
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold mb-2">Popularity</h6>
                      <p>{popularity}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h6 className="text-lg font-semibold mb-2">
                        Vote Average
                      </h6>
                      <p>{vote_average}</p>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold mb-2">Vote Count</h6>
                      <p>{vote_count}</p>
                    </div>
                  </div>
                  <div className="mt-4 max-h-40 mb-4 overflow-y-auto">
                    <h6 className="text-lg font-semibold mb-2">Homepage</h6>
                    <a
                      href={homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline cursor-pointer"
                    >
                      Visit Homepage
                    </a>
                  </div>
                  <div className="mt-4">
                    <h6 className="text-lg font-semibold mb-2">
                      Recommendations
                    </h6>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                      {recommendations?.results?.slice(0, 8).map((title) => (
                        <RecommendationCard
                          title={title?.name}
                          image={`https://image.tmdb.org/t/p/original${title?.poster_path}`}
                          votes={title?.vote_count}
                        />
                      ))}
                    </div>
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
