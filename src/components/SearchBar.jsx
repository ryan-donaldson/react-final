import React, { useState, useEffect } from "react";
import "./SearchBar.css";

function Search({ onSearch, initialValue }) {
  const [input, setInput] = useState(initialValue);

  // Sync input when SearchPage loads with a URL query
  useEffect(() => {
    setInput(initialValue);
  }, [initialValue]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSearch(input);
    }
  }

  function handleClick() {
    onSearch(input);
  }

  return (
    <>
      <div className="search__container">
        <div className="search__wrapper">
          <input
            id="searchMovieId"
            className="searchMovies"
            type="text"
            placeholder="Search by Title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="input__wrap">
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
      <div data-v-390ceb07="" className="overlay"></div>
    </>
  );
}

export default Search;
