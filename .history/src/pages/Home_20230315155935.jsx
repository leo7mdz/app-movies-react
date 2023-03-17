import React from "react";
import Carousel from "../components/Carousel";
import CarouselTop from "../components/CarouselTop";
import { API_HOST, API_KEY } from "../constants/api";

const movies = () => {
  const movieTopRated = `${API_HOST}/movie/popular&api_key=${API_KEY}`;
  return (
    <div className="container-page">
      <CarouselTop />
      <Carousel />
    </div>
  );
};

export default movies;
