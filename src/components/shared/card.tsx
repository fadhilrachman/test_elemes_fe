import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import moment from "moment";
import Image from "../shared/Image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { addToast } from "@heroui/toast";

interface PropsType {
  id: number;
  bgImage: string;
  title: string;
  releaseDate: string;
  overview: string;
  originalLanguage: string;
  adult: boolean;
  type: "movie" | "tv";
  isWatchlistHide?: boolean;
}

const Card = (props: PropsType) => {
  const ytLink = import.meta.env.VITE_YT_LINK;
  const key = props.type;

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem(key);
    const parsed = existing ? JSON.parse(existing) : [];
    const already = parsed.some((item: any) => item.id === props.id);
    setIsAdded(already);
  }, [key, props.id]);

  const handleAddToWatchlist = () => {
    const existing = localStorage.getItem(key);
    const parsed = existing ? JSON.parse(existing) : [];

    if (!isAdded) {
      const updated = [...parsed, props];
      localStorage.setItem(key, JSON.stringify(updated));
      setIsAdded(true);
      addToast({
        title: `${props.title} added to your ${key} list!`,
        color: "success",
      });
    } else {
      addToast({
        title: `${props.title} is already in your ${key} list.`,
        color: "danger",
      });
    }
  };

  return (
    <div className="relative z-10 max-h-[400px] hover:z-20 rounded-lg overflow-hidden bg-gray-900 group transition-all cursor-pointer hover:scale-120">
      <Image
        src={props.bgImage}
        alt={props.title}
        className="w-full h-full object-cover object-to transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-sm md:text-xl font-bold text-white">
          {props.title}
        </h3>

        <div className="flex flex-col md:flex-row gap-2 mt-2">
          <Button
            size="sm"
            onPress={() => window.open(`${ytLink}${props.title}`, "_blank")}
            className="w-full"
            variant="solid"
          >
            Watch Now
          </Button>

          {!props.isWatchlistHide && (
            <Button isIconOnly size="sm" onPress={handleAddToWatchlist}>
              <Icon icon={isAdded ? "iconamoon:check-fill" : "mdi:plus"} />
            </Button>
          )}
        </div>

        <p className="text-xs text-gray-300 mt-3">
          {moment(props.releaseDate).format("YYYY")} •{" "}
          {props.adult ? "Adult Content" : "All Ages"} •{" "}
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
