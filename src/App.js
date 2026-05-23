import SearchPage from "./pages/SearchPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/searchpage" element={<SearchPage />}></Route>
          <Route path="/moviedetails/:id" element={<MovieDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
