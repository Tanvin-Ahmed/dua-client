"use client";

import { cn } from "@/utils";
import Image from "next/image";
import { FC, HTMLAttributes, useContext, useState } from "react";
import Menus from "./Menus";
import { appContext } from "@/components/context/AppContext";

const settingsData = [
  {
    id: 1,
    label: "Language Settings",
    icon: "/icons/translate.png",
  },
  {
    id: 2,
    label: "General Settings",
    icon: "/icons/general-setting.png",
  },
  {
    id: 3,
    label: "Font Settings",
    icon: "/icons/font-setting.png",
  },
  {
    id: 4,
    label: "Appearance Settings",
    icon: "/icons/font-setting.png",
  },
];

const RightSideBar: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  const { isSettingsOpen, setIsSettingsOpen } = useContext(appContext);
  const [selectedId, setSelectedId] = useState(0);

  const toggleSidebar = () => {
    setIsSettingsOpen(false);
  };

  const handleSelectSetting = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? 0 : id));
  };

  return (
    <>
      <div
        {...rest}
        className={cn(
          "2xl:block hidden relative rounded-lg bg-white py-6",
          className
        )}
      >
        <div className="py-3 text-center">
          <h1 className="font-semibold">Settings</h1>
        </div>

        <div className="flex flex-col justify-center gap-y-3 px-2">
          {settingsData.map((data) => (
            <div
              key={data.id}
              className={cn("rounded-md bg-white gap-x-3", {
                "border border-gray-200": selectedId === data.id,
              })}
            >
              <div
                className={cn(
                  "relative flex items-center bg-[#F7F8FA] p-2 px-4 cursor-pointer",
                  {
                    "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:h-full before:bg-green-500 before:rounded-l":
                      selectedId === data.id,
                  }
                )}
                onClick={() => handleSelectSetting(data.id)}
              >
                <Image
                  src={data.icon}
                  height={24}
                  width={24}
                  alt="translate"
                  className={cn("rounded-full p-1 bg-[#eff2fc]", {
                    "text-green-600": selectedId === data.id,
                  })}
                />
                <p
                  className={cn("text-gray-500 text-[12px]", {
                    "text-green-600": selectedId === data.id,
                  })}
                >
                  {data.label}
                </p>
              </div>

              {selectedId === data.id && (
                <Menus className="mt-4 p-2 px-4" selectedId={selectedId} />
              )}
            </div>
          ))}
        </div>
      </div>
      {isSettingsOpen && (
        <>
          <div
            onClick={toggleSidebar}
            className="2xl:hidden fixed w-screen inset-0 bg-black/40 transition-opacity duration-300"
          />
          <div
            className={cn(
              "2xl:hidden fixed z-50 top-0 right-0 h-screen w-64 shadow-lg bg-white rounded-l-3xl p-2 py-4 transform transition-transform duration-300 ease-in-out",
              {
                "translate-x-0": isSettingsOpen,
                "translate-x-full": !isSettingsOpen,
              }
            )}
          >
            <h1 className="text-xl text-center mt-6">Settings</h1>

            <div className="flex flex-col justify-center gap-y-3 px-2 mt-8">
              {settingsData.map((data) => (
                <div
                  key={data.id}
                  className={cn("rounded-md bg-white gap-x-3", {
                    "border border-gray-200": selectedId === data.id,
                  })}
                >
                  <div
                    className={cn(
                      "relative flex items-center bg-[#F7F8FA] p-2 px-4 cursor-pointer",
                      {
                        "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:h-full before:bg-green-500 before:rounded-l":
                          selectedId === data.id,
                      }
                    )}
                    onClick={() => handleSelectSetting(data.id)}
                  >
                    <Image
                      src={data.icon}
                      height={24}
                      width={24}
                      alt="translate"
                      className={cn("rounded-full p-1 bg-[#eff2fc]", {
                        "text-green-600": selectedId === data.id,
                      })}
                    />
                    <p
                      className={cn("text-gray-500 text-[12px]", {
                        "text-green-600": selectedId === data.id,
                      })}
                    >
                      {data.label}
                    </p>
                  </div>

                  {selectedId === data.id && (
                    <Menus className="mt-4 p-2 px-4" selectedId={selectedId} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RightSideBar;
