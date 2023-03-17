import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ title, overview, vote, image, id, types }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500/";

  const navigate = useNavigate();

  const handleCard = () => {
    navigate(`/details/${types}/${id}`);
  };
  return (
    <div onClick={handleCard} className={style.card}>
      <img src={`${imagePath}${image}`} alt={title} />
    </div>
  );
};

export default Card;
