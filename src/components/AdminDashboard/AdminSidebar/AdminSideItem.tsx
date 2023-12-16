import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface AdminSideItemProps {
  item: {
    title: string;
    path: string;
    icon?: React.ReactNode;
    childrens?: { title: string; path: string }[];
  };
  isOpen: boolean;
}

const AdminSideItem: React.FC<AdminSideItemProps> = ({ item, isOpen }) => {
  const router = useRouter();

  const [expandMenu, setExpandMenu] = useState(false);

  const toggleClass = () => {
    setExpandMenu(!expandMenu);
  };

  if (item.childrens) {
    return (
      <div className={expandMenu ? "block h-auto" : "block"}>
        <div className="text-white flex justify-between">
          <span
            className={`
              flex gap-2 text-xl items-center text-white 
              ${isOpen ? "w-full" : "w-[60px]"}
              ${router.pathname === item.path ? "text-white border-l-4 border-white px-6 py-4 bg-black bg-opacity-10" : "text-white px-6"}
            `}
          >
            {item.icon && <div className="flex justify-center items-center">{item.icon}</div>}
            {isOpen && <div>{item.title}</div>}
            <ChevronDown
              size="medium"
              className="cursor-pointer transition duration-300"
              style={{ display: isOpen ? "flex" : "none" }}
              onClick={toggleClass}
            />
          </span>
        </div>
        <div className={`overflow-hidden pt-2 ${expandMenu ? "h-auto" : "h-0"}`}>
          {item.childrens.map((child, index) => (
            <div key={index} className="mt-[5px] text-white">
              <Link href={child.path}>
                <div className="block">
                  <div
                    className={`
                      font-normal justify-between items-center mb-4 leading-[16px]
                      ${isOpen ? "ml-[40px]" : "ml-0"}
                    `}
                  >
                    <span>{isOpen && <div>{child.title}</div>}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link href={item.path}>
        <div className="block">
          <div onClick={toggleClass} className="flex justify-between items-center">
            <span
              className={`flex gap-2 text-lg items-center text-white 
                ${isOpen ? "w-full" : "w-[60px]"}
                ${router.pathname === item.path ? "text-white border-l-4 border-white px-6 py-4 bg-black bg-opacity-10" : "text-white px-6"}
              `}
            >
              {item.icon && <div className="w-5 h-5">{item.icon}</div>}
              {isOpen && <div>{item.title}</div>}
            </span>
          </div>
        </div>
      </Link>
    );
  }
};

export default AdminSideItem;
