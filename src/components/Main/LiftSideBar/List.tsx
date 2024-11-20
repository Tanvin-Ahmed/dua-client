"use client";
import { FC, useCallback } from "react";
import Card from "./Card";
import SubCategoryTimeline from "./SubCategoryTimeline";
import { CategoryType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ListPropType {
  data: CategoryType;
}

const List: FC<ListPropType> = ({ data }) => {
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
      <Card
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

export default List;
