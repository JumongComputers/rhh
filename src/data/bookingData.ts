export interface Booking {
  image: string;
  numOfRooms: string;
  name: string;
  text: string;
  price: string;
}

const bookingData: Booking[] = [
  {
    image: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731449/gridex/070-OVI_9300_inchms.webp",
    numOfRooms: "1 king bed | 2 adults",
    name: "Deluxe Rooms",
    text: "With our Deluxe Room, you will have everything you need for a comfortable stay and a good night’s sleep.",
    price: "₦40,000.00",
  },
  {
    image: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731449/gridex/055-OVI_9264_w3tdtj.webp",
    numOfRooms: "2 king bed | 4 adults",
    name: "Luxury Rooms",
    text: "For extra space, book one of our Family suites. 2 connecting rooms with a shared bathroom.",
    price: "₦45,000.00",
  },
  {
    image: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731443/gridex/005-OVI_9150_ddhb0v.webp",
    numOfRooms: "1 king bed | 2 adults",
    name: "King Bed Suite",
    text: "For an extended stay or for extra space, choose one of our Diplomatic Suites featuring a separate living area and kitchenette.",
    price: "₦55,000.00",
  },
  {
    image: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731443/gridex/026-OVI_9204_sxouhr.webp",
    numOfRooms: "1 king bed | 2 adults",
    name: "Queen Bed Suite",
    text: "For an extended stay or for extra space, choose one of our Diplomatic Suites featuring a separate living area and kitchenette.",
    price: "₦50,000.00",
  },
];

export default bookingData;
