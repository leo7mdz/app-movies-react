import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
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
            items: 1,
          },
          /*  600: {
          items: 3,
        },
        1024: {
          items: 3,
        }, */
        }}
      />
    </div>
  );
};

export default Carousel;
