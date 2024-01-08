import React, { useState, useEffect } from "react";
import "./Header.css";
import { instance } from "../../Helper/APIendPoints";
import NavBar from "../Nav-bar/NavBar";

function Header({ singleEndpoint }) {
  const [bannerImage, setbannerImage] = useState([]);
  useEffect(() => {
    async function getBanner() {
      const APIrequest = await instance.get(singleEndpoint);
      //   console.log(APIrequest);
      const arylength = APIrequest.data.results.length;
      const aryIndex = Math.random() * arylength;
      setbannerImage(APIrequest.data.results[Math.floor(aryIndex)]);
      return APIrequest;
    }
    getBanner();
  }, []);
  //   console.log(bannerImage);
  const headerStyle = {
    backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${bannerImage.backdrop_path}")`,
  }; //Style to set the baner image

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n) + "..." : str;
  } //Method to hide some text

  return (
    <header className="header" style={headerStyle}>
      <NavBar />
      <div className="movie_detail">
        <h1 className="movie_title">
          {bannerImage.title || bannerImage.name || bannerImage.original_name}
        </h1>
        <div className="banner_buttons d-flex">
          <div className="banner_button1">
            <button>Play</button>
          </div>
          <div className="banner_button2">
            <button>More Info</button>
          </div>
        </div>
        <div className="movie_description">
          <div>{truncate(bannerImage.overview, 150)}</div>
        </div>
      </div>
      <div className="banner_gradiant" />
    </header>
  );
}
export default Header;
