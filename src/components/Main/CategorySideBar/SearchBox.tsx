import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const SearchBox = ({ setValue, value }: Props) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="border-gray-200 border w-full py-2 rounded-lg pl-8 focus:outline-green-600 text-[14px]"
        placeholder="Search by Categories"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Image
        className="absolute left-1 top-2 p-0.5"
        src={"/icons/search.png"}
        width={24}
        height={24}
        alt="search"
      />
    </div>
  );
};

export default SearchBox;
