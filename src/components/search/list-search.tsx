import { useEffect } from "react";
import InputSearch from "@/components/shared/input-search";
import { useSearchParams } from "react-router-dom";
import { useGetSearchMultiple } from "@/hooks/use-search";
import CardSkeleton from "@/components/shared/card-skeleton";
import Card from "../shared/card";

const ListSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const explore = searchParams.get("explore");

  const { data, refetch, isFetching, status } = useGetSearchMultiple({
    query: explore,
    page: 1,
  });

  const dataMovies = data?.results?.filter((val) => val.media_type === "movie");
  const dataTvShow = data?.results?.filter((val) => val.media_type === "tv");

  useEffect(() => {
    refetch();
  }, [explore]);

  return (
    <main className="py-7 pr-5 sm:pr-10" aria-label="Search results">
      <header className="mb-6">
        <InputSearch
          placeholder="Movies & TV Shows"
          onChange={(val) => setSearchParams({ explore: val })}
          aria-label="Search movies and TV shows"
        />
      </header>

      {data?.results?.length === 0 ? (
        <section
          className="flex flex-col items-center justify-center w-full py-20 text-center"
          aria-label="No search results"
        >
          <h1 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            No items found
          </h1>
          <p className="text-sm md:text-base text-gray-500">
            Try adjusting your filters or search terms.
          </p>
        </section>
      ) : (
        <div className="space-y-8">
          <section className="space-y-4" aria-labelledby="movies-title">
            {dataMovies?.length > 0 && (
              <header>
                <h2 id="movies-title" className="text-2xl font-bold">
                  Movies
                </h2>
              </header>
            )}

            <ul
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              role="list"
            >
              {isFetching && status === "success"
                ? Array(6)
                    .fill(0)
                    .map((_, key) => (
                      <li key={key}>
                        <CardSkeleton />
                      </li>
                    ))
                : dataMovies?.map((val, key) => (
                    <li key={key}>
                      <Card
                        id={val.id}
                        adult={val?.adult}
                        title={val?.name}
                        bgImage={val?.poster_path}
                        originalLanguage={val?.original_language}
                        overview={val?.overview}
                        releaseDate={val?.first_air_date}
                        type="movie"
                      />
                    </li>
                  ))}
            </ul>
          </section>

          <section className="space-y-4" aria-labelledby="tvshows-title">
            {dataTvShow?.length > 0 && (
              <header>
                <h2 id="tvshows-title" className="text-2xl font-bold">
                  TV Shows
                </h2>
              </header>
            )}

            <ul
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              role="list"
            >
              {isFetching
                ? Array(6)
                    .fill(0)
                    .map((_, key) => (
                      <li key={key}>
                        <CardSkeleton />
                      </li>
                    ))
                : dataTvShow?.map((val, key) => (
                    <li key={key}>
                      <Card
                        id={val.id}
                        type="tv"
                        adult={val?.adult}
                        title={val?.name}
                        bgImage={val?.poster_path}
                        originalLanguage={val?.original_language}
                        overview={val?.overview}
                        releaseDate={val?.first_air_date}
                      />
                    </li>
                  ))}
            </ul>
          </section>
        </div>
      )}
    </main>
  );
};

export default ListSearch;
