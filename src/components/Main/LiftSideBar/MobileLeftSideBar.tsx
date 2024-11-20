"use client";
import { appContext } from "@/components/context/AppContext";
import { cn } from "@/utils";
import { FC, ReactNode, useContext } from "react";

interface MobileLeftSideBar {
  children: ReactNode;
}

const MobileLeftSideBar: FC<MobileLeftSideBar> = ({ children }) => {
  const { isCategoryOpen, setCategoryOpen } = useContext(appContext);

  const toggleSidebar = () => {
    setCategoryOpen(false);
  };

  return isCategoryOpen ? (
    <>
      <div
        onClick={toggleSidebar}
        className="lg:hidden fixed w-screen inset-0 bg-black/40 transition-opacity duration-300"
      />
      <div
        className={cn(
          "lg:hidden fixed z-50 top-0 left-0 h-screen w-[80%] md:w-[50%] lg:w-[40%] shadow-lg bg-white rounded-r-3xl p-2 py-4 transform transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isCategoryOpen,
            "-translate-x-full": !isCategoryOpen,
          }
        )}
      >
        {children}
      </div>
    </>
  ) : null;
};

export default MobileLeftSideBar;
