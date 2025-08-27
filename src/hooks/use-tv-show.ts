import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { BaseResponseType } from "@/types";
import { TvShowType } from "@/types/tv-show";

export const useGetTvShow = (params: { page?: number; category: string }) => {
  const query = useQuery<BaseResponseType<TvShowType>>({
    queryKey: ["LIST_TV_SHOW"],
    queryFn: async () => {
      const result = await fetcher.get(`/tv/${params.category}`, {
        params: {
          page: params.page,
        },
      });

      return result.data;
    },
  });

  return query;
};

export const useGetTrandingMovies = (params: { page?: number }) => {
  const query = useQuery<BaseResponseType<TvShowType>>({
    queryKey: ["LIST_TRANDING_TV_SHOW"],
    queryFn: async () => {
      const result = await fetcher.get(`/trending/tv/week`, {
        params: {
          page: params.page,
        },
      });

      return result.data;
    },
  });

  return query;
};
