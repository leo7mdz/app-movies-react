import React from "react";
import AliceCarousel from "react-alice-carousel";

const CarouselTop = () => {
  return (
    <div>
      <AliceCarousel
        items={items.map((item, index) => (
          <div key={index} className="item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
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
        }}
      />
    </div>
  );
};

export default CarouselTop;
