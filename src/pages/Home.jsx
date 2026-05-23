import React from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/SearchBar.jsx";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleHomeSearch(term) {
    navigate(`/searchpage?search=${encodeURIComponent(term)}`);
  }

  return <>
    <Nav variant="home"/>
      <div className="home__description">
        <h2 className="home__description--welcome marquee__text">
          Welcome to The Movie Room!
        </h2>
        <p className="home__description--text marquee__text">
          Here you can search for movies, learn more about them, and discover old classics!
        </p>
      </div>
      <SearchBar onSearch={handleHomeSearch}/>
    <Footer variant="home"/>
    <div data-v-390ceb08="" className="overlay"></div>
  </>;
}

export default Home;
