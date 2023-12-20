import { ChevronDown, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAdmin } from "@/redux/slices/adminSlice";
import { AddAdminTypes } from "@/types/admin";

interface AddAdminModalProps {
  visible: boolean;
  onClose: () => void;
}

const AddAdminModal: React.FC<AddAdminModalProps> = ({ visible, onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const toggle = () => {
    setOpen(!open);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted with values:", formData);

    dispatch(addAdmin(formData as AddAdminTypes) as any);
  };

  if (!visible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  const options = [
    { value: "", label: "Select admin type" },
    { value: "receptionist", label: "Receptionist" },
    { value: "supervisor", label: "Supervisor" },
    { value: "manager", label: "Manager" },
  ];

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
            <div className="flex flex-col px-6 items-start w-full">
              <div className="flex flex-col items-start lg:place-items-start w-full md:py-8 ">
                <form className="flex flex-col text-start w-full mb-6 lg:mb-0 pb-8">
                  <span className="text-[#19202C] text-4xl font-bold">Add Admin</span>
                  <div className="w-full grid gap-4 lg:gap-6 mb-6 mt-12 ">
                    <div className="flex flex-col w-full">
                      <label htmlFor="role" className="text-[#19202C] text-2xl mb-2">
                        Admin type
                      </label>
                      <div className="relative inline-block">
                        <select
                          className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          block appearance-none border-2 text-xl focus:border-[#0D60D8]"
                          value={formData.role}
                          onChange={handleChange}
                          name="role"
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
                      <label htmlFor="firstname" className="text-[#19202C] text-2xl mb-2">
                        First name
                      </label>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="lastname" className="text-[#19202C] text-2xl mb-2">
                        Last name
                      </label>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter last name"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="email" className="text-[#19202C] text-2xl mb-2">
                        Email
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="password" className="text-[#19202C] text-2xl mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          name="password"
                          type={open === false ? "password" : "text"}
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                            placeholder-gray-200::placeholder placeholder-opacity-75
                            border-2 focus:border-[#0D60D8] text-xl"
                          placeholder="Enter your password"
                        />
                        <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
                          {open === false ? <Eye onClick={toggle} width={20} height={20} /> : <EyeOff onClick={toggle} width={20} height={20} />}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="phoneNumber" className="text-[#19202C] text-2xl mb-2">
                        Phone number
                      </label>
                      <input
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        type="number"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-8">
                    <button
                      onClick={() => onClose()}
                      className="border border-[#0D60D8] py-4 text-[#0D60D8] rounded-md font-bold text-2xl focus:outline-none px-12 bg-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit} // Use the custom submit function
                      className="bg-[#0D60D8] py-4 text-white rounded-md font-bold text-2xl px-6 focus:outline-none"
                    >
                      Add Admin
                    </button>
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
