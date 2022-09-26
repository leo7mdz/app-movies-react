import { useContext } from "react";
import { createContext } from "react";

import useSeriesSearch from "../hooks/useSeriesSearch";

const SeriesContext = createContext();

export const contextSeries = () => {
  return useContext(SeriesContext);
};

const SeriesProvider = ({ children }) => {
  const { series, loading, error, page, totalPage, setPage } =
    useSeriesSearch();

  const data = {
    series,
    loading,
    error,
    page,
    totalPage,
    setPage,
  };
  return (
    <SeriesContext.Provider value={data}>{children}</SeriesContext.Provider>
  );
};

export default SeriesProvider;
//export { SeriesContext };
