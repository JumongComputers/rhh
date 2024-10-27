import { IBooking } from "../../data/bookingData";
import BookingModal from "../Modals/BookingModal";
import { useState } from "react";
import { Camera } from "lucide-react";
import React from "react";

export interface IBookingCardProps {
  data: IBooking;
}

const BookingCard: React.FC<IBookingCardProps> = ({ data }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleImagePreview = () => {
    window.open(data.image, "_blank");
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center w-full p-4 lg:p-8 bg-white text-center gap-4 lg:gap-8">
      <div className="w-full lg:flex lg:flex-col lg:w-full">
        <div 
          className="relative w-full lg:w-full"
          onMouseEnter={() => setOverlayVisible(true)}
          onMouseLeave={() => setOverlayVisible(false)}
        >
          <img src={data.image} alt={data.roomType} className="w-full h-auto" />
          {isOverlayVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                <Camera size={24} color="#fff" onClick={toggleImagePreview} />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center w-full lg:w-full gap-4 mt-4 lg:mt-8">
          <span className="text-[#282d3c] font-bold uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">{data.roomType}</span>
          <span className="text-[#282d3c] font-normal text-lg sm:text-xl lg:text-2xl">{data.numOfRooms}</span>
          <span className="text-[#282d3c] font-normal text-base sm:text-lg lg:text-xl xl:text-2xl">{data.text}</span>
          <div className="flex items-baseline gap-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
            <span className="text-[#282d3c] font-bold">₦{data.price}.00</span>
            <span className="text-[#282d3c] font-bold text-opacity-50 text-sm sm:text-base lg:text-xl xl:text-2xl">/ per night</span>
          </div>
          <button onClick={openModal} className="bg-blue-400 w-full  sm:w-1/2 md:w-1/3 lg:w-full xl:w-w-full rounded-full p-3 mt-4">
            <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">Book Now</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onRequestClose={closeModal} 
        price={Number(data.price)} 
        roomTypeDefault={data.roomType} 
      />
    </div>
  );
};

export default BookingCard;
