import { axiosInstance } from "@/axiosInstance/instance";
import { DuaNameType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useGetDuaNames = () => {
  const params = useSearchParams();
  const catId = params.get("cat");
  const subCatId = params.get("subcat");

  const query = useQuery({
    queryKey: ["duaNames", catId, subCatId],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance<DuaNameType[]>(
          `/get-dua-name/${catId}/${subCatId}`
        );

        return data;
      } catch (error) {
        return [];
      }
    },
  });

  return query;
};

export default useGetDuaNames;
