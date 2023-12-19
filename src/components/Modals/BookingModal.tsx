import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PaystackButton } from "react-paystack";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { createBooking } from "@/redux/slices/bookingSlice";
import bookingService from "@/redux/services/bookingService";

interface BookingModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  price: number;
  roomTypeDefault: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onRequestClose, price, roomTypeDefault }) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [roomType, setRoomType] = useState(roomTypeDefault.toLowerCase());
  const [numberOfPerson, setNumberOfPerson] = useState(1);

  const dispatch = useDispatch();

  const guestsOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests"];

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

  const [paymentData, setPaymentData] = useState({
    amountPaid: 0,
    paymentStatus: "",
    paymentRef: "",
    tranxId: "",
  });

  const handleBookingSubmission = () => {
    const bookingFormData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      checkIn: checkInDate?.toISOString().split("T")[0] || "", // Convert Date to ISO string
      checkOut: checkOutDate?.toISOString().split("T")[0] || "", // Convert Date to ISO string
      roomType,
      numberOfPerson,
      ...paymentData,
    };

    dispatch(createBooking({ ...bookingFormData }) as any);

    onRequestClose();
  };

  const handlePaymentSuccess = async (response: any) => {
    // Extract payment details from the response
    const { status, reference } = response;

    // Check if the payment was successful
    if (status === "success") {
      try {
        // Verify payment before proceeding with the booking submission
        const verificationResponse = await bookingService.verifyPayment(reference);

        if (verificationResponse.status === "success") {
          console.log("Payment verification successful:", verificationResponse);

          const { amount, status, transRef, transId } = verificationResponse.data.data;
          console.log("ref:", transRef);
          // callback function in setPaymentData to ensure the state is updated before proceeding
          setPaymentData((prevPaymentData) => ({
            ...prevPaymentData,
            amountPaid: amount / 100,
            paymentStatus: status,
            paymentRef: transRef,
            tranxId: String(transId),
          }));

          handleBookingSubmission();
        } else {
          console.log("Payment verification failed:", verificationResponse);
        }
      } catch (error) {
        console.error("Error during payment verification:", error);

        // Optionally, you may want to reset the form or take other actions
      }
    } else {
      console.log("Payment failed:", response);
    }
  };

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: price * 100, // Amount in kobo
    publicKey,
    text: "Pay Now",
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
            <label className="block text-2xl font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
              placeholder-gray-200::placeholder placeholder-opacity-75
              border focus:border-[#0D60D8] text-lg"
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-2xl font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
              placeholder-gray-200::placeholder placeholder-opacity-75
              border focus:border-[#0D60D8] text-lg"
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-2xl font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
              placeholder-gray-200::placeholder placeholder-opacity-75
              border focus:border-[#0D60D8] text-lg"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-2xl font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
              placeholder-gray-200::placeholder placeholder-opacity-75
              border focus:border-[#0D60D8] text-lg"
              placeholder="Enter your phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-2xl font-medium text-gray-700">Room Type</label>
            <input
              type="text"
              className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
              placeholder-gray-200::placeholder placeholder-opacity-75
              border focus:border-[#0D60D8] text-lg"
              onChange={(e) => setRoomType(e.target.value)}
              value={roomType}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-2xl font-medium text-gray-700">Guests</label>
            <select
              className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
              placeholder-gray-200::placeholder placeholder-opacity-75
              border focus:border-[#0D60D8] text-lg"
              onChange={(e) => setNumberOfPerson(Number(e.target.value))}
            >
              {guestsOptions.map((option, index) => (
                <option key={index} value={index + 1}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-6 mb-4">
            <div className="flex-1">
              <label className="block text-2xl font-medium text-gray-700">Check-In</label>
              <DatePicker
                className="lg:w-[240px] py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                placeholder-gray-200::placeholder placeholder-opacity-75
                border focus:border-[#0D60D8] text-lg"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date as Date)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-2xl font-medium text-gray-700">Check-Out</label>
              <DatePicker
                className="lg:w-[240px] py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                placeholder-gray-200::placeholder placeholder-opacity-75
                border focus:border-[#0D60D8] text-lg"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date as Date)}
              />
            </div>
          </div>

          {/* Payment section */}
          <div className="flex justify-center mt-6 bg-blue-500 text-white px-4 py-2 w-full rounded-md font-medium text-2xl">
            <PaystackButton {...config} onSuccess={(response) => handlePaymentSuccess(response)} onClose={() => console.log("Payment closed")} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BookingModal;
