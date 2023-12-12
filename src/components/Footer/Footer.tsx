import React from 'react'
import WhatsAppChat from '../Whatsapp/Whatsapp'
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
    <nav className='flex flex-col px-6 py-3 bg-[#2c2c2c] text-blue-400 md:flex-row md:items-center md:gap-4 md:justify-around  lg:justify-around lg:py-10 '>
        <h1 className=' text-3xl lg:text-4xl'>Rise High Hotel</h1>
        
        
            <div className="flex flex-col gap-1">
            <h1 className='text-2xl md:text-3xl'>Facilities</h1>
                <div className="flex items-center gap-4">
                    <i className="fa-solid fa-wine-glass"></i>
                    <h1>Bar</h1>
                </div>

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-hotel"></i>
                <h1>State of the Art Rooms</h1>
                </div>

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-utensils"></i>
                <h1>Restaurant</h1>
                </div>

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-medal"></i>
                <h1>Games</h1>
                </div>
               
                
            </div>


        <div className='flex flex-col'>

            <h1 className='text-2xl md:text-3xl my-2'>Connect with us</h1>
            <div className="flex  gap-3">
            <Link href="#"><i className="fa-brands fa-square-facebook text-2xl md:text-3xl"></i></Link>
            <Link href="#"><i className="fa-brands fa-square-twitter text-2xl md:text-3xl"></i></Link>
            <Link href="#"><i className="fa-brands fa-square-instagram text-2xl md:text-3xl"></i></Link>
            <Link href="#"><i className="fa-regular fa-envelope text-2xl md:text-3xl"></i></Link>
            <div className=" ">
            <WhatsAppChat/>
            </div>

            </div>
            </div>

    </nav>
    </>
  )
}

export default Footer
