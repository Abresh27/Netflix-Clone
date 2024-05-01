import React from "react";
import Moviescategories from "./Components/Moviescategories/Moviescategories.jsx";
import endpoints from "./Helper/APIendPoints.js";
import Header from "./Components/Header/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header singleEndpoint={endpoints.NetflixOriginal} />
      <Moviescategories
        categoriesTitle="Netflix Original"
        singleEndpoint={endpoints.NetflixOriginal}
      />
      <Moviescategories
        categoriesTitle="Trending Now"
        singleEndpoint={endpoints.TrendingMovies}
      />
      <Moviescategories
        categoriesTitle="Top Rated"
        singleEndpoint={endpoints.TopratedMovies}
      />
      <Moviescategories
        categoriesTitle="Action"
        singleEndpoint={endpoints.ActionMovies}
      />
      <Moviescategories
        categoriesTitle="Comedies"
        singleEndpoint={endpoints.ComedyMovies}
      />
      <Moviescategories
        categoriesTitle="Horror"
        singleEndpoint={endpoints.HorrorMovies}
      />
      <Moviescategories
        categoriesTitle="Romance"
        singleEndpoint={endpoints.RomanceMovies}
      />
      <Moviescategories
        categoriesTitle="Documentaries"
        singleEndpoint={endpoints.DocumentariesMovies}
      />
    </>
  );
}

export default App;
