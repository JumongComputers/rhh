import React, { ReactNode } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="bg-white font-roboto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
