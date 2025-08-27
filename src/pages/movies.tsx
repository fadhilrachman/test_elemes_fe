import CarouselMovie from "@/components/movies/carouse-movie";
import ListMovie from "@/components/movies/list-movie";
import DefaultLayout from "@/layouts/default";
import React from "react";

const Movies = () => {
  return (
    <DefaultLayout>
      <CarouselMovie />
      <ListMovie />
    </DefaultLayout>
  );
};

export default Movies;
