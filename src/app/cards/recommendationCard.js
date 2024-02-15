import AnimeDetails from "../details/AnimeDetails";
import MovieDetails from "../details/MovieDetails";
import SeriesDetails from "../details/SeriesDetails";
import GameDetails from "../details/GameDetails";

const RecommendationCard = ({ title, image }) => {
  return (
    <div className="w-full">
      <img src={image} alt={title} className="object-cover w-full h-64" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default RecommendationCard;
