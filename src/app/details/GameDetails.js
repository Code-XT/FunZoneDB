import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import "./GameDetails.css";

const GameDetails = ({ data, additionalDetails, onClose }) => {
  const {
    name,
    background_image,
    released,
    rating,
    ratings_count,
    playtime,
    genres,
    tags,
    short_screenshots,
  } = data;

  const {
    developers,
    description_raw,
    publishers,
    esrb_rating,
    metacritic,
    website,
    ratings,
    platforms,
    stores,
  } = additionalDetails;

  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleScreenshotChange = (index) => {
    setActiveScreenshotIndex(index);
  };

  const renderTags = () => {
    const englishTags = tags.filter((tag) => tag.language === "eng");

    if (englishTags.length > 0) {
      return (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h6 className="text-lg font-semibold mb-2">Tags</h6>
            <p>
              {englishTags.map((tag) => (
                <span key={tag.id} className="mr-2">
                  {tag.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderAdditionalDetails = () => {
    return (
      <div className="grid gap-4 mb-4">
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
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a1 1 0 110 2 1 1 0 010-2zm0 2a1 1 0 110 2 1 1 0 010-2zm0 2a1 1 0 110 2 1 1 0 010-2z"
              />
            </svg>
            Released: {released}
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            Playtime: {playtime} hours
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            Metacritic Score: {metacritic || "N/A"}
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            Ratings:{" "}
            {ratings.map((dev) => (
              <div key={dev.id} className="mx-2 my-2">
                {dev.title} {dev.percent}%
              </div>
            ))}
          </p>
          {/* Add more details from additionalDetails object here */}
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
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a1 1 0 110 2 1 1 0 010-2zm0 2a1 1 0 110 2 1 1 0 010-2zm0 2a1 1 0 110 2 1 1 0 010-2z"
              />
            </svg>
            Developer:{" "}
            {developers.map((dev) => (
              <p key={dev.id} className="mx-1">
                {dev.name}
              </p>
            ))}
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            Publisher:{" "}
            {publishers.map((dev) => (
              <p key={dev.id} className="mx-1">
                {dev.name}
              </p>
            ))}
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            ESRB Rating: {esrb_rating.name || "N/A"}
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              Website
            </a>
          </p>
        </div>
      </div>
    );
  };

  const getDescriptionSnippet = (description) => {
    const espanolIndex = description.toLowerCase().indexOf("español");
    if (espanolIndex !== -1) {
      // Stop description at Español
      return description.slice(0, espanolIndex);
    }
    // If Español not found, return the entire description
    return description;
  };

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
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden max-w-screen-xl mx-2 my-2 w-[calc(85vw-96px)] h-[calc(100vh-15px)] p-4 transform transition-transform">
              <div className="flex items-start max-h-full overflow-y-auto">
                <div className="flex items-start flex-wrap mt-5 w-full">
                  <div className="details-container w-1/2">
                    <div className="main-image-container mb-6">
                      <img
                        src={short_screenshots[activeScreenshotIndex].image}
                        alt={`${name}-screenshot-${activeScreenshotIndex}`}
                        className="object-cover w-full h-full rounded-md"
                      />
                    </div>
                    <div className="screenshot-container flex items-center item-center mr-10">
                      {short_screenshots.map((screenshot, index) => (
                        <div
                          key={index}
                          className={`screenshot ${
                            index === activeScreenshotIndex ? "active" : ""
                          }`}
                          style={{
                            backgroundImage: `url(${screenshot.image})`,
                          }}
                          onClick={() => handleScreenshotChange(index)}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col w-1/2">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-xl font-semibold">{name}</h5>
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
                    {renderAdditionalDetails()}
                    {renderTags()}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h6 className="text-lg font-semibold mb-2">Genres</h6>
                        <p>{genres?.map((genre) => genre.name).join(", ")}</p>
                      </div>
                      <div>
                        <h6 className="text-lg font-semibold mb-2">
                          Platforms
                        </h6>
                        <p>
                          {platforms?.map((platform) => (
                            <div key={platform.platform.id} className="mx-2">
                              {platform.platform.name} : {platform?.released_at}
                            </div>
                          ))}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h6 className="text-lg font-semibold mb-2">Stores</h6>
                        <p>
                          {stores?.map((store) => (
                            <span key={store.store.id} className="mr-2">
                              <a
                                href={`https://${store?.store?.domain}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline cursor-pointer"
                              >
                                {store.store.name}
                              </a>
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold mb-2">
                        Description
                      </h6>
                      <p className="text-gray-700 dark:text-gray-300">
                        {getDescriptionSnippet(description_raw)}
                      </p>
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

export default GameDetails;
