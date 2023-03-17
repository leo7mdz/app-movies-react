import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import apiFetchCarousel from "../utils/apiFetchCarousel";

const Carousel = ({ endpoint }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const { success, data, statusCode, code } = apiFetchCarousel(endpoint);

    const firstSeven = data.slice(0, 6);
    setInfo(firstSeven);
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
