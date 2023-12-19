// import * as Yup from "yup";

// export const bookingValidationSchema = Yup.object().shape({
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   email: Yup.string().email("Invalid email address").required("Email is required"),
//   phoneNumber: Yup.string().required("Phone Number is required"),
//   roomType: Yup.string().required("Room Type is required"),
//   numberOfPerson: Yup.number().required("Number of Guests is required").min(1, "Must be at least 1 guest"),
//   checkInDate: Yup.date().required("Check-In Date is required"),
//   checkOutDate: Yup.date().required("Check-Out Date is required").min(Yup.ref("checkInDate"), "Check-Out Date must be after Check-In Date"),
// });
