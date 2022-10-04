import style from "./pagination.module.css";

const Pagination = ({ page, totalPage, setPage }) => {
  const isBackDisabled = page === 1;

  const isNextDisabled = page === totalPage;
  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };
  return (
    <div className={style.pagination}>
      <button
        className={style.btn}
        disabled={isBackDisabled}
        onClick={prevPage}
      >
        Anterior
      </button>
      <span className={style["pagination-text"]}>
        Pagina <b>{page}</b> de {totalPage}
      </span>
      <button
        className={style.btn}
        disabled={isNextDisabled}
        onClick={nextPage}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
