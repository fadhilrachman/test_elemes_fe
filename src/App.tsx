import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Movies from "./pages/movies";
import TvShow from "./pages/tv-show";
import DefaultLayout from "./layouts/default";

function App() {
  return (
    <DefaultLayout className=" pl-5 pb-20 sm:pl-[120px] bg-[#0F1014]  ">
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<Movies />} path="/movies" />
        <Route element={<TvShow />} path="/tv-show" />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
