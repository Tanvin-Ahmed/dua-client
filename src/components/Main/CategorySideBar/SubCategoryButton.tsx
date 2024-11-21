"use client";

import { SubcategoryType } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { FC, useCallback } from "react";

interface SubCategoryButton {
  data: SubcategoryType;
}
const SubCategoryButton: FC<SubCategoryButton> = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();

  const setQueryStringInUrl = useCallback(
    (queryString: string) => {
      router.push(pathname.replace(/\/$/, "") + "?" + queryString);
    },
    [router, pathname]
  );

  return (
    <p
      className="text-sm tracking-wide cursor-pointer outline-none text-left"
      onClick={() =>
        setQueryStringInUrl(`cat=${data.cat_id}&subcat=${data.subcat_id}`)
      }
    >
      {data.subcat_name_en}
    </p>
  );
};

export default SubCategoryButton;
