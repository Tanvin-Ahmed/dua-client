import { axiosInstance } from "@/axiosInstance/instance";
import { AllInfoType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import useCatId from "../useCatId";

const useGetDuaDetails = () => {
  const catId = useCatId();

  const query = useQuery({
    queryKey: ["duaDetails", catId],
    queryFn: async () => {
      try {
        const { data }: { data: AllInfoType } = await axiosInstance(
          `/get-all-by-category/${catId}`
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

export default useGetDuaDetails;
