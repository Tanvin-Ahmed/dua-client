"use client";
import { appContext } from "@/components/context/AppContext";
import useGetDuaNames from "@/hooks/apis/useGetDuaNames";
import Image from "next/image";
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";

const DuaTimeline = () => {
  const { sectionRefs } = useContext(appContext);
  const { data, isLoading } = useGetDuaNames();

  const scrollToSection = (id: number): void => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return isLoading ? (
    <Skeleton count={2.5} height={4} className="ml-10" />
  ) : data && data.length ? (
    data.map((dua) => (
      <div
        key={crypto.randomUUID()}
        onClick={() => scrollToSection(dua.dua_id)}
      >
        <div className="flex justify-start items-center gap-x-3 ml-11 my-2">
          <Image src={"/icons/duaarrow.svg"} height={12} width={12} alt="dua" />
          <p className="text-[12px] cursor-pointer">{dua.dua_name_en}</p>
        </div>
      </div>
    ))
  ) : null;
};

export default DuaTimeline;