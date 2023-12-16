import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-20">
      <Link href="/admin" className="lg:hidden block font-normal font-outfit text-[#19202C] text-xl">
        Dashboard
      </Link>
      <div className="flex gap-4 items-center">
        <img src="/profile-avatar.png" alt="" className="rounded-full" />
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span className="text-sm text-[#001F1D] ">Kelechi</span>
            {/* <NavDropdown /> */}
          </div>
          <span className="text-[#676869] font-normal text-xs">Super Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
