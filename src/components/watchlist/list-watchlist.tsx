import Card from "../shared/card";

const ListWatchList = () => {
  const watchListMovies = localStorage.getItem("movie");
  const watchListTvShow = localStorage.getItem("tv");

  const parsedDataMovies = watchListMovies ? JSON.parse(watchListMovies) : [];
  const parsedDataTv = watchListTvShow ? JSON.parse(watchListTvShow) : [];

  const renderEmptyState = () => (
    <section className="flex flex-col items-center justify-center w-full py-20 text-center">
      <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
        No items found
      </h3>
      <p className="text-sm md:text-base text-gray-500">
        You haven't added any items yet. Start exploring movies or TV shows to
        add them to your watchlist.
      </p>
    </section>
  );

  return (
    <main className="space-y-8 py-12">
      <header>
        <h1 className="text-xl md:text-4xl font-bold">Your Watchlist</h1>
      </header>

      <section aria-labelledby="movies-title" className="space-y-4">
        <h2 id="movies-title" className="text-lg md:text-2xl font-bold">
          Movies
        </h2>

        {parsedDataMovies.length === 0 ? (
          renderEmptyState()
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {parsedDataMovies.map((val: any, key: number) => (
              <li key={key}>
                <Card
                  id={val.id}
                  adult={val?.adult}
                  title={val?.title}
                  bgImage={val?.bgImage}
                  originalLanguage={val?.originalLanguage}
                  overview={val?.overview}
                  releaseDate={val?.releaseDate}
                  isWatchlistHide
                  type="movie"
                />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section aria-labelledby="tvshows-title" className="space-y-4">
        <h2 id="tvshows-title" className="text-lg md:text-2xl font-bold">
          TV Shows
        </h2>

        {parsedDataTv.length === 0 ? (
          renderEmptyState()
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {parsedDataTv.map((val: any, key: number) => (
              <li key={key}>
                <Card
                  id={val.id}
                  adult={val?.adult}
                  title={val?.title}
                  bgImage={val?.bgImage}
                  originalLanguage={val?.originalLanguage}
                  overview={val?.overview}
                  releaseDate={val?.releaseDate}
                  isWatchlistHide
                  type="tv"
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default ListWatchList;
