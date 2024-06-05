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
    metacritic_url,
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
        <div className=" gap-4 mb-4">
          <div>
            <h6 className="text-lg font-semibold mb-2">Tags</h6>
            <p>{englishTags.map((tag) => tag.name).join(", ")}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderAdditionalDetails = () => {
    return (
      <div className="grid grid-cols-2 gap-2 mb-2">
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="#3498db"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 mr-2 text-blue-500"
          >
            <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
            <line x1="7" y1="2" x2="7" y2="22" />
            <line x1="17" y1="2" x2="17" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="2" y1="7" x2="7" y2="7" />
            <line x1="2" y1="17" x2="7" y2="17" />
            <line x1="17" y1="7" x2="22" y2="7" />
            <line x1="17" y1="17" x2="22" y2="17" />
          </svg>
          Released: {released}
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="#27ae60"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 mr-2 text-green-500"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Playtime: {playtime} hours
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="#8e44ad"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 mr-2 text-purple-500"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2L12 22" />
            <path d="M18 6L6 18" />
          </svg>

          <a
            href={metacritic_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            Metacritic Score: {metacritic || "N/A"}
          </a>
        </p>

        <p className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 mr-2 text-red-500"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="8" y1="14" x2="16" y2="14" />
            <line x1="9" y1="9" x2="9" y2="14" />
            <line x1="15" y1="9" x2="15" y2="14" />
          </svg>
          Developer: {developers?.map((dev) => dev.name).join(", ")}
        </p>
        <p className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 mr-2 text-yellow-500"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="3" x2="9" y2="21" />
          </svg>
          Publisher: {publishers.map((dev) => dev.name).join(", ")}
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 mr-2 text-indigo-500"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          ESRB Rating: {esrb_rating.name || "N/A"}
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 mr-2 text-green-500"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="8" />
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
                      <div>
                        <h6 className="text-lg font-semibold mb-2">Ratings</h6>
                        <p>
                          {ratings.map((dev) => (
                            <React.Fragment key={dev.title}>
                              {dev.title} : {dev.percent}%
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4"></div>
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
