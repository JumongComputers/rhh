import Link from "next/link";
import React from "react";
import InfoBox from "../SubAdmin/InfoBox";

const Overview: React.FC = () => {
  // Links
  const addVehicleLink = <Link href="/admin/vehicles">View vehicle</Link>;
  const paymentLink = (
    <Link href="/admin/reports" className="text-[#0D60D8]">
      View Report
    </Link>
  );
  const pendingVehLink = (
    <Link href="/admin/drivers" className="text-[#E9A627]">
      View More
    </Link>
  );

  // Icons
  const regVehicleIcon = <img src="/vehicle-dash.svg" alt="" />;
  const reportIcon = <img src="/payment-dash.svg" alt="" />;
  const driverIcon = <img src="admin-driver.svg" alt="" />;

  // Dummy counts
  const vehiclesCount = 10;
  const reportsCount = 5;
  const driversCount = 15;

  return (
    <div className="w-full px-4 py-6">
      <h3 className="text-[#19202C] mb-4 font-bold text-5xl">Overview</h3>
      <div className="flex flex-col lg:flex-row  gap-3">
        <InfoBox url={"/admin/vehicles"} icon={regVehicleIcon} title={"Registered vehicles"} count={vehiclesCount} text={addVehicleLink} />
        <InfoBox url={"/admin/reports"} icon={reportIcon} title={"Incident Reports"} count={reportsCount} text={paymentLink} />
        <InfoBox url={"/admin/drivers"} icon={driverIcon} title={"All Drivers"} count={driversCount} text={pendingVehLink} />
      </div>
    </div>
  );
};

export default Overview;
