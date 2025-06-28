import useGetAllSearchParams from "../components/hooks/useGetAllSearchParams";

export function useRowNumber() {
  const { allSearchParams } = useGetAllSearchParams();
  const page = allSearchParams.page || "1";
  const limit = allSearchParams.limit || "20";

  const getRowNumber = (rowIndex: number) => {
    return +page * +limit - +limit + (rowIndex + 1);
  };

  return { getRowNumber };
}
