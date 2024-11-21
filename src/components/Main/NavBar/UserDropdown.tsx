"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsPatchCheckFill } from "react-icons/bs";
import { PiWarningOctagonFill } from "react-icons/pi";
import { FaCopyright } from "react-icons/fa6";
import { TfiLayersAlt } from "react-icons/tfi";
import { cn } from "@/utils";

const data = [
  {
    id: crypto.randomUUID(),
    label: "Support Us",
    icon: <FaHandHoldingHeart className="text-green-600" />,
  },
  {
    id: crypto.randomUUID(),
    label: "Download Dua App",
    icon: <MdOutlineFileDownload className="text-green-600" />,
  },
  {
    id: crypto.randomUUID(),
    label: "Privacy Policy",
    icon: <IoShieldCheckmarkSharp className="text-green-600" />,
  },
  {
    id: crypto.randomUUID(),
    label: "Thanks & Credits",
    icon: <BsPatchCheckFill className="text-green-600" />,
  },
  {
    id: crypto.randomUUID(),
    label: "About Us",
    icon: <PiWarningOctagonFill className="text-green-600" />,
  },
  {
    id: crypto.randomUUID(),
    label: "Copyright Warning",
    icon: <FaCopyright className="text-green-600" />,
  },
  {
    id: crypto.randomUUID(),
    label: "Our Other Projects",
    icon: <TfiLayersAlt className="text-green-600" />,
  },
];

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="flex items-center space-x-2 focus:outline-none"
        onClick={() => setIsOpen((state) => !state)}
      >
        <Image
          src={"/icons/avatar.png"}
          alt={`avatar`}
          height={45}
          width={45}
          className="rounded-full"
        />
        <IoMdArrowDropdown size={25} className="text-gray-700" />
      </button>

      <div
        ref={dropdownRef}
        className={cn(
          "absolute z-50 right-0 mt-2 w-64 bg-white border rounded-md shadow-lg transition-all duration-300 ease-in-out transform",
          {
            "opacity-100 scale-100": isOpen,
            "opacity-0 scale-95 pointer-events-none": !isOpen,
          }
        )}
      >
        <div className="absolute -top-2 right-11 w-4 h-4 bg-white border-l border-t border-gray-300 transform rotate-45" />
        <ul className="py-2">
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
            >
              {item.icon} <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
