import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { AdminDashboard } from "@/types/admin";
import HomeHeader from "./HomeHeader";
import Overview from "./Overview";
import Nav from "./Nav";
import SearchInput from "../SubAdmin/Search";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StatusMenu from "../SubAdmin/StatusMenu";
import ViewBookingModal from "../Modals/viewBookingModal";

const AdminList: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // Dummy data
  const bookings: AdminDashboard[] = Array.from({ length: 20 }, (_, index) => ({
    _id: `${index + 1}`,
    firstName: `Kelechi ${index + 1}`,
    lastName: `Igwesi ${index + 1}`,
    email: `user@gmail.com ${index + 1}`,
    roomType: `deluxe ${index + 1}`,
    roomNum: `1 ${index + 1}`,
    status: index % 3 === 0 ? "Pending" : index % 3 === 1 ? "Verified" : "Declined",
  }));

  // Calculate pagination
  const indexOfLastVehicle = (currentPage + 1) * itemsPerPage;
  const indexOfFirstVehicle = currentPage * itemsPerPage;
  const currentItems = bookings?.slice(indexOfFirstVehicle, indexOfLastVehicle);

  // Determine if there are more pages
  const hasMorePages = indexOfLastVehicle < bookings?.length;

  // Handle pagination change
  const handlePageClick = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };

  const [showModal, setShowModal] = useState(false);
  // view driver details with id
  const [selectedBookingId, setSelectedBookingId] = useState("");

  return (
    <div className="px-6">
      <div className="font-dm w-full md:bg-transparent">
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
              <div className="text-black text-3xl font-bold">
                <h3>Recent Bookings</h3>
              </div>
              <div>
                <Link href="/admin/vehicles" className="text-[#0D60D8]  text-xl">
                  <button className=" bg-white rounded-md px-6 py-2 font-bold border hidden border-[#E0E0E0]">View all</button>
                </Link>
              </div>
            </div>

            <div>
              {bookings?.length === 0 ? (
                <span>-- No vehicle found, please add a vehicle...</span>
              ) : (
                <table className="w-full">
                  <thead style={{ boxShadow: "0px 0px 54px rgba(12, 33, 50, 0.08)" }} className="text-[#0D60D8] text-xl ">
                    <tr className="">
                      <th className="py-3">First name</th>
                      <th className="py-3">Last name</th>
                      <th className="py-3">Email</th>
                      <th className="py-3">Room type</th>
                      <th className="py-3">Room number</th>
                      <th className="py-3">Status</th>
                      <th className="py-3">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {bookings &&
                      currentItems.map((booking) => {
                        const { _id, firstName, lastName, roomType, roomNum, email, status } = booking;

                        return (
                          <tr key={_id} className="text-xl text-center border-b border-[#E0E0E0] ">
                            <td className="py-3 px-12">{firstName}</td>
                            <td className="py-3 px-12">{lastName}</td>
                            <td className="py-3 px-12">{email}</td>
                            <td className="py-3 px-12">{roomType}</td>
                            <td className="py-3 px-12">{roomNum}</td>

                            <td className="py-4">
                              {status === "Pending" && (
                                <button className="text-[#F2994A] bg-[#F3EEDE] rounded-2xl font-bold  py-3 px-12 text-xl">{status}</button>
                              )}
                              {status === "Verified" && (
                                <button className="text-[#0D60D8] bg-[#F5F5F5] rounded-2xl font-bold  py-3 px-12  text-xl">{status}</button>
                              )}
                              {status === "Declined" && (
                                <button className="text-[#FF0000] bg-[#E50C0C] bg-opacity-10 rounded-2xl font-bold py-3 px-12  text-xl">
                                  Declined
                                </button>
                              )}
                              {status === "Pending" ? <StatusMenu id={_id} /> : null}
                            </td>
                            <td className="py-3 px-12 ">
                              <button
                                onClick={() => {
                                  setSelectedBookingId(_id);
                                  setShowModal(true);
                                }}
                                className="font-normal px-2 text-black"
                              >
                                View Booking
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                  {selectedBookingId && (
                    <ViewBookingModal
                      id={selectedBookingId ? selectedBookingId.toString() : ""}
                      visible={showModal}
                      onClose={() => {
                        setSelectedBookingId("");
                        setShowModal(false);
                      }}
                    />
                  )}
                </table>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2 justify-end w-full items-start mt-12">
          <ReactPaginate
            previousLabel={
              <span
                className={`border-solid border-[#7a7a7a] bg-white flex flex-col w-12 h-12 text-center shrink-0 items-center py-2 border rounded ${
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
                } bg-white flex flex-col w-12 h-12 text-center shrink-0 items-center py-2 border rounded`}
                onClick={() => hasMorePages && handlePageClick({ selected: currentPage + 1 })}
              >
                <ChevronRight />
              </span>
            }
            breakLabel={"..."}
            // breakClassName={"break-me"}
            pageCount={Math.ceil(bookings?.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="flex gap-2 items-center justify-center mt-8 mb-4"
            activeClassName="bg-[#d8e4ff]"
            pageClassName="border-solid border-[#7a7a7a] bg-white flex flex-col w-12 h-12 text-center shrink-0 items-center py-1 gap-2 border rounded  font-bold leading-[20px] text-[#1a183e] text-xl font-montserrat"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminList;
