import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const RestaurantHead: React.FC = () => {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link href="/admin">
              <MoveLeft />
            </Link>
            <span className="text-[#676869] ">Back</span>
          </div>
          <span className="text-[#19202C] text-6xl font-bold ">All Restaurant Bookings</span>
        </div>
        <div className="flex gap-4  items-center">
          <img src="/profile-avatar.png" alt="" className="rounded-full" />
          <div className="flex flex-col">
            <div className="flex gap-1">
              <span className="text-2xl text-[#001F1D] ">kelechi</span>
            </div>
            <span className="text-[#676869] font-normal text-xl">manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHead;
