import React from "react";
import Carousel from "../components/Carousel";
import CarouselTop from "../components/CarouselTop";
import { API_HOST, API_KEY } from "../constants/api";

const movies = () => {
  const movieUpcoming = `${API_HOST}/movie/upcoming?api_key=${API_KEY}`;
  const moviePopular = `${API_HOST}/movie/popular?api_key=${API_KEY}`;
  const seriePopular = `${API_HOST}/tv/popular?api_key=${API_KEY}`;
  const movieToprated = `${API_HOST}/movie/top_rated?api_key=${API_KEY}`;
  const movieAction = `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=28`;
  const movieAnimation = `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=16`;
  const movieComedy = `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=35`;
  return (
    <div className="container-page">
      <CarouselTop endpoint={movieUpcoming} />
      <Carousel endpoint={moviePopular} title="Peliculas mas populares" />
      <Carousel endpoint={seriePopular} title="Series mas populares" />
      <Carousel endpoint={movieToprated} title="Peliculas Top rated" />
      <Carousel endpoint={movieAnimation} title="Peliculas animadas" />
      <Carousel endpoint={movieComedy} title="Peliculas de comedia" />
      <Carousel endpoint={movieAction} title="Peliculas de accion" />
    </div>
  );
};

export default movies;
