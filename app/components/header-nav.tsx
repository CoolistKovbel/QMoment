"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SessionData } from "../lib/dictionary";
import LogoutButton from "./logoutbutton";

interface HeaderNavProps {
  user: SessionData;
}

const HeaderNav = ({ user }: HeaderNavProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-full bg-[#999] text-black p-2">

      <h1 className="flex items-center">
        <Image
          src="/bbS.png"
          alt="she knows it"
          width={32}
          height={32}
          className="mr-2"
        />

        <Link href="/dashboard" className="font-bold">
          de AI
        </Link>
      </h1>

      <nav className="w-[220px] flex items-center gap-2 text-sm">
        <Link
          href="/about"
          className="p-1 bg-[#111] text-white hover:text-black hover:bg-[#f4f4f4]  font-bold rounded-md"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="p-1 bg-[#111] text-white hover:text-black hover:bg-[#f4f4f4] font-bold  rounded-md "
        >
          Contact
        </Link>

        <div className="relative inline-block">
          <button
            className="p-1 bg-[#111] text-white hover:text-black hover:bg-[#f4f4f4] font-bold  rounded-md"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            Account
          </button>

          {isDropdownOpen && (
            <div className="absolute z-[120] right-[1px] mt-2 bg-[#222] border-1 z-100 rounded-md shadow-lg w-[120px] text-right capitalize">
              <div className="w-full">
                <a
                  href={`/profile`}
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full"
                >
                  Profile
                </a>
                <a
                  href="/custom-ai"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full"
                >
                  Custom-AI
                </a>
                <a
                  href="/chest"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full"
                >
                  ch3st
                </a>
                <a
                  href={`/profile/${user.userId}/edit`}
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full"
                >
                  settings
                </a>

                <LogoutButton />
              </div>
            </div>
          )}

        </div>
      </nav>

    </header>
  );
};

export default HeaderNav;
