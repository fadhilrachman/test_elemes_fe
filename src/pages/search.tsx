import { useEffect } from "react";
import InputSearch from "@/components/shared/input-search";
import { useSearchParams } from "react-router-dom";
import { useGetSearchMultiple } from "@/hooks/use-search";
import SearchCard from "@/components/search/search-card";
import { Skeleton } from "@heroui/skeleton";
import CardSkeleton from "@/components/shared/card-skeleton";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const explore = searchParams.get("explore");
  //   const [params, setParams] = useState({ page: 1, query: "" });

  const { data, refetch, isFetching, status } = useGetSearchMultiple({
    query: explore,
    page: 1,
  });

  useEffect(() => {
    console.log({ data });
    refetch();
  }, [explore]);
  return (
    <div className="py-7 pr-5 sm:pr-10">
      <InputSearch
        placeholder="Movies & TV Shows"
        onChange={(val) => {
          setSearchParams({ explore: val });
        }}
      />

      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {isFetching && status == "success"
          ? Array(6)
              .fill(0)
              .map((_, key) => <CardSkeleton key={key} />)
          : data?.results?.map((val, key) => {
              return <SearchCard {...val} key={key} />;
            })}
      </div>
    </div>
  );
};

export default Search;
