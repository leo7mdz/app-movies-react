import GridCards from "./components/GridCards";
import Pagination from "./components/Pagination";
import MoviesProvider from "./context/MoviesContext";

function App() {
  return (
    <MoviesProvider>
      <div>
        <Pagination />
        <GridCards />
      </div>
    </MoviesProvider>
  );
}

export default App;
