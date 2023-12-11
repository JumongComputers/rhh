export interface Booking {
  image: string;
  numOfRooms: string;
  name: string;
  text: string;
  price: string;
}

const bookingData: Booking[] = [
  {
    image: "",
    numOfRooms: "1 king bed | 2 adults",
    name: "DELUXE",
    text: "With our Deluxe Room, you will have everything you need for a comfortable stay and a good night’s sleep.",
    price: "₦65,000.00",
  },
  {
    image: "",
    numOfRooms: "2 king bed | 4 adults",
    name: "FAMILY SUITE",
    text: "For extra space, book one of our Family suites. 2 connecting rooms with a shared bathroom.",
    price: "₦100,000.00",
  },
  {
    image: "",
    numOfRooms: "1 king bed | 2 adults",
    name: "DIPLOMATIC SUITE",
    text: "For an extended stay or for extra space, choose one of our Diplomatic Suites featuring a separate living area and kitchenette.",
    price: "₦130,000.00",
  },
];

export default bookingData;
