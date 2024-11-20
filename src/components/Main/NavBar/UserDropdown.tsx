"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
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
        className="flex items-center space-x-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={"/icons/avatar.png"}
          alt={`avatar`}
          height={45}
          width={45}
          className="rounded-full"
        />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg"
        >
          <ul className="py-2">
            <li
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Profile
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Settings
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
