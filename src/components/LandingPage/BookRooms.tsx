import bookingData, { Booking } from "@/data/bookingData";
import BookingCard from "../subComponents/BookingCard";

const BookRooms: React.FC = () => {
  return (
    <div className="flex py-8 mb-20 lg:mb-32 md:py-20 px-8 lg:px-[8vw] flex-col items-center gap-12 justify-center text-center bg-blue-800">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-white">Our Rooms</h1>
        <p className="font-normal text-base md:text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores atque
          quia doloribus dignissimos fugit vitae perferendis! Ut adipisci,
          laboriosam nulla aliquam vero dolore natus optio culpa in! Blanditiis,
          quos repellat?
        </p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-12">
        {bookingData.map((data: Booking, index: number) => (
          <BookingCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default BookRooms;
