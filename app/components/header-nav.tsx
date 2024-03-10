"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SessionData } from "../lib/forge";
import LogoutButton from "./logoutbutton";

interface HeaderNavProps {
  user: SessionData;
}

const HeaderNav = ({user}:HeaderNavProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  console.log(user, "in the header")

  return (
    <header className="flex items-center justify-between bg-[#999] text-black p-2">
      <h1 className="flex items-center">
        <Image
          src="/moon.png"
          alt="she knows it"
          width={32}
          height={32}
          className="mr-2"
        />
        <Link href="/dashboard" className="font-bold">
          LunarCrypticStation
        </Link>
      </h1>

      <nav className="w-[220px] flex items-center gap-2 text-sm">
        <Link
          href="/about"
          className="p-2 bg-[#111] text-white hover:text-black hover:bg-[#f4f4f4]  font-bold rounded-md"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="p-2 bg-[#111] text-white hover:text-black hover:bg-[#f4f4f4] font-bold  rounded-md "
        >
          Contact
        </Link>

        <div className="relative inline-block">

          <button
            className="p-2 bg-[#111] text-white hover:text-black hover:bg-[#f4f4f4] font-bold  rounded-md"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            Account
          </button>

          {isDropdownOpen && (
            <div className="absolute right-[1px] mt-2 bg-[#222] border-1 z-100 rounded-md shadow-lg w-[120px] text-right capitalize">
              <div className="w-full">
                  <a
                    href={`/profile/${user.userId}`}
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full"
                  >
                    Profile
                  </a>
                  <a
                    href="/blog"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full"
                  >
                    blog
                  </a>
                  <a
                    href="/chamber"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full"
                  >
                    Chamber
                  </a>
                  <a
                    href="/blog/create-blog"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800 w-full"
                  >
                    create blog
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
