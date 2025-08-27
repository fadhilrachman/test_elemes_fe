import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { BaseResponseType } from "@/types";
import { MovieType } from "@/types/movie";

export const useGetTopRatedMovie = (params: { page?: number }) => {
  const query = useQuery<BaseResponseType<MovieType>>({
    queryKey: ["LIST_TOP_RATED_MOVIES"],
    queryFn: async () => {
      const result = await fetcher.get("/movie/top_rated", { params });

      return result.data;
    },
  });

  return query;
};

export const useGetUpcomingMovie = (params: {
  page: number;
  per_page: number;
  search?: string;
}) => {
  const query = useQuery<BaseResponseType<MovieType>>({
    queryKey: ["LIST_UPCOMING_MOVIES"],
    queryFn: async () => {
      const result = await fetcher.get("/dashboard/admin", { params });

      return result.data;
    },
  });

  return query;
};
export const useGetNowPlayingMovie = (params: {
  page: number;
  per_page: number;
  search?: string;
}) => {
  const query = useQuery<BaseResponseType<MovieType>>({
    queryKey: ["LIST_NOW_PLAYING_MOVIES"],
    queryFn: async () => {
      const result = await fetcher.get("/dashboard/admin", { params });

      return result.data;
    },
  });

  return query;
};

export const useGetPopularMovie = (params: {
  page: number;
  per_page: number;
  search?: string;
}) => {
  const query = useQuery<BaseResponseType<MovieType>>({
    queryKey: ["LIST_POPULAR_MOVIES"],
    queryFn: async () => {
      const result = await fetcher.get("/dashboard/admin", { params });

      return result.data;
    },
  });

  return query;
};
