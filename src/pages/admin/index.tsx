import AdminList from "@/components/AdminDashboard/AdminHomePage/AdminList";
import Layout from "@/components/Layout";
import { getAllBookings } from "@/redux/slices/bookingSlice";
import { RootState } from "@/redux/store/store";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Admin() {
  const dispatch = useDispatch();
  const bookings = useSelector((state: RootState) => state.booking.bookings);
  const loading = useSelector((state: RootState) => state.booking.loading);

  console.log("all bookings:", bookings);

  useEffect(() => {
    dispatch(getAllBookings() as any);
  }, [dispatch]);

  return (
    <Layout>
      <AdminList bookings={bookings} />
    </Layout>
  );
}

Admin.getAdmin = function pageLayout(page: React.ReactNode) {
  return <div className="bg-[#F5F5F5] font-outfit w-full min-h-screen">{page}</div>;
};
