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
    <div className="flex text-center h-[75vh] sm:h-[75vh] lg:h-[50vh] xl:h-[80vh] gap-8 items-center flex-col w-full px-8 py-8 bg-white">
      <img src={data.image} alt={data.name} />
      <span className="text-[#282d3c] font-normal uppercase text-5xl">{data.name}</span>
      <span className="text-[#282d3c] font-normal text-xl">{data.numOfRooms}</span>
      <span className="text-[#282d3c] font-normal h-[9rem] text-xl">{data.text}</span>
      <div className="flex gap-1 items-center text-5xl">
        <span className="text-[#282d3c] font-bold text-5xl">{data.price}</span>
        <span className="text-[#282d3c] font-bold text-2xl text-opacity-25">/ per night</span>
      </div>

      <button onClick={openModal} className="bg-blue-400 w-[44vw] lg:w-[12vw] rounded-full p-3">
        <span className="text-white text-center font-bold text-xl px-3">Book Now</span>
      </button>

      {/* Modal */}
      <BookingModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default BookingCard;
