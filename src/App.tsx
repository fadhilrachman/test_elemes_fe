import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Movies from "./pages/movies";
import TvShow from "./pages/tv-show";
import DefaultLayout from "./layouts/default";
import Search from "./pages/search";

function App() {
  return (
    <DefaultLayout className=" ">
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<Movies />} path="/movies" />
        <Route element={<TvShow />} path="/tv-show" />
        <Route element={<Search />} path="/search" />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
