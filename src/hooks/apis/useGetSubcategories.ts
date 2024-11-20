import { axiosInstance } from "@/axiosInstance/instance";
import { SubcategoryType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useGetSubcategories = () => {
  const params = useSearchParams();
  const catId = params.get("cat");

  const query = useQuery({
    queryKey: ["subcategories", catId],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance<SubcategoryType[]>(
          `/get-sub-categories/${catId}`
        );

        return data;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return [];
      }
    },
  });

  return query;
};

export default useGetSubcategories;
