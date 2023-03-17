import React from "react";
import Carousel from "../components/Carousel";
import CarouselTop from "../components/CarouselTop";
import { API_HOST, API_KEY } from "../constants/api";

const movies = () => {
  const moviePopular = `${API_HOST}/movie/popular?api_key=${API_KEY}`;
  const seriePopular = `${API_HOST}/tv/popular?api_key=${API_KEY}`;
  /* const moviePopular = `${API_HOST}/movie/popular?api_key=${API_KEY}`; */
  return (
    <div className="container-page">
      <CarouselTop />
      <Carousel endpoint={moviePopular} title="Peliculas mas populares" />
      <Carousel endpoint={seriePopular} title="Series mas populares" />
      <Carousel endpoint={moviePopular} title="Peliculas mas populares" />
    </div>
  );
};

export default movies;
