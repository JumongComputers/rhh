import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bookingData, { Booking } from "@/data/bookingData";
import BookingCard from "../subComponents/BookingCard";

const BookRooms: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="relative bg-black mb-20 lg:mb-32 ">
      <img
        src="/images/hero1.jpg"
        alt="room image"
        className="w-full bg-black opacity-25 h-full object-cover"
      />
      {/* content */}
      <div
        className="absolute inset-0 flex flex-col px-8 lg:px-[8vw] gap-12 justify-center items-center text-center text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Our Rooms</h1>
          <p className="font-normal text-base md:text-2xl opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            atque quia doloribus dignissimos fugit vitae perferendis! Ut
            adipisci, laboriosam nulla aliquam vero dolore natus optio culpa in!
            Blanditiis, quos repellat?
          </p>
        </div>

        <div
          className="grid lg:grid-cols-3 grid-cols-1 gap-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {bookingData.map((data: Booking, index: number) => (
            <div key={index} data-aos="fade-up" data-aos-duration="1000">
              <BookingCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookRooms;
