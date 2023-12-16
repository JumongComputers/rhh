import React, { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AdminLayout;
