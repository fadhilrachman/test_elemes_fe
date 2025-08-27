import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { BaseResponseType } from "@/types";
import { MovieType } from "@/types/movie";

export const useGetAiringTodayTVShow = (params: {
  page: number;
  per_page: number;
  search?: string;
}) => {
  const query = useQuery<BaseResponseType<MovieType>>({
    queryKey: ["LIST_AIRING_TODAY_TV_SHOW"],
    queryFn: async () => {
      const result = await fetcher.get("/tv/airing_today", { params });

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
    queryKey: ["LIST_UPCOMING_TV_SHOW"],
    queryFn: async () => {
      const result = await fetcher.get("/tv/airing_today?", { params });

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
    queryKey: ["LIST_NOW_PLAYING_TV_SHOW"],
    queryFn: async () => {
      const result = await fetcher.get("/tv/airing_today?", { params });

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
    queryKey: ["LIST_POPULAR_TV_SHOW"],
    queryFn: async () => {
      const result = await fetcher.get("/tv/airing_today?", { params });

      return result.data;
    },
  });

  return query;
};
