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

      const firstSeven = data.slice(0, 5);

      setImages(firstSeven);
    })();
  }, []);

  console.log(images);
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
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1024: {
            items: 3,
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
