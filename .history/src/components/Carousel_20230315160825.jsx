import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import apiFetchCarousel from "../utils/apiFetchCarousel";

const Carousel = ({ endpoint }) => {
  const [info, setInfo] = useState([]);
  console.log(endpoint);

  useEffect(() => {
    (async () => {
      const { success, data, statusCode, code } = await apiFetchCarousel(
        endpoint
      );
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <AliceCarousel
        items={info.map((item, index) => (
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
          991: {
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
