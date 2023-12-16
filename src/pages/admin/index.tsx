import AdminList from "@/components/AdminDashboard/AdminHomePage/AdminList";
import Layout from "@/components/Layout";

export default function Admin() {
  return (
    <Layout>
      <AdminList />
    </Layout>
  );
}

Admin.getAdmin = function pageLayout(page: React.ReactNode) {
  return <div className="bg-[#F5F5F5] font-outfit w-full min-h-screen">{page}</div>;
};
