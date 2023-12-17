import AdminSidebar from "@/components/AdminDashboard/AdminSidebar/AdminSidebar";
import AdminLayout from "@/components/Layouts/AdminLayout";
import LayoutWrapper from "@/components/Layouts/LayoutWrapper";
import "@/styles/globals.css";
import { NextComponentType } from "next";
import type { AppProps } from "next/app";

// Define a type that extends NextComponentType
type ExtendedNextComponentType<P = {}> = NextComponentType & {
  getAdmin?: (page: P) => React.ReactNode;
  authAdmin?: (page: P) => React.ReactNode;
};
export default function App({ Component, pageProps }: AppProps) {
  // Check if the component is an admin page
  const isAdmin = (Component as ExtendedNextComponentType).getAdmin;

  // Check if the component is an auth page
  const isAdminAuth = (Component as ExtendedNextComponentType).authAdmin;

  return (
    <div>
      {isAdmin ? (
        <AdminLayout>
          <AdminSidebar>
            <div className="bg-gray-100">
              <Component {...pageProps} />
            </div>
          </AdminSidebar>
        </AdminLayout>
      ) : isAdminAuth ? (
        <AdminLayout>
          <div className="lg:bg-[#0D60D8]  h-screen">
            <Component {...pageProps} />
          </div>
        </AdminLayout>
      ) : (
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      )}
    </div>
  );
}
