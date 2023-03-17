import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import apiFetchCarousel from "../utils/apiFetchCarousel";

const Carousel = ({ endpoint }) => {
  const { success, data, statusCode, code } = apiFetchCarousel(endpoint);
  return (
    <div>
      <AliceCarousel
        items={items.map((item, index) => (
          <div key={index} className="item">
            <img src={item.imageUrl} alt={item.title} />
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
            items: 2,
          },
          600: {
            items: 3,
          },
          1024: {
            items: 4,
          },
          1240: {
            items: 5,
          },
        }}
      />
    </div>
  );
};

export default Carousel;
