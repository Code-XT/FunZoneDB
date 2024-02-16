"use client";
import { useState, useEffect } from "react";
import Card from "../cards/card";
import SearchBar from "../search";
import { GamesSearch } from "../util/requests";

const Games = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [searchType, setSearchType] = useState(["4"]);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);

  const search = async () => {
    try {
      const data = await GamesSearch(searchTerm, searchType);
      setData(data);
    } catch (error) {
      setIsError(true);
    }
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSearchType((prevSearchType) => {
      if (prevSearchType.includes(value)) {
        // Deselect if already selected
        return prevSearchType.filter((type) => type !== value);
      } else {
        // Select if not selected
        return [...prevSearchType, value];
      }
    });
  };

  const handleSearchChange = (value) => {
    setsearchTerm(value);
    // console.log("Search Term:", value);
  };

  const handleSearchClick = () => {
    // Trigger the search when the icon is clicked
    search();
  };

  useEffect(() => {
    search();
  }, [searchType]);

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
              searchType.includes("4")
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-neutral-700"
            } rounded-md px-3 py-1 text-sm cursor-pointer`}
          >
            <input
              type="checkbox"
              name="searchType"
              value="4"
              checked={searchType.includes("4")}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            PC
          </label>
          <label
            className={`relative cursor-pointer flex items-center ${
              searchType.includes("18")
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-neutral-700"
            } rounded-md px-3 py-1 text-sm cursor-pointer`}
          >
            <input
              type="checkbox"
              name="searchType"
              value="18"
              checked={searchType.includes("18")}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            PS4
          </label>
          <label
            className={`relative cursor-pointer flex items-center ${
              searchType.includes("187")
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-neutral-700"
            } rounded-md px-3 py-1 text-sm cursor-pointer`}
          >
            <input
              type="checkbox"
              name="searchType"
              value="187"
              checked={searchType.includes("187")}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            PS5
          </label>
          <label
            className={`relative cursor-pointer flex items-center ${
              searchType.includes("1")
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-neutral-700"
            } rounded-md px-3 py-1 text-sm cursor-pointer`}
          >
            <input
              type="checkbox"
              name="searchType"
              value="1"
              checked={searchType.includes("1")}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            XBOX One
          </label>
          <label
            className={`relative cursor-pointer flex items-center ${
              searchType.includes("186")
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-neutral-700"
            } rounded-md px-3 py-1 text-sm cursor-pointer`}
          >
            <input
              type="checkbox"
              name="searchType"
              value="186"
              checked={searchType.includes("186")}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            XBOX Series S/X
          </label>
          <label
            className={`relative cursor-pointer flex items-center ${
              searchType.includes("7")
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-neutral-700"
            } rounded-md px-3 py-1 text-sm cursor-pointer`}
          >
            <input
              type="checkbox"
              name="searchType"
              value="7"
              checked={searchType.includes("7")}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            Nintendo Switch
          </label>
          <label
            className={`relative cursor-pointer flex items-center ${
              searchType.includes("3")
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-neutral-700"
            } rounded-md px-3 py-1 text-sm cursor-pointer`}
          >
            <input
              type="checkbox"
              name="searchType"
              value="3"
              checked={searchType.includes("3")}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            iOS
          </label>
          <label
            className={`relative cursor-pointer flex items-center ${
              searchType.includes("21")
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-neutral-700"
            } rounded-md px-3 py-1 text-sm cursor-pointer`}
          >
            <input
              type="checkbox"
              name="searchType"
              value="21"
              checked={searchType.includes("21")}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            Android
          </label>
        </div>
      </div>
      {searchTerm === "" ? (
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-semibold mb-6">Popular Titles</h2>
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
              `Playtime: ${title.playtime} hours`,
              title.released ? `Released: ${title.released}` : "TBA",
              title.parent_platforms.length > 0
                ? `Platforms: ${title.parent_platforms
                    .map((platform) => platform.platform.name)
                    .join(", ")}`
                : "",
              `Genres: ${title.genres.map((genre) => genre.name).join(", ")}`,
              `Rating: ${title.rating}/5`,
            ]}
            image={title?.background_image}
            data={title}
            source={"game"}
          />
        ))}
      </div>
    </div>
  );
};

export default Games;
