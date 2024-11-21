"use client";

import { Suspense, useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import CategoryList from "./CategoryList";
import { CategoryType } from "@/types";

interface Props {
  data: CategoryType[];
}

const CategorySidebarClient = ({ data }: Props) => {
  const [categories, setCategories] = useState<CategoryType[] | []>(data ?? []);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const results = data.filter((category) =>
      category.cat_name_en.toLowerCase().includes(searchText.toLowerCase())
    );

    setCategories(results);
  }, [searchText, data]);

  return (
    <>
      <div className="p-2">
        <SearchBox value={searchText} setValue={setSearchText} />
      </div>

      <div className="p-2 overflow-y-auto overflow-x-hidden space-y-4 w-full max-h-[76vh] lg:max-h-[45vh] xl:max-h-[62vh]">
        {categories.length ? (
          categories.map((category) => (
            <Suspense key={crypto.randomUUID()}>
              <CategoryList data={category} />
            </Suspense>
          ))
        ) : (
          <p className="text-center text-gray-500">No Category Found!</p>
        )}
      </div>
    </>
  );
};

export default CategorySidebarClient;
