import React, { useState } from "react";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { createRestaurantBooking } from "@/redux/slices/restaurantSlice";


interface RestaurantProps {
    isOpen: boolean;
    onRequestClose: () => void;
    
  }


  const RestaurantModal: React.FC<RestaurantProps> = ({ isOpen, onRequestClose}) => {

  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    
  
    const dispatch = useDispatch();
  
    // Set default check-out date to be one day greater than the default check-in date
   
  
   
  
    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";
  
    const handlRestaurantSubmission = (restaurantData: any) => {
      const restaurantbookingFormData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        message
      
      };
  
      dispatch(createRestaurantBooking({ ...restaurantbookingFormData }) as any);
  
      // onRequestClose();
    };
  
    
  
    const isFormValid = () => {
      // Check if all input fields are filled and checkout date is greater than check-in date
      return (
        firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.trim() !== "" &&
        phoneNumber.trim() !== "" &&
        message.trim() !== ""
      );
    };
  
  
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Booking Modal"
        className="absolute top-1/2 left-1/2 z-20 transform overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 w-full h-[60vh] lg:h-[80vh] max-w-xl md:max-w-4xl"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
      >
        <div className="w-full space-y-8 relative">
          <div className="pb-8">
            <X className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700" size={35} onClick={onRequestClose} />
          </div>
          <div className="bg-white p-4 flex flex-col gap-4">
            {/* Your form inputs */}
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-2xl font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                placeholder-gray-200::placeholder placeholder-opacity-75
                border focus:border-[#0D60D8] text-xl"
                placeholder="Enter your first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-2xl font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                placeholder-gray-200::placeholder placeholder-opacity-75
                border focus:border-[#0D60D8] text-xl"
                placeholder="Enter your last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="email" className="block text-2xl font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                placeholder-gray-200::placeholder placeholder-opacity-75
                border focus:border-[#0D60D8] text-xl"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-2xl font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                placeholder-gray-200::placeholder placeholder-opacity-75
                border focus:border-[#0D60D8] text-xl"
                placeholder="Enter your phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="message" className="block text-2xl font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                placeholder-gray-200::placeholder placeholder-opacity-75
                border focus:border-[#0D60D8] text-xl"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                readOnly
              />
            </div>
  
            </div>
  
          
  
            
          </div>
        
      </Modal>
    );
  };
  
  export default RestaurantModal;
  