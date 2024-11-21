"use client";

import { cn } from "@/utils";
import { FC, HTMLAttributes, useContext } from "react";
import UserDropdown from "./UserDropdown";
import SearchBox from "./SearchBox";
import { IoIosSettings } from "react-icons/io";
import { appContext } from "@/components/context/AppContext";
import Image from "next/image";

const NavBar: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const { setIsSettingsOpen } = useContext(appContext);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 lg:relative flex items-center justify-between bg-white shadow-lg p-2 rounded lg:bg-transparent lg:shadow-none",
        className
      )}
    >
      <div className="flex-[0.62] flex items-center">
        <Image
          src={"/logo.png"}
          width={73}
          height={73}
          alt="logo"
          className="xl:hidden"
        />
        <h1 className="text-2xl font-semibold hidden xl:block">Duas Page</h1>
        <h1 className="text-xl font-semibold xl:hidden">Dua & Ruqyah</h1>
      </div>
      <div className="flex md:flex-[0.38] items-center justify-between">
        <div className="hidden md:block">
          <SearchBox />
        </div>
        <div className="flex justify-center items-center">
          <div className="hidden md:block">
            <UserDropdown />
          </div>
          <IoIosSettings
            size={24}
            className="text-green-600 ml-5 cursor-pointer 2xl:hidden"
            onClick={() => setIsSettingsOpen(true)}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
