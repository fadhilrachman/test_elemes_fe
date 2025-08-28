import { Navigate, Route, Routes } from "react-router-dom";

import Movies from "./pages/movies";
import TvShow from "./pages/tv-show";
import DefaultLayout from "./layouts/default";
import Search from "./pages/search";
import Watchlist from "./pages/watchlist";

function App() {
  return (
    <DefaultLayout className=" ">
      <Routes>
        <Route element={<Navigate to="/movies" replace />} path="/" />
        <Route element={<Movies />} path="/movies" />
        <Route element={<TvShow />} path="/tv-show" />
        <Route element={<Search />} path="/search" />
        <Route element={<Watchlist />} path="/watchlist" />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
