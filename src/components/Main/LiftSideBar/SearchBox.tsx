import Image from "next/image";

const SearchBox = () => {
  return (
    <form className="relative w-full">
      <input
        type="text"
        className="border-gray-200 border w-full py-2 rounded-lg pl-8 focus:outline-green-600 text-[14px]"
        placeholder="Search by Categories"
      />
      <Image
        className="absolute left-1 top-2 p-0.5"
        src={"/icons/search.png"}
        width={24}
        height={24}
        alt="search"
      />
    </form>
  );
};

export default SearchBox;
