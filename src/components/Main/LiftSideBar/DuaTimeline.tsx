"use client";
import { appContext } from "@/components/context/AppContext";
import useGetDuaNames from "@/hooks/apis/useGetDuaNames";
import Image from "next/image";
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";

const DuaTimeline = () => {
  const { sectionRefs } = useContext(appContext);
  const { data, isLoading } = useGetDuaNames();

  const scrollToSection = (index: number): void => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return isLoading ? (
    <Skeleton count={2.5} height={4} className="ml-10" />
  ) : data && data.length ? (
    data.map((dua, index) => (
      <div key={dua.dua_id} onClick={() => scrollToSection(index)}>
        <div className="flex justify-start items-center gap-x-3 ml-11 my-2">
          <Image src={"/icons/duaarrow.svg"} height={12} width={12} alt="dua" />
          <p className="text-[12px] cursor-pointer">{dua.dua_name_en}</p>
        </div>
      </div>
    ))
  ) : null;
};

export default DuaTimeline;
