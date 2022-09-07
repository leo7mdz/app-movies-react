import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const Pagination = () => {
  const { setPage, page, totalPage } = useContext(MoviesContext);

  const isBackDisabled = page === 1;

  const isNextDisabled = page === totalPage;
  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <button disabled={isBackDisabled} onClick={prevPage}>
        Anterior
      </button>
      <span>
        Pagina {page} de {totalPage}
      </span>
      <button disabled={isNextDisabled} onClick={nextPage}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
