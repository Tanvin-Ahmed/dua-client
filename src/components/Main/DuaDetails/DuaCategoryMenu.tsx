"use client";

import { axiosInstance } from "@/axiosInstance/instance";
import { appContext } from "@/components/context/AppContext";
import { useWindowWidth } from "@react-hook/window-size";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

interface CatNameType {
  cat_name_bn: string;
  cat_name_en: string;
  cat_id: number;
}

const DuaCategoryMenu = () => {
  const { setCategoryOpen } = useContext(appContext);
  const params = useSearchParams();
  const [category, setCategory] = useState<CatNameType>();
  const width = useWindowWidth();

  const toggle = () => {
    setCategoryOpen(true);
  };

  useEffect(() => {
    if (width > 1024) return;
    const catId = params.get("cat");
    if (!Number(catId)) return;

    (async () => {
      const { data } = await axiosInstance<CatNameType>(
        `/get-cat-name/${catId}`
      );

      setCategory(data);
    })();
  }, [params, width]);

  return (
    <div
      className="lg:hidden p-5 bg-white rounded-lg cursor-pointer mb-3"
      onClick={toggle}
    >
      <div className="flex items-center gap-x-3">
        <IoMenuOutline size={30} />
        {/* selected category name */}
        <p className="font-semibold">{category?.cat_name_en}</p>
      </div>
    </div>
  );
};

export default DuaCategoryMenu;
