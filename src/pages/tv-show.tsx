import CarouselTvShow from "@/components/tv-show/carousel-tv-show";
import ListTvShow from "@/components/tv-show/list-tv-show";
import DefaultLayout from "@/layouts/default";

const TvShow = () => {
  return (
    <>
      <CarouselTvShow />
      <ListTvShow />
    </>
  );
};

export default TvShow;
