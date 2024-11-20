"use client";
import { appContext } from "@/components/context/AppContext";
import useGetCategoryName from "@/hooks/apis/useGetCategoryName";
import { useContext } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";

const DuaCategoryMenu = () => {
  const { setCategoryOpen } = useContext(appContext);
  const { data: category, isLoading } = useGetCategoryName();

  const toggle = () => {
    setCategoryOpen(true);
  };

  return (
    <div
      className="p-5 bg-white rounded-lg cursor-pointer mb-3"
      onClick={toggle}
    >
      <div className="flex items-center gap-x-3">
        <IoMenuOutline size={30} />
        {/* selected category name */}
        {isLoading ? (
          <Skeleton width={200} height={15} />
        ) : (
          <p className="font-semibold">{category?.cat_name_en}</p>
        )}
      </div>
    </div>
  );
};

export default DuaCategoryMenu;
