import { cn } from "@/utils";
import { FC, HTMLAttributes } from "react";
import { axiosInstance } from "@/axiosInstance/instance";
import { CategoryType } from "@/types";
import CategorySidebarClient from "./CategorySidebarClient";

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

      <CategorySidebarClient data={data} />
    </div>
  );
};

export default LeftSideBar;
