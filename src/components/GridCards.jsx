import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Card from "./Card";
import styles from "./GridCard.module.css";

const GridCards = () => {
  const { movies, loading, error } = useContext(MoviesContext);

  if (!movies) return;
  return (
    <div className={styles.card}>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {movies.map((movie) => (
        <Card
          key={movie.id}
          /* title={movie.title}
          overview={movie.overview}
          vote={movie.vote_overage} */
          image={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default GridCards;
