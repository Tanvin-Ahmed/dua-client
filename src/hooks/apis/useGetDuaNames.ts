import { axiosInstance } from "@/axiosInstance/instance";
import { DuaNameType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import useCatId from "../useCatId";
import useSubCatId from "../useSubCatId";

const useGetDuaNames = () => {
  const catId = useCatId();
  const subCatId = useSubCatId();

  const query = useQuery({
    queryKey: ["duaNames", catId, subCatId],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance<DuaNameType[]>(
          `/get-dua-name/${catId}/${subCatId}`
        );

        return data.filter((dua) => dua.dua_name_en);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return [];
      }
    },
  });

  return query;
};

export default useGetDuaNames;
