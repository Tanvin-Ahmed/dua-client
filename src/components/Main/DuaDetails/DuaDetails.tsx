"use client";
import { cn } from "@/utils";
import { FC, Fragment, HTMLAttributes } from "react";
import SectionCard from "./SectionCard";
import DuaCard from "./DuaCard";
import DuaCategoryMenu from "./DuaCategoryMenu";
import useGetDuaDetails from "@/hooks/apis/useGetDuaDetails";
import SectionCardSkeleton from "@/components/Skeletons/DuaDetails/SectionCardSkeleton";
import DuaCardSkeleton from "@/components/Skeletons/DuaDetails/DuaCardSkeleton";

const DuaDetails: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const { data, isLoading } = useGetDuaDetails();

  return (
    <div className={cn(className)}>
      <div className="lg:hidden">
        <DuaCategoryMenu />
      </div>
      <div className="flex flex-col gap-y-4 max-h-[55vh] lg:max-h-[65vh] xl:max-h-[80vh] overflow-hidden overflow-y-auto">
        {isLoading ? (
          <>
            <SectionCardSkeleton />
            <DuaCardSkeleton />
            <DuaCardSkeleton />
            <DuaCardSkeleton />
          </>
        ) : data ? (
          <>
            {data.subcategories.map((subCat) => (
              <Fragment key={subCat.subcat_id}>
                <SectionCard sectionName={subCat.subcat_name_en} />
                {subCat.dua_list.map((dua, index) => (
                  <DuaCard key={dua.dua_id} dua={dua} index={index} />
                ))}
              </Fragment>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default DuaDetails;
