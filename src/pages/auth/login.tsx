import Login from "@/components/Auth-Admin/Login";
import Layout from "@/components/Layout";

export default function LoginAdmin() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}

LoginAdmin.authAdmin = function pageLayout(page: React.ReactNode) {
  return <div className="bg-[#0D60D8] font-sarabun w-full h-screen">{page}</div>;
};
