import React, { useState, useEffect } from "react";
import "./Moviescategories.css";
import { instance } from "../../Helper/APIendPoints";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Moviescategories({ categoriesTitle, singleEndpoint }) {
  const [movieList, setMovielist] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  //YouTube player properties
  const options = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  useEffect(() => {
    async function getData() {
      const APIrequest = await instance.get(singleEndpoint);
      // console.log(APIrequest);
      setMovielist(APIrequest.data.results);
      return APIrequest;
    }
    getData();
  }, [singleEndpoint]);
  // console.log(movieList);

  //Function to handle the click event to get the movie trailer URL
  function handleClick(movie) {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((videoURL) => {
          // console.log(videoURL);
          const urlParams = new URLSearchParams(new URL(videoURL).search);
          // console.log(urlParams);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.error("error featching trailre:", error));
    }
  }

  return (
    <section className="categories_conatiner">
      <h2>{categoriesTitle}</h2>
      <div className="categories_posters_container">
        {movieList.map((movie, index) => {
          let fristRow = categoriesTitle === "Netflix Original";
          let posterPath = fristRow ? movie.poster_path : movie.backdrop_path;
          let posterURL = `https://image.tmdb.org/t/p/original/${posterPath}`;
          return (
            <div key={index} className="categories_posters">
              <img
                onClick={() => handleClick(movie)}
                className={`poster ${fristRow ? "poster_maximized" : ""}`}
                src={posterURL}
                alt={movie.name}
              />
            </div>
          );
        })}
      </div>
      <div className="trailerPlayer">
        {/* YouTube video player to play the movie trailer */}
        {trailerURL && <YouTube videoId={trailerURL} opts={options} />}
      </div>
    </section>
  );
}

export default Moviescategories;
