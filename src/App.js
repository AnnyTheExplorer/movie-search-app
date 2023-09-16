import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage.js";
import MovieDetailsPage from "./Components/MovieDetailsPage.js";
// import MoviesPage from "./Components/MoviesPage.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/movies/:id" Component={MovieDetailsPage} />
      </Routes>
    </Router>
  );
}

export default App;
