import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { BaseResponseType } from "@/types";

export const useGetSearchMultiple = (params: {
  page?: number;
  query: string;
}) => {
  const query = useQuery<BaseResponseType<SearchType>>({
    queryKey: ["LIST_SEARCH_MULTIPLE"],
    queryFn: async () => {
      const result = await fetcher.get(`/search/multi`, {
        params: {
          page: params.page,
          include_adult: false,
          query: params.query,
        },
      });

      return result.data;
    },
  });

  return query;
};
