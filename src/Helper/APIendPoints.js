//Creating a base URL using axios
import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export { instance };

//Creating API End points
const APIkey = "18ac39696b810f611f16a5ab11c5e6f4";

const endpoints = {
  NetflixOriginal: `/discover/tv?api_key=${APIkey}&with_networks=213`,
  TrendingMovies: `/trending/all/week?api_key=${APIkey}&language=en-US`,
  TopratedMovies: `/movie/top_rated?api_key=${APIkey}&language=en-US`,
  ActionMovies: `/discover/movie?api_key=${APIkey}&with_genres=28`,
  ComedyMovies: `/discover/movie?api_key=${APIkey}&with_genres=35`,
  HorrorMovies: `/discover/movie?api_key=${APIkey}&with_genres=27`,
  RomanceMovies: `/discover/movie?api_key=${APIkey}&with_genres=10749`,
  DocumentariesMovies: `/discover/movie?api_key=${APIkey}&with_genres=99`,
};
export default endpoints;
