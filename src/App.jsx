import { useEffect, useReducer } from "react";
import moviesReducer, { MOVIES_INITIAL_STATE } from "./reducer/moviesReducer";
import apiFetch from "./utils/apiFetch";

function App() {
  const [movies, moviesDispatch] = useReducer(
    moviesReducer,
    MOVIES_INITIAL_STATE
  );
  useEffect(() => {
    apiFetch("/movie/popular", 12);
  }, []);

  return <div>hola</div>;
}

export default App;
