import {  X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RestaurantTypes } from "@/types/booking";
import { useFormik } from "formik";
import { addRestaurantSchema} from "@/utils/yupValidation";
import { createRestaurantBooking } from "@/redux/slices/restaurantSlice";


interface RestaurantModalProps {
  visible: boolean;
  onClose: () => void;
}

const RestaurantModal: React.FC<RestaurantModalProps> = ({ visible, onClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: ""
    },
    validationSchema: addRestaurantSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      dispatch(createRestaurantBooking(values as RestaurantTypes) as any);
    },
  });


  if (!visible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  return (
    <>
      <div id="container" onClick={handleClose} className="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-20">
        <div className="bg-white w-full max-w-4xl rounded-md shadow-lg overflow-y-auto">
          <div className="flex justify-end pt-4 pr-4">
            <button onClick={() => onClose()}>
              <X />
            </button>
          </div>
          <div className="overflow-y-auto max-h-[520px]">
            <div className="flex flex-col px-6 items-start w-full">
              <div className="flex flex-col items-start lg:place-items-start w-full md:py-8 ">
                <form onSubmit={formik.handleSubmit} className="flex flex-col text-start w-full mb-6 lg:mb-0 pb-8">
                  <span className="text-[#19202C] text-4xl font-bold">Book restaurant</span>
                  <div className="w-full grid gap-4 lg:gap-6 mb-6 mt-12 ">
                    
                    <div className="flex flex-col">
                      <label htmlFor="firstname" className="text-[#19202C] text-2xl mb-2">
                        First name
                      </label>
                      <input
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter first name"
                      />
                      {formik.errors.firstName && formik.touched.firstName && <div className="text-red-500">{formik.errors.firstName}</div>}
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="lastname" className="text-[#19202C] text-2xl mb-2">
                        Last name
                      </label>
                      <input
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter last name"
                      />
                      {formik.errors.lastName && formik.touched.lastName && <div className="text-red-500">{formik.errors.lastName}</div>}
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="email" className="text-[#19202C] text-2xl mb-2">
                        Email
                      </label>
                      <input
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter email"
                      />
                      {formik.errors.email && formik.touched.email && <div className="text-red-500">{formik.errors.email}</div>}
                    </div>
                    
                    <div className="flex flex-col w-full">
                      <label htmlFor="phoneNumber" className="text-[#19202C] text-2xl mb-2">
                        Phone number
                      </label>
                      <input
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter phone number"
                      />
                      {formik.errors.phoneNumber && formik.touched.phoneNumber && <div className="text-red-500">{formik.errors.phoneNumber}</div>}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-[#19202C] text-2xl mb-2">
                        message
                      </label>
                      <textarea
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter The Details of your booking here"
                      />
                      {formik.errors.message && formik.touched.message && <div className="text-red-500">{formik.errors.message}</div>}
                    </div>
                    <div className="flex justify-between items-center pt-8 ">
                      <button
                        onClick={() => onClose()}
                        className="border border-[#0D60D8] py-4 text-[#0D60D8] rounded-md
                          font-bold text-2xl focus:outline-none px-12 bg-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        // onClick={onSubmit}
                        className="bg-[#0D60D8] py-4 text-white rounded-md
                          font-bold text-2xl px-6 focus:outline-none"
                      >
                        Book Restaurant
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantModal;
