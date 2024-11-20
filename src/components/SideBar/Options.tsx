"use client";

import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";
import UserDropdown from "../Main/NavBar/UserDropdown";
import { useEffect, useState } from "react";

const Options = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const windowWidth = useWindowWidth();

  const imgSize = windowWidth <= 350 ? 16 : 20;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <>
      <div className="rounded-full w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] bg-[#E8F0F5] flex justify-center items-center">
        <Image
          src={"/icons/home.png"}
          width={imgSize}
          height={imgSize}
          alt="home"
        />
      </div>
      <div className="rounded-full w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] bg-[#E8F0F5] flex justify-center items-center">
        <Image
          src={"/icons/menu.png"}
          width={imgSize}
          height={imgSize}
          alt="menu"
        />
      </div>
      <div className="rounded-full w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] bg-[#E8F0F5] flex justify-center items-center">
        <Image
          src={"/icons/memorize.png"}
          width={imgSize}
          height={imgSize}
          alt="memorize"
        />
      </div>
      <div className="rounded-full w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] bg-[#E8F0F5] flex justify-center items-center">
        <Image
          src={"/icons/keep-minus.png"}
          width={imgSize}
          height={imgSize}
          alt="keep-minus"
        />
      </div>
      <div className="rounded-full md:flex hidden w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] bg-[#E8F0F5] justify-center items-center">
        <Image
          src={"/icons/ruqyah.png"}
          width={imgSize}
          height={imgSize}
          alt="ruqyah"
        />
      </div>
      <div className="hidden xl:flex rounded-full w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] bg-[#E8F0F5] justify-center items-center">
        <Image
          src={"/icons/dua-info.png"}
          width={imgSize}
          height={imgSize}
          alt="dua-info"
        />
      </div>
      <div className="hidden xl:flex rounded-full w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] bg-[#E8F0F5] justify-center items-center">
        <Image
          src={"/icons/books.png"}
          width={imgSize}
          height={imgSize}
          alt="books"
        />
      </div>
      <div className="flex md:hidden rounded-full w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] bg-[#E8F0F5] justify-center items-center">
        <UserDropdown />
      </div>
    </>
  );
};

export default Options;
