import { MovieType } from "@/types/movie";
import { Button } from "@heroui/button";

const MovieCard = (props: MovieType) => {
  return (
    <div className="relative z-10 max-h-[400px] hover:z-20 rounded-lg overflow-hidden bg-gray-900 group transition-all cursor-pointer hover:scale-120">
      <img
        src={
          "https://image.tmdb.org/t/p/w440_and_h660_face" + props?.backdrop_path
        }
        alt="Movie Poster"
        className="w-full h-full object-cover object-to transition-transform duration-500 "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-xl font-bold text-white">{props.title}</h3>

        <Button size="sm" color="secondary" variant="solid">
          {" "}
          Watch Now
        </Button>

        {/* Info */}
        <p className="text-xs text-gray-300 mt-3">
          2025 • 17+ • 2 Seasons • English • Drama
        </p>
        <p className="text-xs text-gray-400 mt-1 line-clamp-3">
          {props.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
