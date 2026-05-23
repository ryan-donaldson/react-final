import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=d44ecacf&i=${id}`,
      );
      console.log(data);
      setMovie(data);
      setLoading(false);
    }
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      
      <div className="movie__details--wall">
        <Nav variant={"details"} />
        <div className="movie__details--row">
          <div className="movie__details--wrapper">
            <div className="movie-frame movie__details">
              <h1 className="movie__title">{movie.Title}</h1>
              <h2 className="movie__release--year">{movie.Year}</h2>
              <p className="rating">Rating: {movie.Rated}</p>
              <p className="runtime">Runtime: {movie.Runtime}</p>
              <p className="runtime">Genre: {movie.Genre}</p>
              <p className="runtime">Director: {movie.Director}</p>
              <p className="runtime">Box Office: {movie.BoxOffice}</p>
            </div>
            <div className="movie-frame movie__poster--wrapper">
              <img
                className="movie__poster"
                src={movie.Poster}
                alt={movie.Title}
              />
            </div>
            <div className="movie-frame movie__summary">
              <h2 className="summary__title">Plot Summary</h2>
              <p className="summary">{movie.Plot}</p>
            </div>
          </div>
        </div>
        <Footer variant={"details"} />
      </div>

      
      <div data-v-390ceb09="" className="overlay"></div>
    </>
  );
}

export default MovieDetails;
