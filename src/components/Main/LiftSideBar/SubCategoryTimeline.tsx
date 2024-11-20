"use client";

import { axiosInstance } from "@/axiosInstance/instance";
import { SubcategoryType } from "@/types";
import React, { FC, HTMLAttributes, useEffect, useState } from "react";
import SubCategoryButton from "./SubCategoryButton";
import DuaTimeline from "./DuaTimeline";

interface SubCategoryTimelineProps extends HTMLAttributes<HTMLDivElement> {
  // setSubCatId?: Dispatch<SetStateAction<string>>;
  catId: number;
  subCatId: number;
}

const SubCategoryTimeline: FC<SubCategoryTimelineProps> = ({
  catId,
  subCatId,
  ...props
}) => {
  const [data, setData] = useState<SubcategoryType[] | []>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axiosInstance<SubcategoryType[]>(
        `/get-sub-categories/${catId}`
      );
      setData(data);
    })();
  }, [catId]);

  return data.length
    ? data.map((subCat) => (
        <React.Fragment key={subCat.subcat_id}>
          <a href={`#${subCat.subcat_name_en}`} className="no-underline">
            <section className="bg-white mt-2">
              <div className="ml-4 w-full">
                <div className="relative col-span-12 px-4 space-y-6">
                  <div className="relative px-4 col-span-8 space-y-4 before:absolute before:top-0 before:bottom-0 before:w-0.5 before:-left-3 before:border-l-2 before:border-dotted before:border-green-500">
                    <div
                      {...props}
                      className="flex flex-col relative before:absolute before:top-2 before:w-2 before:h-2 before:rounded-full before:left-[-31px] before:z-[1] before:bg-green-600"
                    >
                      <SubCategoryButton data={subCat} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </a>
          {subCatId === subCat.subcat_id && catId === subCat.cat_id ? (
            <DuaTimeline subCatId={subCatId} catId={catId} />
          ) : null}
        </React.Fragment>
      ))
    : null;
};

export default SubCategoryTimeline;
