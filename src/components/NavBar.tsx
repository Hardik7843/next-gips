/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import NavLink from "./NavLink";
import SideBar from "./SideBar";
import { useState } from "react";
import { navlinks } from "@/config/navConfig";
import logo from "../../public/logo.svg";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavBar = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    state: boolean
  ) => {
    setIsOpen(state);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black/30 backdrop-blur-md border-b border-gray-700">
      <div className="flex items-center justify-between mx-auto p-4 max-w-7xl">
        {/* Left side: Logo + Text */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <Image src={logo} alt="LOGO" width={40} height={40} />
            <div className="text-white font-mono leading-tight text-sm">
              <p className="font-semibold font-mono">RAIBO</p>
              <p className="font-semibold font-mono">INFOTECH</p>
            </div>
          </Link>
        </div>

        {/* Right side: Nav links (desktop) + Mobile menu */}
        <div className="flex items-center space-x-6">
          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <ul className="flex space-x-8 text-white font-medium">
              {navlinks.map((nav, index) => (
                <NavLink name={nav.name} path={nav.path} key={index} />
              ))}
            </ul>
          </div>

          <div>
            <Link
              href={"/bookdemo"}
              className=" text-white px-3 py-2 rounded-lg bg-purple-500 hover:bg-blue-500"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            {!isOpen ? (
              <button
                onClick={(e) => handleMobileNavBar(e, true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Menu className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={(e) => handleMobileNavBar(e, false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && <SideBar handleClose={() => setIsOpen(false)} />}
    </nav>
  );
};

export default NavBar;
