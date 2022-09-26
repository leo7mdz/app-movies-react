import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_PATH } from "../constants/api";
import apiFetch from "../utils/apiFetch";

const Details = () => {
  const { type, id } = useParams();

  const [getDetails, setGetDetails] = useState("");

  useEffect(() => {
    detailsFetch(type, id);
  }, []);

  const detailsFetch = async (type, id) => {
    const { data } = await apiFetch(`/${type}/${id}`);
    setGetDetails(data);
  };
  console.log(getDetails);

  const {
    title,
    original_name,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    vote_average,
  } = getDetails;

  const sliceString = vote_average ? vote_average.toFixed(2) : "-";

  return (
    <div>
      <h2>{title || original_name}</h2>
      <p>{overview}</p>
      <img src={`${IMG_PATH}/${poster_path}`} alt={title} />
      <img src={`${IMG_PATH}/${backdrop_path}`} alt={title} />
      <p>fecha de estreno: {release_date}</p>
      <p>Calificacion: {sliceString} %</p>
    </div>
  );
};

export default Details;
