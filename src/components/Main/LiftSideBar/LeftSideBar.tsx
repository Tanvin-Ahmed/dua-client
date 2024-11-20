import { cn } from "@/utils";
import { FC, HTMLAttributes } from "react";
import SearchBox from "./SearchBox";
import List from "./List";
import { axiosInstance } from "@/axiosInstance/instance";
import { CategoryType } from "@/types";

const LeftSideBar: FC<HTMLAttributes<HTMLDivElement>> = async ({
  className,
  ...rest
}) => {
  const { data } = await axiosInstance<CategoryType[]>("/get-categories");

  return (
    <div
      {...rest}
      className={cn("rounded-lg bg-white overflow-hidden", className)}
    >
      <div className="rounded-t-lg bg-green-600 py-3 text-center">
        <h1 className="text-white font-semibold">Categories</h1>
      </div>
      <div className="p-2">
        <SearchBox />
      </div>

      <div className="p-2 overflow-y-auto overflow-x-hidden space-y-4 w-full max-h-[76vh] lg:max-h-[45vh] xl:max-h-[62vh]">
        {data.length
          ? data.map((category) => <List key={category.id} data={category} />)
          : null}
      </div>
    </div>
  );
};

export default LeftSideBar;
