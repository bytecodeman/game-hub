import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import ScreenShot from "../entities/ScreenShot";

const useScreenShots = (id: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: apiClient.getAll,
    staleTime: ms("1 day"),
  });
};

export default useScreenShots;
