import { useGetMovies } from "@/hooks/use-movie";
import { Tabs, Tab } from "@heroui/tabs";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./movie-card";
import { Button } from "@heroui/button";
import CardSkeleton from "../shared/card-skeleton";

const ListMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { data, refetch, isFetching } = useGetMovies({
    page: 1,
    category: category || "top_rated",
  });

  useEffect(() => {
    refetch();
  }, [category]);
  return (
    <div className=" space-y-6 pr-5 sm:pr-10  text-white bg-gradient-to-t from-black to-black/90 relative">
      <Tabs
        className=" flex flex-wrap relative"
        selectedKey={category || "top_rated"}
        onSelectionChange={(val) => {
          setSearchParams({ category: val.toString() });
        }}
        size="lg"
        aria-label="Tabs variants"
        variant={"light"}
      >
        <Tab key="top_rated" title="Top Rated" />
        <Tab key="upcoming" title="Upcoming" />
        <Tab key="now_playing" title="Now Playing  " />
        <Tab key="pupolar" title="Popular  " />
      </Tabs>
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {isFetching
          ? Array(6)
              .fill(0)
              .map((_, key) => <CardSkeleton key={key} />)
          : data?.results?.map((val, key) => {
              return <MovieCard {...val} key={key} />;
            })}
      </div>
    </div>
  );
};

export default ListMovie;
