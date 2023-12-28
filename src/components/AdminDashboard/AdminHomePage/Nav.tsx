import React from "react";

const Nav: React.FC = () => {
  let name: any;
  if (typeof window !== "undefined") {
    name = sessionStorage.getItem("firstName");
  }

  return (
    <div className="flex flex-col">
      <span className="text-xl text-[#001F1D] ">{name}</span>

      {/* <span className="text-[#676869] font-normal text-lg">Super Admin</span> */}
    </div>
  );
};

export default Nav;
