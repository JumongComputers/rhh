export interface BookingTypes {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  numberOfPerson: number;
  amountPaid: number;
  paymentStatus: string;
  paymentRef: string;
  tranxId: string;
  status?: string;
  lenght?: number;
 
}

export interface RestaurantTypes{
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}
