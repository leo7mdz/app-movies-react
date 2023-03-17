import GridCards from "../components/GridCards";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { contextSeries } from "../context/SeriesContext";

const Series = ({ types }) => {
  const { series, loading, error, page, totalPage, setPage } = contextSeries();

  //console.log(series);

  if (!series) return;
  return (
    <div className="container-page">
      <Search />
      <GridCards types={types} data={series} loading={loading} error={error} />
      <Pagination page={page} totalPage={totalPage} setPage={setPage} />
    </div>
  );
};

export default Series;
