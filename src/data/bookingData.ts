export interface IBooking {
  image: string;
  numOfRooms: string;
  text: string;
roomType: string
price : number
createdAt?: string
duration?: string
updatedAt?: string 
__v?: number
_id?: string
  
}

const bookingData : IBooking []= [
  {
    image: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731443/gridex/026-OVI_9204_sxouhr.webp",
    numOfRooms: "1 king bed | 2 adults",
    roomType: "Deluxe",
    text: "With our Deluxe Room, you will have everything you need for a comfortable stay and a good night’s sleep.  ",
    price: 0,
  },
  {
    image: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731449/gridex/055-OVI_9264_w3tdtj.webp",
    numOfRooms: "2 king bed | 4 adults",
    roomType: "Luxury",
    text: "For extra space, book one of our Family suites, it has 2 connecting rooms with a shared bathroom and other amenities.",
    price: 0,
  },

  {
    image: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731449/gridex/070-OVI_9300_inchms.webp",
    numOfRooms: "1 king bed | 2 adults",
    roomType: "Queen Bed Suite",
    text: "For an extended stay or for extra space, choose one of our Diplomatic Suites featuring a separate living area and kitchenette.",
    price: 0,
  },

  {
    image: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731443/gridex/005-OVI_9150_ddhb0v.webp",
    numOfRooms: "1 king bed | 2 adults",
    roomType: "King Bed Suite",
    text: "For an extended stay or for extra space, choose one of our Diplomatic Suites featuring a separate living area and kitchenette.",
    price: 0,
  }
];

export default bookingData;
