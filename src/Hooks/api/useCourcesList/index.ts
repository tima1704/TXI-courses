import { CourcesService } from "Helpers/api/Cources";
import { useQuery } from "react-query";

export const useCourcesList = () => {
  const {
    isError,
    isLoading,
    data: courcesList,
  } = useQuery("courcesList", CourcesService.getAllView);

  return { isError, isLoading, courcesList };
};

export const useUserCourcesList = () => {
  const {
    isError,
    isLoading,
    data: courcesList,
  } = useQuery(["user", "corces", "list"], CourcesService.getAllUser, {
    refetchOnWindowFocus: false,
  });

  return { isError, isLoading, data: courcesList };
};
