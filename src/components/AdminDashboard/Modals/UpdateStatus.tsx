import { ChevronDown, X } from "lucide-react";
import React from "react";

interface UpdateStatusModalProps {
  showModal: boolean;
  onClose: () => void;
  //   onStatusUpdate: (status: string, roomNumber: string) => void;
}

const UpdateStatusModal: React.FC<UpdateStatusModalProps> = ({ showModal, onClose }) => {
  const [selectedStatus, setSelectedStatus] = React.useState("");
  const [selectedRoomNumber, setSelectedRoomNumber] = React.useState("");

  const handleUpdateStatus = () => {
    // onStatusUpdate(selectedStatus, selectedRoomNumber);
    onClose();
  };

  if (!showModal) return null;

  const handleClose = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  const options = [
    { value: "", label: "Select status" },
    { value: "booked", label: "Booked" },
    { value: "reserved", label: "Reserved" },
    { value: "supervisor", label: "Supervisor" },
    { value: "manager", label: "Manager" },
  ];

  return (
    <>
      <div id="container" onClick={handleClose} className="fixed inset-0  flex items-center bg-black bg-opacity-50 justify-center z-20">
        <div className="bg-white w-full max-w-4xl  rounded-md shadow-lg overflow-y-auto">
          <div className="flex justify-end pt-4 pr-4">
            <button onClick={() => onClose()}>
              <X />
            </button>
          </div>
          <div className=" overflow-y-auto max-h-[520px]">
            <div className="flex flex-col px-6  items-start w-full">
              <div
                className="
        flex flex-col items-start lg:place-items-start 
        w-full md:py-8 
        "
              >
                <form
                  onSubmit={handleUpdateStatus}
                  className="
                flex flex-col text-start w-full   
                mb-6 lg:mb-0  pb-8
                "
                >
                  <span className="text-[#19202C] text-3xl font-bold ">Update Booking Status</span>
                  <div className="w-full grid gap-4 lg:gap-6 mb-6  mt-12 ">
                    <div className="flex flex-col w-full">
                      <label htmlFor="status" className="text-[#19202C] text-2xl mb-2">
                        Status
                      </label>
                      <div className="relative  inline-block">
                        <select
                          className="
                    py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                    block appearance-none text-xl
                    "
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                          name="role"
                        >
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div
                          className="
                    pointer-events-none absolute inset-y-0 right-0
                    flex items-center px-2 text-[#676869]
                    "
                        >
                          <ChevronDown className="fill-current h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="roomNumber" className="text-[#19202C] text-2xl mb-2">
                        Room Number
                      </label>
                      <input
                        value={selectedRoomNumber}
                        onChange={(e) => setSelectedRoomNumber(e.target.value)}
                        name="firstName"
                        type="number"
                        className="
                    py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                    placeholder-gray-200::placeholder placeholder-opacity-75 text-xl
                    "
                        placeholder="Enter first name"
                      />
                    </div>

                    <div className=" flex justify-between items-center pt-8 ">
                      <button
                        onClick={() => onClose()}
                        className="
                border border-[#0D60D8] py-4  text-[#0D60D8] rounded-md
                font-bold text-2xl focus:outline-none px-12 bg-white 
                "
                      >
                        Cancel
                      </button>
                      <button
                        className="
                  bg-[#0D60D8] py-4  text-white rounded-md
                  font-bold text-2xl px-6 focus:outline-none 
                  "
                      >
                        Update Status
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateStatusModal;
