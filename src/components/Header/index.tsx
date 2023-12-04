import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <nav className="bg-[#2c2c2c] top-0 left-0 sticky lg:relative z-10 flex items-center px-[8vw] py-4 justify-between gap-4">
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className="h-16" />
        </Link>
        <ul
          className={`lg:flex text-white gap-8 font-light text-lg ${
            isSidebarOpen ? "hidden" : "hidden md:flex"
          }`}
        >
          <li
            className={`hover:text-blue-400 ${
              router.pathname === "/" ? "text-blue-400" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:text-blue-400 ${
              router.pathname === "/about" ? "text-blue-400" : ""
            }`}
          >
            <Link href="/about">About Us</Link>
          </li>
          <li
            className={`hover:text-blue-400 ${
              router.pathname === "/rooms" ? "text-blue-400" : ""
            }`}
          >
            <Link href="/rooms">Rooms</Link>
          </li>
          <li
            className={`hover:text-blue-400 ${
              router.pathname === "/contact" ? "text-blue-400" : ""
            }`}
          >
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="md:hidden" onClick={toggleSidebar}>
          <Menu size={24} color="white" />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50"
          onClick={closeSidebar}
        >
          <div className="bg-[#2c2c2c] fixed inset-y-0 right-0 w-64 p-4 flex flex-col items-center">
            <div className="mb-12">
              <X size={24} color="white" onClick={closeSidebar} />
            </div>
            <ul className="text-white font-light text-lg flex flex-col gap-6 items-center">
              <li
                className={`hover:text-blue-400 ${
                  router.pathname === "/" ? "text-blue-400" : ""
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`hover:text-blue-400 ${
                  router.pathname === "/about" ? "text-blue-400" : ""
                }`}
              >
                <Link href="/about">About Us</Link>
              </li>
              <li
                className={`hover:text-blue-400 ${
                  router.pathname === "/rooms" ? "text-blue-400" : ""
                }`}
              >
                <Link href="/rooms">Rooms</Link>
              </li>
              <li
                className={`hover:text-blue-400 ${
                  router.pathname === "/contact" ? "text-blue-400" : ""
                }`}
              >
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
