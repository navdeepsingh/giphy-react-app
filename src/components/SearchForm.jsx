import React, { useState, useEffect } from "react";
import { API_URL_SEARCH, API_URL_TRENDING, API_KEY } from "../constants";

const SearchForm = ({ setImages }) => {
  const [query, setQuery] = useState("");
  const inputRef = React.createRef();

  const handleOnClick = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    setQuery(query);
  };

  const handleTrending = (e) => {
    e.preventDefault();
    setQuery("trending");
  };

  useEffect(() => {
    if (query) {
      const apiCall = query === "trending" ? API_URL_TRENDING : API_URL_SEARCH;

      fetch(`${apiCall}?api_key=${API_KEY}&q=${query}`)
        .then((response) => response.json())
        .then(({ data }) => {
          console.log(data);
          setImages(data);
        });
    }
  }, [query, setImages]);

  return (
    <div>
      <form noValidate>
        <input
          type="text"
          placeholder="Enter keywords"
          ref={inputRef}
          data-cy="input-text"
        />
        <button type="button" onClick={handleOnClick} data-cy="input-button">
          SEARCH
        </button>
      </form>
      {/* Trending */}
      <button onClick={handleTrending} data-cy="trendings-button">
        Trendings
      </button>
    </div>
  );
};

export default SearchForm;
