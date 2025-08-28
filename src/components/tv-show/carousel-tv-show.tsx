import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";
import { useGetTrandingTvShow } from "@/hooks/use-tv-show";
import CarouselSkeleton from "../shared/carousel-skeleton";
import { addToast } from "@heroui/toast";

const CarouselTvShow = () => {
  const { data, isFetching } = useGetTrandingTvShow({ page: 6 });
  const [index, setIndex] = useState(0);
  const dataChoosed = data?.results?.[index];

  const key = "tv";
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
          title: dataChoosed.name,
          releaseDate: dataChoosed.first_air_date,
          overview: dataChoosed.overview,
          originalLanguage: dataChoosed.original_language,
          adult: dataChoosed.adult,
        },
      ];
      localStorage.setItem(key, JSON.stringify(updated));
      setIsAdded(true);
      addToast({
        title: `${dataChoosed.original_name} added to your ${key} list!`,
        color: "success",
      });
    } else {
      addToast({
        title: `${dataChoosed.original_name} is already in your ${key} list.`,
        color: "danger",
      });
    }
  };

  return (
    <section
      className="relative w-full h-[560px]"
      aria-label="Trending TV Shows Carousel"
    >
      <div
        className="absolute right-0 top-0 h-[760px] w-12/12 bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(https://image.tmdb.org/t/p/original/${dataChoosed?.poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "top right",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/60"></div>

      <div className="relative h-full flex flex-col md:flex-row items-end justify-end md:justify-between gap-4 pr-5 sm:pr-10 pb-8">
        <header className="max-w-[600px] space-y-6">
          <h1 className="text-4xl font-bold text-white">
            {dataChoosed?.original_name}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-white font-medium">
            <span>{moment(dataChoosed?.first_air_date).format("YYYY")}</span>
            <span>•</span>
            <span>{dataChoosed?.adult ? "Adult Content" : "All Ages"}</span>
            <span>•</span>
            <span>{dataChoosed?.original_language}</span>
          </div>

          <p className="text-white/80 line-clamp-3">{dataChoosed?.overview}</p>

          <div className="flex items-center gap-2">
            <Button color="primary" size="lg" className="w-full sm:w-auto">
              Watch Now
            </Button>
            <Button
              variant="solid"
              size="lg"
              isIconOnly
              onPress={handleAddToWatchlist}
              aria-label={
                isAdded
                  ? `Remove ${dataChoosed?.original_name} from watchlist`
                  : `Add ${dataChoosed?.original_name} to watchlist`
              }
            >
              <Icon
                icon={isAdded ? "iconamoon:check-fill" : "line-md:plus"}
                className="text-lg"
              />
            </Button>
          </div>
        </header>

        <ul
          className="grid grid-cols-4 gap-6"
          role="list"
          aria-label="TV Show Thumbnails"
        >
          {isFetching
            ? Array.from({ length: 4 }).map((_, key) => (
                <li key={key}>
                  <CarouselSkeleton />
                </li>
              ))
            : data?.results?.slice(0, 4)?.map((val, key) => (
                <li key={key}>
                  <img
                    onClick={() => setIndex(key)}
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face${val?.poster_path}`}
                    alt={val?.name}
                    className={`${
                      index === key ? "border border-white" : ""
                    } w-[100px] h-[60px] object-top object-cover rounded-md cursor-pointer transition-all hover:scale-110`}
                  />
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
};

export default CarouselTvShow;
