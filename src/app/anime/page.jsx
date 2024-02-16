"use client";
import { useState, useEffect } from "react";
import Card from "../cards/card";
import SearchBar from "../search";
import { MALSearch, TopMAL } from "../util/requests";

const Anime = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [searchType, setSearchType] = useState("anime");
  const [data, setData] = useState(null);

  const [isError, setIsError] = useState(false);

  const TopAM = searchType === "anime" ? "Top Anime" : "Top Manga";

  const search = async () => {
    try {
      const data = await MALSearch(searchTerm, searchType);
      setData(data);
    } catch (error) {
      setIsError(true);
    }
  };

  const top = async () => {
    const topData = await TopMAL(searchType === "anime" ? "anime" : "manga");
    setData(topData);
  };

  const handleSearchChange = (value) => {
    setsearchTerm(value);
    // console.log("Search Term:", value);
  };

  const handleSearchClick = () => {
    // Trigger the search when the icon is clicked
    if (searchTerm === "" || searchTerm === "\n" || searchTerm === "\r") top();
    else search();
  };

  const handleRadioChange = (event) => {
    setSearchType(event.target.value);
  };

  useEffect(() => {
    handleSearchClick();
  }, [searchType, searchTerm]);

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
        <div className="flex items-center space-x-4 ml-4">
          <label
            className={`relative cursor-pointer flex items-center ${
              searchType === "anime"
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-neutral-700"
            } rounded-md px-3 py-1 text-sm cursor-pointer`}
          >
            <input
              type="radio"
              name="searchType"
              value="anime"
              checked={searchType === "anime"}
              onChange={handleRadioChange}
              className="hidden"
            />
            Anime
          </label>
          <label
            className={`relative cursor-pointer flex items-center ${
              searchType === "manga"
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-neutral-700"
            } rounded-md px-3 py-1 text-sm cursor-pointer`}
          >
            <input
              type="radio"
              name="searchType"
              value="manga"
              checked={searchType === "manga"}
              onChange={handleRadioChange}
              className="hidden"
            />
            Manga
          </label>
        </div>
      </div>

      {searchTerm === "" ? (
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-semibold mb-6">{TopAM}</h2>
        </div>
      ) : (
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-semibold mb-6">Search Results</h2>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {data?.data?.map((title) => (
          <Card
            key={title?.mal_id}
            title={title?.title}
            image={title?.images?.jpg?.image_url}
            description={[
              `Type: ${title?.type}`,
              `Score: ${title?.score}`,
              searchType === "anime"
                ? `Duration: ${title?.duration}`
                : `Chapters: ${title?.chapters}`,
              searchType === "anime"
                ? `Episodes: ${title?.episodes}`
                : `Volumes: ${title?.volumes}`,
              `Genres: ${title?.genres?.map((genre) => genre.name).join(", ")}`,
            ]}
            data={title}
            source={"anime"}
            type={searchType}
          />
        ))}
      </div>
    </div>
  );
};

export default Anime;
