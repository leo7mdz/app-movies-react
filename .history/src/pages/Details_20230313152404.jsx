import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_PATH } from "../constants/api";
import apiFetch from "../utils/apiFetch";
import style from "../components/details.module.css";

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

  const releaseData = release_date ? release_date : "Serie";

  const bgImage = {
    height: "100vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0,.2),rgba(0,0,0,.6)), url(${IMG_PATH}/${backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center top",
    /*  backgroundAttachment: "fixed", */
  };

  return (
    <div style={bgImage}>
      <div className={style.container}>
        <h2 className={style.title}>{title || original_name}</h2>
        <p className={style.paragraph}>{overview}</p>
        <img
          className={style.imgPort}
          src={`${IMG_PATH}/${poster_path}`}
          alt={title}
        />
        <p className={style.premiere}>{releaseData}</p>
        <p className={style.premiere}> {sliceString} %</p>
      </div>
    </div>
  );
};

export default Details;
