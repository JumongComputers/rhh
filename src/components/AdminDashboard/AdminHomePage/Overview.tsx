import Link from "next/link";
import React from "react";
import InfoBox from "../SubAdmin/InfoBox";

const Overview: React.FC = () => {
  // Icons
  const regVehicleIcon = <img src="/vehicle-dash.svg" alt="" />;
  const reportIcon = <img src="/payment-dash.svg" alt="" />;
  const driverIcon = <img src="admin-driver.svg" alt="" />;

  return (
    <div className="w-full px-4 py-6">
      <h3 className="text-[#19202C] mb-4 font-bold text-5xl">Overview</h3>
      <div className="flex flex-col lg:flex-row  gap-5">
        <InfoBox icon={regVehicleIcon} title={"Total Number Of Bookings"} count={10} />
        <InfoBox icon={reportIcon} title={"Completed Bookings"} count={5} />
        <InfoBox icon={driverIcon} title={"Pending Bookings"} count={15} />
      </div>
    </div>
  );
};

export default Overview;
