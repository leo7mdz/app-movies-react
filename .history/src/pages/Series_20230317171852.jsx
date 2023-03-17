import CarouselTop from "../components/CarouselTop";
import GridCards from "../components/GridCards";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { API_HOST, API_KEY } from "../constants/api";
import { contextSeries } from "../context/SeriesContext";

const Series = ({ types }) => {
  const { series, loading, error, page, totalPage, setPage } = contextSeries();

  const seriePopular = `${API_HOST}/tv/popular?api_key=${API_KEY}`;

  //console.log(series);

  if (!series) return;
  return (
    <div className="container-page">
      <CarouselTop endpoint={seriePopular} />
      <Search />
      <GridCards types={types} data={series} loading={loading} error={error} />
      <Pagination page={page} totalPage={totalPage} setPage={setPage} />
    </div>
  );
};

export default Series;
