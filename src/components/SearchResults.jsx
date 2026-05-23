import React from "react";
import "./SearchResults.css";
import { Link } from "react-router-dom";

function SearchResults({ movies = [], loading, search, filter, onFilter, sortVersion }) {
  return (
    <>
      <section className="search__results">
        <div className="search__results--container">
          <div className="row">
            <div className="movies__header">
              <h2 className="section__title movies__header--title">
                {search ? `Search results for "${search}":` : "Search Results:"}
              </h2>
              <select id="filter" value={filter} onChange={(e) => onFilter(e.target.value)}>
                <option value="" disabled selected>
                  Sort
                </option>
                <option value="A_TO_Z">A to Z</option>
                <option value="Z_TO_A">Z to A</option>
                <option value="NEWEST_TO_OLDEST">Newest to Oldest</option>
                <option value="OLDEST_TO_NEWEST">Oldest to Newest</option>
              </select>
            </div>

            <div className={`movies ${loading ? "movies__loading" : ""}`}>
              {loading ? (
                <i className="fas fa-spinner movies__loading--spinner" key={0}></i>
              ) : (
                movies.slice(0, 6).map((movie) => (
                  <Link to={`/moviedetails/${movie.imdbID}`} className="movie" key={movie.imdbID + "-" + sortVersion}>
                    <div className="movie__poster--wrap">
                      <img src={movie.Poster} alt={movie.Title + " Poster"} className="movie__poster" /></div>
                    <div className="movie__details">
                      <div className="movie__title">{movie.Title}</div>
                      <div className="movie__release--year">{movie.Year}</div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchResults;
