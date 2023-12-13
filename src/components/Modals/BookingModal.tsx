import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface BookingModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onRequestClose }) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date());

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Booking Modal"
      className="absolute top-1/2 left-1/2 z-20 transform overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 w-full h-[60vh] lg:h-[80vh] max-w-xl md:max-w-4xl"
      overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
    >
      <div className="w-full">
        <div className="bg-white p-4 flex flex-col gap-4">
          {/* Check-In and Check-Out */}
          <div className="flex space-x-6 mb-4">
            <div className="flex-1">
              <label className="block text-lg lg:text-2xl font-medium text-gray-700">Check-In</label>
              <DatePicker className="w-full border p-3 rounded-md text-lg" selected={checkInDate} onChange={(date) => setCheckInDate(date as Date)} />
            </div>
            <div className="flex-1">
              <label className="block text-lg lg:text-2xl font-medium text-gray-700">Check-Out</label>
              <DatePicker
                className="w-full border p-3 rounded-md text-lg"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date as Date)}
              />
            </div>
          </div>

          {/* Room Type */}
          <div className="mb-4">
            <label className="block text-lg lg:text-2xl font-medium text-gray-700">Room Type</label>
            <select className="w-full border p-2 rounded-md">
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Guests */}
          <div className="mb-4">
            <label className="block text-lg lg:text-2xl font-medium text-gray-700">Guests</label>
            <select className="w-full border p-2 rounded-md">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-lg lg:text-2xl font-medium text-gray-700">Name</label>
            <input type="text" className="w-full border p-2 rounded-md" />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-lg lg:text-2xl font-medium text-gray-700">Email</label>
            <input type="email" className="w-full border p-2 rounded-md" />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-lg lg:text-2xl font-medium text-gray-700">Phone Number</label>
            <input type="tel" className="w-full border p-2 rounded-md" />
          </div>

          <div className="flex text-2xl justify-end mt-6 space-x-4">
            <button className="bg-gray-400 text-white px-4 py-2 rounded-md font-medium" onClick={onRequestClose}>
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium">Book Now</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BookingModal;
