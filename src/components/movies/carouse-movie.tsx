import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const CarouselMovie = () => {
  return (
    <section className="relative w-full  h-[560px] ">
      <div
        className="fixed  inset-0 h-screen w-screen bg-cover bg-no-repeat "
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg')",
          backgroundPosition: "center top 10%",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/10 "></div>

      <div className="relative pl-[120px] h-full flex items-end pb-8 ">
        <div className="max-w-[600px] space-y-6 ">
          <h1 className="text-4xl font-bold text-white">Planet Of Apes</h1>

          <div className="flex flex-wrap items-center gap-2 text-white font-medium">
            <span>2025</span>
            <span>•</span>
            <span>13+</span>
            <span>•</span>
            <span>1h 58m</span>
            <span>•</span>
            <span>English</span>
          </div>

          <p className="text-white/80 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem id, culpa possimus cumque illum unde minima vel
            asperiores facilis sit nisi quidem dolor nesciunt, labore odio fugit
            quam adipisci vitae!
          </p>

          <div className="flex items-center gap-2">
            <Button color="primary" className="w-full sm:w-auto" size="lg">
              Watch Now
            </Button>
            <Button variant="solid" size="lg" isIconOnly>
              <Icon icon="line-md:plus" className="text-lg" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselMovie;
