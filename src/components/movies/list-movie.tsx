import { useGetMovies } from "@/hooks/use-movie";
import { Tabs, Tab } from "@heroui/tabs";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./movie-card";
import { Button } from "@heroui/button";

const ListMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { data, refetch } = useGetMovies({
    page: 1,
    category: category || "top_rated",
  });

  useEffect(() => {
    refetch();
  }, [category]);
  return (
    <div className=" relative pl-[120px] space-y-6 pr-10 pb-10 bg-black z-10 text-white">
      <Tabs
        color="secondary"
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
      <div className=" grid grid-cols-5 gap-6">
        {data?.results?.map((val, key) => {
          return <MovieCard {...val} key={key} />;
        })}
      </div>
      <div className="flex justify-center">
        <Button color="secondary">Load More</Button>
      </div>{" "}
    </div>
  );
};

export default ListMovie;
