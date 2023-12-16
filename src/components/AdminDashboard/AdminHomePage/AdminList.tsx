import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { AdminDashboard } from "@/types/admin";
import HomeHeader from "./HomeHeader";
import Overview from "./Overview";
import Nav from "./Nav";
import SearchInput from "../SubAdmin/Search";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AdminList: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage = 5;

  // Dummy data
  const vehicles: AdminDashboard[] = Array.from({ length: 20 }, (_, index) => ({
    _id: `${index + 1}`,
    vehicleType: `Type ${index + 1}`,
    vehiclePlateNum: `Plate ${index + 1}`,
    vehicleName: `Vehicle ${index + 1}`,
    affliliation: `Affiliation ${index + 1}`,
    vehicleColor: `Color ${index + 1}`,
    status: index % 3 === 0 ? "Pending" : index % 3 === 1 ? "Verified" : "Declined",
    UserId: { _id: `User${index + 1}` },
    AdminId: { _id: `Admin${index + 1}` },
  }));

  const shortenText = (text: string | undefined, n: number) => {
    if (text && text.length > n) {
      return text.substring(0, n).concat("...");
    }
    return text;
  };

  // Calculate pagination
  const indexOfLastVehicle = (currentPage + 1) * itemsPerPage;
  const indexOfFirstVehicle = currentPage * itemsPerPage;
  const currentItems = vehicles?.slice(indexOfFirstVehicle, indexOfLastVehicle);

  // Determine if there are more pages
  const hasMorePages = indexOfLastVehicle < vehicles?.length;

  // Handle pagination change
  const handlePageClick = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };

  return (
    <div>
      <div className="font-[DM Sans] w-full md:bg-transparent ">
        <div className="flex justify-between items-center px-4 py-6 ">
          <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
          <Nav />
        </div>
      </div>
      <HomeHeader />
      <Overview />
      <div className="px-4 py-6 font-[DM Sans] hidden lg:block ">
        <div style={{ boxShadow: "2px 8px 24px rgba(12, 33, 50, 0.08)" }} className="bg-white rounded-md  ">
          <div className="p-4 w-full  overflow-x-auto ">
            <div className="flex justify-between py-4 w-full items-center pb-5 border-b border-[#E0E0E0]">
              <div className="text-black text-lg font-bold">
                <h3>Recent registered Vehicle</h3>
              </div>
              <div>
                <Link href="/admin/vehicles" className="text-[#0D60D8]  text-sm">
                  <button className=" bg-white rounded-md px-6 py-2 font-bold border border-[#E0E0E0]">View all</button>
                </Link>
              </div>
            </div>

            <div>
              {vehicles?.length === 0 ? (
                <span>-- No vehicle found, please add a vehicle...</span>
              ) : (
                <table className="w-full  text-sm">
                  <thead style={{ boxShadow: "0px 0px 54px rgba(12, 33, 50, 0.08)" }} className="text-[#0D60D8] text-sm  ">
                    <tr className="">
                      <th className="py-3">Unique ID</th>
                      <th className="py-3">Vehicle type</th>
                      <th className="py-3">Vehicle model</th>
                      <th className="py-3">Vehicle color</th>
                      <th className="py-3">Plate No</th>
                      <th className="py-3">Vehicle affiliation</th>
                      <th className="py-3">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {vehicles &&
                      currentItems.map((vehicle) => {
                        const { _id, vehicleType, vehiclePlateNum, vehicleName, affliliation, vehicleColor, status, UserId, AdminId } = vehicle;
                        const userId = UserId && typeof UserId === "object" ? UserId._id : UserId;
                        const adminId = AdminId && typeof AdminId === "object" ? AdminId._id : AdminId;

                        return (
                          <tr key={_id} className="text-sm text-center border-b border-[#E0E0E0] ">
                            <td className="py-3 px-2">
                              <span className="text-[#828282] font-bold ">{shortenText(userId || adminId, 4)}</span>
                            </td>
                            <td className="py-3 px-12">{vehicleType}</td>
                            <td className="py-3 px-12">{vehicleName}</td>
                            <td className="py-3 px-12">{vehicleColor}</td>
                            <td className="py-3 px-12">{vehiclePlateNum}</td>
                            <td className="py-3 px-12">{affliliation}</td>
                            <td className="py-4">
                              {status === "Pending" && (
                                <button className="text-[#F2994A] bg-[#F3EEDE] rounded-2xl font-bold  py-3 px-12 text-sm">{status}</button>
                              )}
                              {status === "Verified" && (
                                <button className="text-[#0D60D8] bg-[#F5F5F5] rounded-2xl font-bold  py-3 px-12  text-sm">{status}</button>
                              )}
                              {status === "Declined" && (
                                <button className="text-[#FF0000] bg-[#E50C0C] bg-opacity-10 rounded-2xl font-bold py-3 px-12  text-sm">
                                  Declined
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2 justify-end w-full items-start mt-12">
          <ReactPaginate
            previousLabel={
              <span
                className={`border-solid border-[#7a7a7a] bg-white flex flex-col w-8 h-8 text-center shrink-0 items-center py-2 border rounded ${
                  currentPage === 0 ? "cursor-not-allowed opacity-50" : ""
                }`}
                onClick={() => currentPage > 0 && handlePageClick({ selected: currentPage - 1 })}
              >
                <ChevronLeft />
              </span>
            }
            nextLabel={
              <span
                className={`border-solid border-[#7a7a7a] ${
                  !hasMorePages ? "cursor-not-allowed opacity-50" : ""
                } bg-white flex flex-col w-8 h-8 text-center shrink-0 items-center py-2 border rounded`}
                onClick={() => hasMorePages && handlePageClick({ selected: currentPage + 1 })}
              >
                <ChevronRight />
              </span>
            }
            breakLabel={"..."}
            // breakClassName={"break-me"}
            pageCount={Math.ceil(vehicles?.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="flex gap-2 items-center justify-center mt-8 mb-4"
            activeClassName="bg-[#d8e4ff]"
            pageClassName="border-solid border-[#7a7a7a] bg-white flex flex-col w-8 h-8 text-center shrink-0 items-center py-1 gap-2 border rounded  font-bold leading-[20px] text-[#1a183e] text-sm font-montserrat"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminList;
