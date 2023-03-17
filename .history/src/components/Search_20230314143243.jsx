import React from "react";

import { useSearchParams } from "react-router-dom";
import style from "./search.module.css";
const Search = () => {
  const [query, setQuery] = useSearchParams();

  const search = query.get("search");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setQuery({ search: e.target.value });
  };
  return (
    <div className={style.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese una busqueda..."
          /* value={search ?? ""} */
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
