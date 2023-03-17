import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import apiFetchCarousel from "../utils/apiFetchCarousel";

const Carousel = ({ endpoint }) => {
  const [info, setInfo] = useState([]);

  const imagePath = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    (async () => {
      const { success, data, statusCode, code } = await apiFetchCarousel(
        endpoint
      );

      const firstSeven = data.results.slice(0, 10);
      setInfo(firstSeven);
    })();
  }, []);

  return (
    <div className="carousel">
      <h3>Peliculas mas popuñlares </h3>
      <AliceCarousel
        items={info.map((item, index) => (
          <div key={index} className="item">
            <img src={`${imagePath}${item.poster_path}`} alt={item.title} />
          </div>
        ))}
        autoPlay
        infinite
        autoPlayInterval={2000}
        buttonsDisabled={false}
        dotsDisabled={true}
        touchTracking={true}
        responsive={{
          0: {
            items: 3,
          },
          600: {
            items: 3,
          },
          991: {
            items: 5,
          },
          1240: {
            items: 7,
          },
        }}
      />
    </div>
  );
};

export default Carousel;
