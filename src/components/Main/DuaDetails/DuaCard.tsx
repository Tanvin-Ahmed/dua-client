"use client";

import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineReport } from "react-icons/md";
import { DuaType } from "@/types";
import { FC, useContext } from "react";
import { appContext } from "@/components/context/AppContext";

interface DuaCardType {
  dua: DuaType;
}

const DuaCard: FC<DuaCardType> = ({ dua }) => {
  const { sectionRefs } = useContext(appContext);

  return (
    <div
      ref={(el) => {
        sectionRefs.current[dua.dua_id] = el;
      }}
      className="p-5 bg-white rounded-lg"
    >
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Image src={"/icons/allah.png"} height={35} width={35} alt="" />
        <h3 className="text-green-600 text-lg font-semibold">
          {dua.dua_id} {dua.dua_name_en}
        </h3>
      </div>
      {/* body */}
      <div className="my-4 mb-6">
        <div className="mb-4">
          {dua.top_en && <p className="my-2">{dua.top_en}</p>}
          {dua.dua_arabic && (
            <p className="my-2 text-right text-lg">{dua.dua_arabic}</p>
          )}
          {dua.transliteration_en && (
            <p className="font-semibold my-2">
              Transliteration: {dua.transliteration_en}
            </p>
          )}
          {dua.translation_en && (
            <p className="text-gray-500 my-2">
              Translation: {dua.translation_en}
            </p>
          )}
          {dua.bottom_en && <p className="my-2">{dua.bottom_en}</p>}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-green-600">Reference:</p>
          <p>{dua.refference_en}</p>
        </div>
      </div>
      {/* footer */}
      <div className="flex justify-end items-center gap-x-3">
        <div
          title="Copy"
          className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <IoCopyOutline size={20} className="text-gray-500" />
        </div>
        <div
          title="Bookmark"
          className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <CiBookmark size={20} className="text-gray-500" />
        </div>
        <div
          title="Memorize"
          className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <HiOutlineLightBulb size={20} className="text-gray-500" />
        </div>
        <div
          title="Share"
          className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <GoShareAndroid size={20} className="text-gray-500" />
        </div>
        <div
          title="Report"
          className="p-1 rounded cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <MdOutlineReport size={20} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
