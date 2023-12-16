import React, { useState } from "react";

const HomeHeader: React.FC = () => {
  // Add vehicle model
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center">
        <h3 className="text-[#19202C] font-bold font-outfit text-4xl ">
          <span>Welcome back </span>
          <span>John</span>
        </h3>
        <button className="bg-[#0D60D8] text-white rounded-md px-4 py-2">+ Add Admin</button>
      </div>
    </div>
  );
};

export default HomeHeader;
