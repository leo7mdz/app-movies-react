import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import NavBar from "./components/NavBar";
import MoviesProvider from "./context/MoviesContext";
import SeriesProvider from "./context/SeriesContext";
import Details from "./pages/Details";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Series from "./pages/Series";

function App() {
  return (
    <BrowserRouter>
      <MoviesProvider>
        <SeriesProvider>
          <div className="app">
            <NavBar />

            <Routes>
              <Route path="/" element={<Home types="movie" />} />
              <Route path="/series" element={<Series types="tv" />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/details/:type/:id" element={<Details />} />
            </Routes>
          </div>
        </SeriesProvider>
      </MoviesProvider>
    </BrowserRouter>
  );
}

export default App;
