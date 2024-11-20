import { axiosInstance } from "@/axiosInstance/instance";
import { AllInfoType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useGetDuaDetails = () => {
  const params = useSearchParams();
  const catId = params.get("cat");

  const query = useQuery({
    queryKey: ["duaDetails", catId],
    queryFn: async () => {
      try {
        const { data }: { data: AllInfoType } = await axiosInstance(
          `/get-all-by-category/${catId}`
        );

        return data;
      } catch (error) {
        return null;
      }
    },
  });

  return query;
};

export default useGetDuaDetails;
