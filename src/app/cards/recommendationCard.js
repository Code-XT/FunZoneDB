const RecommendationCard = ({ title, image, cardKey }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden group mr-4 mx-0">
      <div
        className={`group-hover:filter group-hover:brightness-80 group-hover:blur-5 transition-all duration-300`}
      >
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-40 sm:h-56 md:h-64"
        />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-40 opacity-0 ${cardKey} group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center`}
      >
        <h5 className="text-xl font-semibold text-white text-center">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default RecommendationCard;
