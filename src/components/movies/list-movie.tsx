import { useGetMovies } from "@/hooks/use-movie";
import { Tabs, Tab } from "@heroui/tabs";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardSkeleton from "../shared/card-skeleton";
import Card from "../shared/card";

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
    <section className="space-y-6 pr-5 sm:pr-10 text-white bg-gradient-to-t from-black to-black/90 relative">
      <header>
        <h1 className="sr-only">Movies List</h1>
        <Tabs
          className="flex flex-wrap relative"
          selectedKey={category || "top_rated"}
          onSelectionChange={(val) => {
            setSearchParams({ category: val.toString() });
          }}
          size="lg"
          aria-label="Movie categories"
          variant="light"
          role="tablist"
        >
          <Tab key="top_rated" title="Top Rated" />
          <Tab key="upcoming" title="Upcoming" />
          <Tab key="now_playing" title="Now Playing" />
          <Tab key="popular" title="Popular" />
        </Tabs>
      </header>

      <section
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        aria-label="Movies"
      >
        {isFetching
          ? Array(6)
              .fill(0)
              .map((_, key) => <CardSkeleton key={key} />)
          : data?.results?.map((val, key) => (
              <Card
                id={val.id}
                type="movie"
                adult={val?.adult}
                title={val?.title}
                bgImage={val?.poster_path}
                originalLanguage={val?.original_language}
                overview={val?.overview}
                releaseDate={val?.release_date}
                key={key}
              />
            ))}
      </section>
    </section>
  );
};

export default ListMovie;
