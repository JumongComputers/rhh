import { Booking } from "@/data/bookingData";
import Link from "next/link";

interface BookingCardProps {
  data: Booking;
}

const BookingCard: React.FC<BookingCardProps> = ({ data }) => {
  return (
    <div className="flex justify-center text-center gap-8 items-center flex-col w-full px-8 py-8 bg-white">
      <img src={data.image} alt={data.name} />
      <span className="text-[#282d3c] font-normal uppercase text-2xl">
        {data.name}
      </span>
      <span className="text-[#282d3c] font-normal text-base">
        {data.numOfRooms}
      </span>
      <span className="text-[#282d3c] font-normal text-base">{data.text}</span>
      <div className="flex gap-1 items-center text-2xl">
        <span className="text-[#282d3c] font-bold text-2xl">{data.price}</span>
        <span className="text-[#282d3c] font-bold text-2xl text-opacity-25">
          / per night
        </span>
      </div>
      <Link href="/rooms">
        <button className="bg-blue-400 w-full rounded-full p-3">
          <span className="text-white text-center font-bold text-base px-3">
            Book Now
          </span>
        </button>
      </Link>
    </div>
  );
};

export default BookingCard;
