import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1 day"),
    keepPreviousData: true,
    initialData: {
      count: genres.length,
      next: null,
      prev: null,
      results: genres,
    },
  });
};

export default useGenres;
