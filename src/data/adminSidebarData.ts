import { icons } from "@/utils/icons";
import React from "react";

interface SidebarItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const sidebarData: SidebarItem[] = [
  {
    title: "Booking",
    icon: React.createElement(icons.Home, {}),
    path: "/admin",
  },
  {
    title: "Site Admins",
    icon: React.createElement(icons.Users, {}),
    path: "/admin/siteAdmin",
  },
  {
    title: "Settings",
    icon: React.createElement(icons.Settings, {}),
    path: "/admin/settings",
  },
];

export default sidebarData;
