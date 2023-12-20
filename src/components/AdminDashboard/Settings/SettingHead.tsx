import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const SettingHead: React.FC = () => {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link href="/admin">
              <MoveLeft />
            </Link>
            <span className="text-[#676869] text-3xl ">Back</span>
          </div>
          <span className="text-[#19202C] text-6xl font-bold ">Settings</span>
        </div>
        <div className="flex gap-4  items-center">
          <div className="flex flex-col">
            <div className="flex gap-1">
              <span className="text-xl text-[#001F1D] ">Kelechi</span>
            </div>
            <span className="text-[#676869] font-normal text-lg">Super Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingHead;
