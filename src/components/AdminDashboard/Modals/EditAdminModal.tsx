import { ChevronDown, X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface Admin {
  _id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface EditAdminModalProps {
  visible: boolean;
  onClose: () => void;
  id: string;
}

const EditAdminModal: React.FC<EditAdminModalProps> = ({ visible, onClose, id }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);

  // Fetch the single admin based on the given id
  useEffect(() => {
    // Add your logic to fetch the admin data based on the id
    // For example, you can make an API call here
    // Replace the following with your actual API call or any data retrieval logic
    const fetchData = () => {
      // Replace the following with your actual data
      const fetchedAdmin: Admin = {
        _id: id,
        role: "Manager",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "09035004810",
      };
      setAdmin(fetchedAdmin);
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({ ...prevAdmin!, [name]: value }));
  };

  const options = [
    { value: "", label: "Select role" },
    { value: "receptionist", label: "Receptionist" },
    { value: "supervisor", label: "Supervisor" },
    { value: "manager", label: "Manager" },
  ];

  const editAdmin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your logic to update the admin data
    // For example, you can make an API call here or dispatch an action (since Redux is removed)
    // Replace the following with your actual logic for updating admin data
    console.log("Admin data updated:", admin);
    onClose();
  };

  if (!visible || !admin) return null;

  const handleClose = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

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
                  onSubmit={editAdmin}
                  className="
                  flex flex-col text-start w-full   
                  mb-6 lg:mb-0  pb-8
                  "
                >
                  <span className="text-[#19202C] text-3xl font-bold ">Edit Admin</span>
                  <div className="w-full grid gap-4 lg:gap-6 mb-6  mt-12 ">
                    <div className="flex flex-col w-full">
                      <label htmlFor="role" className="text-[#19202C] text-2xl mb-2">
                        Role
                      </label>
                      <div className="relative  inline-block">
                        <select
                          className="
                      py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                      block appearance-none text-xl
                      "
                          value={admin?.role}
                          onChange={handleInputChange}
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
                      <label htmlFor="firstName" className="text-[#19202C] text-2xl mb-2">
                        First name
                      </label>
                      <input
                        value={admin?.firstName}
                        onChange={handleInputChange}
                        name="firstName"
                        type="text"
                        className="
                      py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                      placeholder-gray-200::placeholder placeholder-opacity-75 text-xl
                      "
                        placeholder="Enter first name"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="lastName" className="text-[#19202C] text-2xl mb-2">
                        Last name
                      </label>
                      <input
                        value={admin?.lastName}
                        onChange={handleInputChange}
                        name="lastName"
                        type="text"
                        className="
                          py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75 text-xl
                          "
                        placeholder="Enter last name"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="email" className="text-[#19202C] text-2xl mb-2">
                        Email
                      </label>
                      <input
                        value={admin?.email}
                        onChange={handleInputChange}
                        name="email"
                        type="text"
                        className="
                          py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75 text-xl
                          "
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="phoneNumber" className="text-[#19202C] text-2xl mb-2">
                        Phone Number
                      </label>
                      <input
                        value={admin?.phoneNumber}
                        onChange={handleInputChange}
                        name="phoneNumber"
                        type="text"
                        className="
                          py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75 text-xl
                          "
                        placeholder="Enter phone number"
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
                        Update Admin
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

export default EditAdminModal;
