"use client";
import React, { useState } from "react";

const SearchBar = ({ onSearchChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-neutral-700 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 transition-colors duration-300 w-96"
      />
      <div
        className="absolute top-2 right-3 cursor-pointer text-gray-500 dark:text-gray-400"
        onClick={handleSearchClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
