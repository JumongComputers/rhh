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
      <nav className="bg-[#2c2c2c] opacity-90 top-0 left-0 sticky lg:relative z-10 flex items-center px-[8vw] py-8 justify-between gap-4">
        <Link href="/">
          <img src="/rise-hotel.svg" alt="Logo" className="lg:h-[80px] h-[40px] rounded-md" />
        </Link>
        <ul className={`lg:flex text-white gap-8 font-medium text-3xl ${isSidebarOpen ? "hidden" : "hidden md:flex"}`}>
          <li className={`hover:text-blue-400 ${router.pathname === "/" ? "text-blue-400" : ""}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`hover:text-blue-400 ${router.pathname === "/about" ? "text-blue-400" : ""}`}>
            <Link href="#about">About Us</Link>
          </li>
          <li className={`hover:text-blue-400 ${router.pathname === "/rooms" ? "text-blue-400" : ""}`}>
            <Link href="#rooms">Rooms</Link>
          </li>
          <li className={`hover:text-blue-400 ${router.pathname === "/contact" ? "text-blue-400" : ""}`}>
            <Link href="/contact">Contact Us</Link>
          </li>
          {/* <li className={`hover:text-blue-400 ${router.pathname === "/auth/login" ? "text-blue-400" : ""}`}>
            <Link href="/auth/login">Sign in</Link>
          </li> */}
        </ul>
        <div className="md:hidden" onClick={toggleSidebar}>
          <Menu size={24} color="white" />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50" onClick={closeSidebar}>
          <div className="bg-white fixed inset-y-0 right-0 w-[70vw] p-4 flex flex-col items-center">
            <div className="mb-12">
              <X size={32} color="black" onClick={closeSidebar} />
            </div>
            <ul className="text-black font-light text-4xl flex flex-col gap-6 items-center">
              <li className={`hover:text-blue-400 ${router.pathname === "/" ? "text-blue-400" : ""}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`hover:text-blue-400 ${router.pathname === "/about" ? "text-blue-400" : ""}`}>
                <Link href="#about">About Us</Link>
              </li>
              <li className={`hover:text-blue-400 ${router.pathname === "/rooms" ? "text-blue-400" : ""}`}>
                <Link href="#rooms">Rooms</Link>
              </li>
              <li className={`hover:text-blue-400 ${router.pathname === "/contact" ? "text-blue-400" : ""}`}>
                <Link href="/contact">Contact Us</Link>
              </li>
              {/* <li className={`hover:text-blue-400 ${router.pathname === "/auth/login" ? "text-blue-400" : ""}`}>
                <Link href="/auth/login">Sign in</Link>
              </li> */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
