import React, { useEffect, useState } from "react";
import { API_HOST, API_KEY } from "../constants/api";
import apiFetchCarousel from "../utils/apiFetchCarousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CarouselTop = () => {
  const movieUpcoming = `${API_HOST}/movie/upcoming?api_key=${API_KEY}`;
  const imagePath = "https://image.tmdb.org/t/p/original/";
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { success, data, statusCode, code } = await apiFetchCarousel(
        movieUpcoming
      );

      setImages(data);
    })();
  }, []);

  console.log(images);
  if (!images) return;
  return (
    <div>
      <AliceCarousel
        items={images.map((item, index) => (
          <div key={index} className="item">
            <img src={`${imagePath}${item.backdrop_path}`} alt={item.title} />
            <h2>{item.title}</h2>
          </div>
        ))}
        autoPlay
        infinite
        autoPlayInterval={2000}
        buttonsDisabled={false}
        dotsDisabled={true}
        touchTracking={true}
        responsive={{
          320: {
            items: 4,
          },
        }}
      />
    </div>
  );
};

export default CarouselTop;

/* const movieUpcoming = `${API_HOST}/movie/upcoming&api_key=${API_KEY}`;
  const movieTopRated = `${API_HOST}/movie/top_rated&api_key=${API_KEY}`;
  const movieAction = `${API_HOST}7discover/movie&api_key=${API_KEY}&with_genres=28`;
  const movieAnimation = `${API_HOST}7discover/movie&api_key=${API_KEY}&with_genres=16`;
  const movieComedy = `${API_HOST}7discover/movie&api_key=${API_KEY}&with_genres=35`; */
