"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import Image from "next/image";
import "./styles.css";
// import Button from "./ui/Button";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image
              className="h-10 w-10 mr-2"
              src={logo}
              alt="Legal Excelencia Logo"
            />
            <span className="custom-font text-xl tracking-tight text-[#1f3864]">
              LEGAL EXCELENCIA
            </span>
          </div>
          <div className="flex justify-between items-center">
            <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
              {navItems.map((item, index) => (
                <li key={index} className="hover:text-slate-400">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <a
              className="hidden lg:flex justify-center space-x-12 items-center ml-8 px-6 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-200 ease-in-out cursor-pointer"
              href="#info"
              onClick={toggleNavbar}
            >
              Contact us
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="sticky top-0 right-0 z-50 border-1 w-full p-6 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 hover:text-slate-400">
                  <a onClick={toggleNavbar} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
              <div className="mt-auto">
                <div className="pt-6">
                  <a
                    className="block py-3 text-center text-sm leading-normal bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition duration-200"
                    href="#info"
                    onClick={toggleNavbar}
                  >
                    Contact Us
                  </a>
                </div>
                <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                  <span>© {new Date().getFullYear()} All rights reserved.</span>
                </p>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
