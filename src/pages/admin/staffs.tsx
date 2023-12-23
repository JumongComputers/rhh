import StaffDetails from "@/components/AdminDashboard/Staffs/StaffDetails";
import StaffHead from "@/components/AdminDashboard/Staffs/StaffHead";
import Layout from "@/components/Layout";

export default function staffs() {
  return (
    <Layout customClass="px-6">
      <StaffHead />
      <StaffDetails />
    </Layout>
  );
}

staffs.getAdmin = function pageLayout(page: React.ReactNode) {
  return <div className="bg-[#F5F5F5] font-outfit w-full h-screen min-h-screen">{page}</div>;
};
