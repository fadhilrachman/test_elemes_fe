const CarouselSkeleton = () => {
  return (
    <figure
      className="w-[100px] h-[60px] rounded-md bg-gray-700 animate-pulse"
      role="status"
      aria-label="Loading carousel item"
    >
      <span className="sr-only">Loading...</span>
    </figure>
  );
};

export default CarouselSkeleton;
