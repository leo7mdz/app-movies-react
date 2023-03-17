import Card from "./Card";
import styles from "./GridCard.module.css";
import Loader from "./Loader";

const GridCards = ({ types, data, error, loading }) => {
  if (!loading && data.length === 0)
    return <p>No se ah encontrado ningun resultado en la busqueda</p>;

  return (
    <div }>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <div className={styles.card}>
        {data.map((date) => (
          <Card
            key={date.id}
            image={date.poster_path}
            id={date.id}
            types={types}
          />
        ))}
      </div>
    </div>
  );
};

export default GridCards;
