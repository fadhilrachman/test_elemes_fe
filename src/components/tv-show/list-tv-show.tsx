import { Tabs, Tab } from "@heroui/tabs";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetTvShow } from "@/hooks/use-tv-show";
import Card from "../shared/card";

const ListTvShow = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { data, refetch } = useGetTvShow({
    page: 1,
    category: category || "top_rated",
  });

  useEffect(() => {
    refetch();
  }, [category]);

  return (
    <section className="space-y-6 pr-5 sm:pr-10 text-white bg-gradient-to-t from-black to-black/90 relative">
      <header>
        <h1 className="sr-only">TV Shows</h1>
        <Tabs
          className="flex flex-wrap relative"
          selectedKey={category || "airing_today"}
          onSelectionChange={(val) =>
            setSearchParams({ category: val.toString() })
          }
          size="lg"
          aria-label="TV Show Categories"
          variant="light"
        >
          <Tab key="airing_today" title="Airing Today" />
          <Tab key="on_the_air" title="On The Air" />
          <Tab key="popular" title="Popular" />
          <Tab key="top_rated" title="Top Rated" />
        </Tabs>
      </header>

      <section aria-labelledby="tvshow-list-title">
        <h2 id="tvshow-list-title" className="sr-only">
          TV Show List
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data?.results?.map((val, key) => (
            <li key={key}>
              <Card
                id={val.id}
                type="tv"
                adult={val?.adult}
                title={val?.name}
                bgImage={val?.backdrop_path}
                originalLanguage={val?.original_language}
                overview={val?.overview}
                releaseDate={val?.first_air_date}
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ListTvShow;
