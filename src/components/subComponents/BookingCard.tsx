import { Booking } from "@/data/bookingData";
import BookingModal from "../Modals/BookingModal";
import { useState } from "react";

interface BookingCardProps {
  data: Booking;
}

const BookingCard: React.FC<BookingCardProps> = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex justify-center text-center h-[60vh] lg:h-[50vh] xl:h-[100vh] gap-8 items-center flex-col w-full px-8 py-8 bg-white">
      <img src={data.image} alt={data.name} />
      <span className="text-[#282d3c] font-normal uppercase text-2xl">{data.name}</span>
      <span className="text-[#282d3c] font-normal text-base">{data.numOfRooms}</span>
      <span className="text-[#282d3c] font-normal text-base">{data.text}</span>
      <div className="flex gap-1 items-center text-2xl">
        <span className="text-[#282d3c] font-bold text-2xl">{data.price}</span>
        <span className="text-[#282d3c] font-bold text-2xl text-opacity-25">/ per night</span>
      </div>

      <button onClick={openModal} className="bg-blue-400 w-[44vw] lg:w-[12vw] rounded-full p-3">
        <span className="text-white text-center font-bold text-base px-3">Book Now</span>
      </button>

      {/* Modal */}
      <BookingModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default BookingCard;
