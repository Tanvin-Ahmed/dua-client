"use client";
import { FC, useCallback } from "react";
import CategoryCard from "./CategoryCard";
import SubCategoryTimeline from "./SubCategoryTimeline";
import { CategoryType } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import useCatId from "@/hooks/useCatId";
import useSubCatId from "@/hooks/useSubCatId";

interface ListPropType {
  data: CategoryType;
}

const CategoryList: FC<ListPropType> = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const catId = useCatId();
  const subCatId = useSubCatId();

  const setQueryStringInUrl = useCallback(
    (queryString: string) => {
      router.push(pathname.replace(/\/$/, "") + "?" + queryString);
    },
    [router, pathname]
  );

  return (
    <div className="w-full">
      <CategoryCard
        data={data}
        onClick={() => setQueryStringInUrl(`cat=${data.cat_id}`)}
        clicked={data.cat_id === catId}
      />

      {catId && catId === data.cat_id ? (
        <>
          <SubCategoryTimeline catId={catId} subCatId={subCatId!} />
        </>
      ) : null}
    </div>
  );
};

export default CategoryList;
