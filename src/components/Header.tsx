import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import WhatsAppChat from "./Whatsapp/Whatsapp";

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
     <div className="mx-auto py-2 bg-white text-blue-900 flex justify-between text-lg lg:text-2xl">
        <div className="flex justify-around w-full">
        <div className="flex gap-2 items-center">
        <i className="fa-regular fa-envelope "></i>
          <p>receptionist@risehighhotel.com</p>
        </div>
        <div className="flex gap-2">
        <i className="fa-solid fa-phone py-1"></i>
        <p>09076381843</p>
        </div>

        <div className=" flex gap-3">
       <div className="flex  gap-3 text-3xl">
            <Link href="#"><i className="fa-brands fa-square-facebook text-2xl md:text-3xl"></i></Link>
            <Link href="#"><i className="fa-brands fa-square-twitter text-2xl md:text-3xl"></i></Link>
            <Link href="#"><i className="fa-brands fa-square-instagram text-2xl md:text-3xl"></i></Link>
            <Link href="#"><i className="fa-regular fa-envelope text-2xl md:text-3xl"></i></Link>
            <div className=" ">
            <WhatsAppChat />
            </div>

            </div>
        </div>
        </div>
        
    </div>
      <nav className="bg-[#2c2c2c] top-0 left-0 sticky lg:relative z-10 flex items-center px-[8vw] py-8 justify-between gap-4">
        <Link href="/">
          <img src="/rise high (1).svg" alt="Logo" className="h-24 w-24 rounded-md" />
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
          <div className="bg-[#2c2c2c] fixed inset-y-0 right-0 w-64 p-4 flex flex-col items-center">
            <div className="mb-12">
              <X size={24} color="white" onClick={closeSidebar} />
            </div>
            <ul className="text-white font-light text-lg flex flex-col gap-6 items-center">
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
