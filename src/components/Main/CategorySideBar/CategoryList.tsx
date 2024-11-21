"use client";
import { FC, useCallback } from "react";
import CategoryCard from "./CategoryCard";
import SubCategoryTimeline from "./SubCategoryTimeline";
import { CategoryType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ListPropType {
  data: CategoryType;
}

const CategoryList: FC<ListPropType> = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

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
        clicked={data.cat_id === Number(params.get("cat"))}
      />

      {!!Number(params.get("cat")) &&
      Number(params.get("cat")) === data.cat_id ? (
        <>
          <SubCategoryTimeline
            catId={Number(params.get("cat"))}
            subCatId={Number(params.get("subcat"))}
          />
        </>
      ) : null}
    </div>
  );
};

export default CategoryList;
