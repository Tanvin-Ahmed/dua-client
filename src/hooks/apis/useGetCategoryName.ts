import { axiosInstance } from "@/axiosInstance/instance";
import { CatNameType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import useCatId from "../useCatId";

const useGetCategoryName = () => {
  const catId = useCatId();

  const query = useQuery({
    queryKey: ["categoryName", catId],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance<CatNameType>(
          `/get-cat-name/${catId}`
        );

        return data;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return null;
      }
    },
  });

  return query;
};

export default useGetCategoryName;
