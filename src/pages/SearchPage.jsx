import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav.jsx";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import Footer from "../components/Footer.jsx";
import "./SearchPage.css";
import { useLocation } from "react-router-dom";

function SearchPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [sortVersion, setSortVersion] = useState(0);

  async function getMovies(searchTerm) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=d44ecacf&s=${searchTerm}`,
    );
    return data.Search || [];
  }

  async function handleSearch(searchTerm) {
    setSearch(searchTerm);
    setLoading(true);

    const results = await getMovies(searchTerm);

    setMovies(results);
    setLoading(false);
  }

  function getYear(movie) {
    return parseInt(movie.Year) || 0;
  }

  function handleFilterChange(filterValue) {
    setFilter(filterValue);
    setSortVersion((v) => v + 1);

    const sorted = [...movies];

    if (filterValue === "A_TO_Z") {
      sorted.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (filterValue === "Z_TO_A") {
      sorted.sort((a, b) => b.Title.localeCompare(a.Title));
    } else if (filterValue === "NEWEST_TO_OLDEST") {
      sorted.sort((a, b) => getYear(b) - getYear(a));
    } else if (filterValue === "OLDEST_TO_NEWEST") {
      sorted.sort((a, b) => getYear(a) - getYear(b));
    }

    setMovies(sorted);
  }

  useEffect(() => {
    async function load() {
      if (search) {
        setLoading(true);
        const results = await getMovies(search);
        setMovies(results);
        setLoading(false);
      }
    }
    load();
  }, [search]);

  return (
    <>
      <Nav variant="search" />
      <SearchBar onSearch={handleSearch} initialValue={search} />
      <SearchResults
        movies={movies}
        loading={loading}
        search={search}
        filter={filter}
        onFilter={handleFilterChange}
        sortVersion={sortVersion}
      />
      <Footer />
    </>
  );
}

export default SearchPage;
