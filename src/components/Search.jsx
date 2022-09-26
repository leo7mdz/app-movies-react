import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese una busqueda..."
          value={search ?? ""}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Search;
