"use client";
import { useState, useEffect } from "react";
import Card from "../cards/card";
import SearchBar from "../search";
import { MovTopRated, MovieSearch } from "../util/requests";

const Series = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const search = async () => {
    setIsLoading(true);
    try {
      const data = await MovieSearch(searchTerm, "tv");
      setData(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    console.log("Loading...");
  }

  const top = async () => {
    const topData = await MovTopRated("tv");
    setData(topData);
  };

  useEffect(() => {
    top();
  }, []);

  const handleSearchChange = (value) => {
    setsearchTerm(value);
    // console.log("Search Term:", value);
  };

  const handleSearchClick = () => {
    // Trigger the search when the icon is clicked
    search();
  };

  if (isError) {
    return <div>Error: Something went wrong</div>;
  }

  return (
    <div className="mt-4">
      <div className="flex items-center space-x-4 mb-4">
        <SearchBar
          onSearchChange={handleSearchChange}
          onSearch={handleSearchClick}
        />
      </div>
      {searchTerm === "" ? (
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-semibold mb-6">Top Rated TV Series</h2>
        </div>
      ) : (
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-semibold mb-6">Search Results</h2>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {data?.results?.map((title) => (
          <Card
            key={title.id}
            title={title.name}
            description={[
              `First Air: ${title.first_air_date}`,
              `Popularity: ${title.popularity}`,
              `Average Vote: ${title.vote_average}/10`,
            ]}
            image={`https://image.tmdb.org/t/p/original${title.poster_path}`}
            data={title}
            source={"tv"}
          />
        ))}
      </div>
    </div>
  );
};

export default Series;
