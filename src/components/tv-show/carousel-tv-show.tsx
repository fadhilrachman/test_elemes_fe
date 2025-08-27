import { useGetTrandingMovies } from "@/hooks/use-movie";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import CarouselSkeleton from "../shared/carousel-skeleton";
import moment from "moment";

const CarouselTvShow = () => {
  const { data, isFetching } = useGetTrandingMovies({ page: 6 });
  const [index, setIndex] = useState(0);
  const dataChoosed = data?.results?.[index];
  return (
    <section className="relative w-full h-[560px]">
      <div
        className="absolute right-0 top-0 h-[760px] w-12/12 bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(https://image.tmdb.org/t/p/original/${dataChoosed?.poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "top right",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/60"></div>

      <div className="relative h-full gap-4 flex flex-col md:flex-row items-end justify-end md:justify-between pr-5 sm:pr-10 pb-8">
        <div className="max-w-[600px] space-y-6">
          <h1 className="text-4xl font-bold text-white">
            {dataChoosed?.original_title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-white font-medium">
            <span>{moment(dataChoosed?.release_date).format("YYYY")}</span>
            <span>•</span>
            <span>{dataChoosed?.adult ? "Adult Content" : "All Ages"}</span>
            <span>•</span>
            <span>{dataChoosed?.original_language}</span>
          </div>

          <p className="text-white/80 line-clamp-3">{dataChoosed?.overview}</p>

          <div className="flex items-center gap-2">
            <Button color="primary" className="w-full sm:w-auto" size="lg">
              Watch Now
            </Button>
            <Button variant="solid" size="lg" isIconOnly>
              <Icon icon="line-md:plus" className="text-lg" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {isFetching
            ? Array.from({ length: 4 }).map((_, key) => (
                <CarouselSkeleton key={key} />
              ))
            : data?.results
                ?.slice(0, 4)
                ?.map((val, key) => (
                  <img
                    onClick={() => setIndex(key)}
                    key={key}
                    src={
                      "https://image.tmdb.org/t/p/w440_and_h660_face" +
                      val?.poster_path
                    }
                    className={`${
                      index == key && "border border-white"
                    } w-[100px] h-[60px] object-top object-cover rounded-md cursor-pointer transition-all hover:scale-110`}
                  />
                ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselTvShow;
