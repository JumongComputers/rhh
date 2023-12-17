import Link from "next/link";
import React, { ReactNode } from "react";

interface InfoBoxProps {
  title: string;
  url: string;
  count: number;
  icon: ReactNode;
  text: ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, url, count, icon, text }) => {
  return (
    <div
      style={{
        transition: "all 0.3s",
        boxShadow: "0px 9px 17px rgba(0, 0, 0, 0.07)",
      }}
      className="bg-white w-full  translate-y-0 rounded-xl"
    >
      <Link href={url}>
        <div className="p-5">
          <span>{icon}</span>
          <span className="font-bold text-[#828282] font-[DM Sans] text-3xl">{title}</span>
          <div className="flex justify-between items-center mt-2">
            <span className="font-bold text-[#19202C] font-[DM Sans] text-4xl">{count}</span>
            <span className="text-lg font-medium font-[DM Sans] text-[#FF725E]">{text}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InfoBox;
