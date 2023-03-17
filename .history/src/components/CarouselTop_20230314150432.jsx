import React from "react";
import AliceCarousel from "react-alice-carousel";
import { API_HOST, API_KEY } from "../constants/api";
import apiFetchCarousel from "../utils/apiFetchCarousel";

const CarouselTop = () => {
  const movieUpcoming = `${API_HOST}/movie/upcoming&api_key=${API_KEY}`;

  const [data, setData] = useState([]);

  useEffect(() => {
    const { data, success, statusCode, status } =
      apiFetchCarousel(movieUpcoming);
  }, []);

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

/* const movieUpcoming = `${API_HOST}/movie/upcoming&api_key=${API_KEY}`;
  const movieTopRated = `${API_HOST}/movie/top_rated&api_key=${API_KEY}`;
  const movieAction = `${API_HOST}7discover/movie&api_key=${API_KEY}&with_genres=28`;
  const movieAnimation = `${API_HOST}7discover/movie&api_key=${API_KEY}&with_genres=16`;
  const movieComedy = `${API_HOST}7discover/movie&api_key=${API_KEY}&with_genres=35`; */
