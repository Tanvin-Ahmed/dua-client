import { axiosInstance } from "@/axiosInstance/instance";
import { CatNameType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useGetCategoryName = () => {
  const params = useSearchParams();
  const catId = params.get("cat");

  const query = useQuery({
    queryKey: ["categoryName", catId],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance<CatNameType>(
          `/get-cat-name/${catId}`
        );

        return data;
      } catch (error) {
        return null;
      }
    },
  });

  return query;
};

export default useGetCategoryName;
