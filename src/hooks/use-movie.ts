import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { BaseResponseType } from "@/types";
import { MovieType } from "@/types/movie";

export const useGetMovies = (params: { page?: number; category: string }) => {
  const query = useQuery<BaseResponseType<MovieType>>({
    queryKey: ["LIST_MOVIES"],
    queryFn: async () => {
      const result = await fetcher.get(`/movie/${params.category}`, {
        params: {
          page: params.page,
        },
      });

      return result.data;
    },
  });

  return query;
};
