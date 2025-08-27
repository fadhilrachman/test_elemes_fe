import { useGetTopRatedMovie } from "@/hooks/use-movie";
import { Button } from "@heroui/button";
import React from "react";

const ListMovie = () => {
  const { data } = useGetTopRatedMovie({ page: 1 });
  console.log({ data });

  return (
    <div className=" relative pl-[120px] bg-black h-screen z-10 text-white">
      <Button variant="bordered" color="primary">
        asd
      </Button>
    </div>
  );
};

export default ListMovie;
