"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const Header = () => {
  const path = usePathname();

  return (
    <header className="my-10 gap-5">
      <nav className="flex justify-between container w-full">
        <Link href={"/"} className="flex items-center space-x-2">
          <Image
            src={"/icons/logo.svg"}
            width={30}
            height={30}
            alt="BookWise"
          />
          <span className="font-bold text-white"> BookWise</span>
        </Link>
        <ul className="flex flex-row items-center space-x-4 ">
          <li
            className={
              (cn("capitalize"),
              path === "/" ? "text-light-200" : "text-light-100")
            }
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={
              (cn("capitalize"),
              path === "/Search" ? "text-light-200" : "text-light-100")
            }
          >
            <Link href={"/"}>Search</Link>
          </li>
          <li>
            <Link href={"/"} className="flex items-center space-x-2">
              <Avatar
                style={{
                  width: "30px",
                  height: "30px",
                }}
              >
                <AvatarFallback className="text-sm">NUH</AvatarFallback>
              </Avatar>
              <span className="text-light-100 font-semibold">Noor</span>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Image
                src={"/icons/logout.svg"}
                width={20}
                height={20}
                alt="Logout"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
