import { useGetTrandingMovies } from "@/hooks/use-movie";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";
import CarouselSkeleton from "../shared/carousel-skeleton";
import moment from "moment";
import { addToast } from "@heroui/toast";

const CarouselMovie = () => {
  const { data, isFetching } = useGetTrandingMovies({ page: 6 });
  const [index, setIndex] = useState(0);
  const dataChoosed = data?.results?.[index];

  const key = "movie";
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (dataChoosed) {
      const existing = localStorage.getItem(key);
      const parsed = existing ? JSON.parse(existing) : [];
      const already = parsed.some((item: any) => item.id === dataChoosed.id);
      setIsAdded(already);
    }
  }, [dataChoosed]);

  const handleAddToWatchlist = () => {
    if (!dataChoosed) return;

    const existing = localStorage.getItem(key);
    const parsed = existing ? JSON.parse(existing) : [];

    if (!isAdded) {
      const updated = [
        ...parsed,
        {
          id: dataChoosed.id,
          bgImage: dataChoosed.backdrop_path,
          title: dataChoosed.title,
          releaseDate: dataChoosed.release_date,
          overview: dataChoosed.overview,
          originalLanguage: dataChoosed.original_language,
          adult: dataChoosed.adult,
        },
      ];
      localStorage.setItem(key, JSON.stringify(updated));
      setIsAdded(true);
      addToast({
        title: `${dataChoosed.original_title} added to your ${key} list!`,
        color: "success",
      });
    } else {
      addToast({
        title: `${dataChoosed.original_title} is already in your ${key} list.`,
        color: "danger",
      });
    }
  };

  return (
    <section
      className="relative w-full h-[560px]"
      aria-label="Trending Movies Carousel"
    >
      <div
        className="absolute right-0 top-0 h-[760px] w-full bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(https://image.tmdb.org/t/p/original/${dataChoosed?.poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "top right",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/60"></div>

      <div className="relative h-full gap-4 flex flex-col md:flex-row items-end justify-end md:justify-between pr-5 sm:pr-10 pb-8">
        <figure className="max-w-[600px] space-y-6">
          <figcaption>
            <header>
              <h2 className="text-4xl font-bold text-white">
                {dataChoosed?.original_title}
              </h2>
            </header>

            <div className="flex flex-wrap items-center gap-2 text-white font-medium">
              <span>{moment(dataChoosed?.release_date).format("YYYY")}</span>
              <span>•</span>
              <span>{dataChoosed?.adult ? "Adult Content" : "All Ages"}</span>
              <span>•</span>
              <span>{dataChoosed?.original_language}</span>
            </div>

            <p className="text-white/80 line-clamp-3">
              {dataChoosed?.overview}
            </p>

            <div className="flex items-center gap-2 mt-2">
              <Button
                color="primary"
                className="w-full sm:w-auto"
                size="lg"
                aria-label={`Watch ${dataChoosed?.original_title} now`}
              >
                Watch Now
              </Button>

              <Button
                variant="solid"
                size="lg"
                isIconOnly
                onPress={handleAddToWatchlist}
                aria-label={
                  isAdded
                    ? `${dataChoosed?.original_title} is in your watchlist`
                    : `Add ${dataChoosed?.original_title} to watchlist`
                }
              >
                <Icon
                  icon={isAdded ? "iconamoon:check-fill" : "line-md:plus"}
                  className="text-lg"
                />
              </Button>
            </div>
          </figcaption>
        </figure>

        <section
          className="grid grid-cols-4 gap-6"
          aria-label="Trending movie thumbnails"
        >
          {isFetching
            ? Array.from({ length: 4 }).map((_, key) => (
                <CarouselSkeleton key={key} />
              ))
            : data?.results?.slice(0, 4)?.map((val, key) => (
                <button
                  key={key}
                  onClick={() => setIndex(key)}
                  className={`${
                    index === key ? "border border-white" : ""
                  } w-[100px] h-[60px] rounded-md overflow-hidden cursor-pointer transition-all hover:scale-110`}
                  aria-label={`Select ${val.title}`}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face${val?.poster_path}`}
                    alt={val.title}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
        </section>
      </div>
    </section>
  );
};

export default CarouselMovie;
