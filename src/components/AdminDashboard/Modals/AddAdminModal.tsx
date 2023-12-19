import { ChevronDown, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

interface AddAdminModalProps {
  visible: boolean;
  onClose: () => void;
}

const initialState = {
  adminType: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
};

const AddAdminModal: React.FC<AddAdminModalProps> = ({ visible, onClose }) => {
  const [admin, setAdmin] = useState(initialState);

  const { firstName, lastName, adminType, email, password, phone } = admin;

  // show password toggle
  const [open, setOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  const options = [
    { value: "", label: "Select admin type" },
    { value: "Super admin", label: "Super admin" },
    { value: "Dashboard Manager", label: "Dashboard Manager" },
    { value: "Mobile App manager", label: "Mobile App manager" },
    { value: "Web app manager", label: "Web app manager" },
  ];

  const addAdmin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = admin;

    // Perform your logic here, e.g., API calls, form validation, etc.

    onClose();
  };

  if (!visible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  return (
    <>
      <div
        id="container"
        onClick={handleClose}
        className="fixed inset-0 backdrop-blur-sm flex items-center bg-black bg-opacity-50 justify-center z-20"
      >
        <div className="bg-white w-full max-w-4xl rounded-md shadow-lg overflow-y-auto">
          <div className="flex justify-end pt-4 pr-4">
            <button onClick={() => onClose()}>
              <img src="/view-cancel.png" alt="" />
            </button>
          </div>
          <div className="overflow-y-auto max-h-[520px]">
            <div className="flex flex-col px-6  items-start w-full">
              <div className="flex flex-col items-start lg:place-items-start w-full md:py-8 ">
                <form onSubmit={addAdmin} className="flex flex-col text-start w-full mb-6 lg:mb-0  pb-8">
                  <span className="text-[#19202C] text-4xl font-bold">Add Admin</span>
                  <div className="w-full grid gap-4 lg:gap-6 mb-6 mt-12 ">
                    <div className="flex flex-col w-full">
                      <label htmlFor="adminType" className="text-[#19202C] text-xl mb-2">
                        Admin type
                      </label>
                      <div className="relative inline-block">
                        <select
                          className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          block appearance-none border-2 focus:border-[#0D60D8]"
                          value={adminType}
                          onChange={(e) => setAdmin({ ...admin, adminType: e.target.value })}
                          name="adminType"
                        >
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#676869]">
                          <ChevronDown />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="firstname" className="text-[#19202C] text-xl mb-2">
                        First name
                      </label>
                      <input
                        value={firstName}
                        onChange={(e) => setAdmin({ ...admin, firstName: e.target.value })}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8]"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="lastname" className="text-[#19202C] text-xl mb-2">
                        Last name
                      </label>
                      <input
                        value={lastName}
                        onChange={(e) => setAdmin({ ...admin, lastName: e.target.value })}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8]"
                        placeholder="Enter last name"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="email" className="text-[#19202C] text-xl mb-2">
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8]"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="password" className="text-[#19202C] text-xl mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={open === false ? "password" : "text"}
                          required
                          name="password"
                          value={password}
                          onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
                          className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                            placeholder-gray-200::placeholder placeholder-opacity-75
                            border-2 focus:border-[#0D60D8]"
                          placeholder="Enter your password"
                        />
                        <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
                          {open === false ? <Eye onClick={toggle} width={20} height={20} /> : <EyeOff onClick={toggle} width={20} height={20} />}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="password" className="text-[#19202C] text-xl mb-2">
                        Phone number
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => setAdmin({ ...admin, phone: e.target.value })}
                        type="number"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8]"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className="flex justify-between items-center pt-8 ">
                      <button
                        onClick={() => onClose()}
                        className="border border-[#0D60D8] py-4 text-[#0D60D8] rounded-md
                          font-bold text-xl focus:outline-none px-12 bg-white"
                      >
                        Cancel
                      </button>
                      <button
                        // Add your disabled logic here if needed
                        className="bg-[#0D60D8] py-4 text-white rounded-md
                          font-bold text-xl px-6 focus:outline-none"
                      >
                        Add Admin
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

export default AddAdminModal;
