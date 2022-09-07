import React from "react";
import style from "./Card.module.css";

const Card = ({ title, overview, vote, image }) => {
  const imagePath = "https://image.tmdb.org/t/p/w300/";

  const handleCard = () => {};
  return (
    <div onClick={handleCard} className={style.card}>
      <img className={style.card} src={`${imagePath}${image}`} alt={title} />
    </div>
  );
};

export default Card;
