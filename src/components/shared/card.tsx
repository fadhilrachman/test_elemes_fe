import { Button } from "@heroui/button";
import moment from "moment";
import Image from "../shared/Image";
import { Icon } from "@iconify/react/dist/iconify.js";

interface PropsType {
  bgImage: string;
  title: string;
  releaseDate: string;
  overview: string;
  originalLanguage: string;
  adult: boolean;
  type: "movie" | "tv";
}
const Card = (props: PropsType) => {
  // const watchListMovie
  const ytLink = import.meta.env.VITE_YT_LINK;
  return (
    <div className="relative z-10 max-h-[400px] hover:z-20 rounded-lg overflow-hidden bg-gray-900 group transition-all cursor-pointer hover:scale-120">
      <Image
        src={props?.bgImage}
        alt={props.title}
        className="w-full h-full object-cover object-to transition-transform duration-500 "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-sm md:text-xl font-bold text-white">
          {props.title}
        </h3>

        <div className="flex flex-col md:flex-row gap-2">
          <Button
            size="sm"
            onPress={() => {
              window.open(`${ytLink}${props.title}`, "_blank");
            }}
            className="w-full"
            variant="solid"
          >
            {" "}
            Watch Now
          </Button>
          <Button isIconOnly size="sm" onPress={() => {}}>
            <Icon icon={"mdi:plus"} />
          </Button>
        </div>

        <p className="text-xs text-gray-300 mt-3">
          {moment(props?.releaseDate).format("YYYY")} •{" "}
          {props?.adult ? "Adult Content" : "All Ages"} •{" "}
          {props.originalLanguage}
        </p>
        <p className="text-xs text-gray-400 mt-1 line-clamp-2 md:line-clamp-3">
          {props.overview}
        </p>
      </div>
    </div>
  );
};

export default Card;
