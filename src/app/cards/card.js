import React, { useState } from "react";
import AnimeDetails from "../details/AnimeDetails";
import MovieDetails from "../details/MovieDetails";
import SeriesDetails from "../details/SeriesDetails";
import GameDetails from "../details/GameDetails";

const Card = ({ title, description, image, data, source }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const getCategoryDetails = () => {
    // Identify the category based on additionalInfo or any other criterion
    const category = source.toLowerCase();

    // Return the corresponding Details component
    switch (category) {
      case "anime":
        return (
          <AnimeDetails
            data={data}
            title={title}
            description={description}
            image={image}
            onClose={() => setShowDetails(false)}
          />
        );
      case "movie":
        return (
          <MovieDetails
            data={data}
            title={title}
            description={description}
            image={image}
            onClose={() => setShowDetails(false)}
          />
        );
      case "tv":
        return (
          <SeriesDetails
            data={data}
            title={title}
            description={description}
            image={image}
            onClose={() => setShowDetails(false)}
          />
        );
      case "game":
        return (
          <GameDetails
            data={data}
            title={title}
            description={description}
            image={image}
            onClose={() => setShowDetails(false)}
          />
        );
      // Add more cases for other categories if needed
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden group mr-4 mx-0">
      <div className="group-hover:filter group-hover:brightness-80 group-hover:blur-5 transition-all duration-300">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-40 sm:h-56 md:h-64"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col justify-center items-center h-full text-white">
          <h5 className="text-xl font-semibold mb-2 mx-1">{title}</h5>
        </div>
      </div>
      <div
        className="p-4 cursor-pointer"
        style={{
          backdropFilter: "blur(10px)",
        }}
        onClick={handleDetailsClick}
      >
        <div className="max-h-32 overflow-y-auto mb-4">
          {description.map((line, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Details component */}
      {showDetails && getCategoryDetails()}
    </div>
  );
};

export default Card;
