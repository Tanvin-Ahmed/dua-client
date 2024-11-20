"use client";
import Image from "next/image";

const SearchBox = () => {
  return (
    <div className="relative gap-x-4">
      <input
        type="text"
        className="px-2 py-3 rounded-lg pr-12 focus:outline-green-500"
        placeholder="Search by Dua Name"
      />
      <button
        type="button"
        className="flex justify-center items-center absolute rounded-lg bg-[#F3F4F6] right-1 top-1 p-2"
      >
        <Image src={"/icons/search.png"} width={24} height={24} alt="search" />
      </button>
    </div>
  );
};

export default SearchBox;
