"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { TfiStatsUp } from "react-icons/tfi";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <>
      <li>
        <Link
          className={`${pathName === "/" ? "text-white border bg-green-900 rounded-md" : ""}  mr-1 text-sm md:text-base md:mr-2  font-semibold`}
          href={"/"}
        >
          <AiOutlineHome />
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`${pathName === "/timeline" ? "text-white border bg-green-900 rounded-md" : ""}  mr-1 text-sm md:text-base md:mr-2 font-semibold`}
          href={"/timeline"}
        >
          <BsStopwatch />
          Timeline
        </Link>
      </li>
      <li>
        <Link
          className={`${pathName === "/stats" ? "text-white border bg-green-900 rounded-md" : ""} mr-1 text-sm md:text-base md:mr-2  font-semibold`}
          href={"/stats"}
        >
          <TfiStatsUp />
          Stats
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
