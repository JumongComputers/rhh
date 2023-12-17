import React from 'react'
import WhatsAppChat from '../Whatsapp/Whatsapp'
import Link from "next/link";
import SectionWrapper from '../SectionWrapper';

const Footer: React.FC = () => {
  return (
    
   <div className='bg-[#2c2c2c] text-white py-10'>
    <SectionWrapper css=''>
       <nav className='flex md:flex-row flex-wrap gap-8 justify-center md:justify-between px-4 py-10 text-xl'>

       <div className='max-w-md flex flex-col gap-1'>
         <h4 className=' text-2xl lg:text-3xl my-8'>Rise High Hotel</h4>
         <div className='w-full'>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eius sequi dolorem odio labore, fugiat hic doloremque corporis molestias voluptatum magni ipsam quas iure. Nam facilis alias ipsa quisquam vel.</p>
         </div>
       </div>
            <div className="flex flex-col gap-1">
            <h4 className='text-2xl lg:text-3xl my-8'>Facilities</h4>
                <div className="flex items-center gap-4">
                    <i className="fa-solid fa-wine-glass"></i>
                    <h6>Bar</h6>
                </div>

                

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-utensils"></i>
                <h6>Restaurant</h6>
                </div>

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-medal"></i>
                <h5>Games</h5>
                </div>
                <div className="flex items-center gap-4">
                <i className="fa-solid fa-hotel"></i>
                <h6>State of the Art Rooms</h6>
                </div>
               
                
            </div>


        <div className='flex flex-col'>

            <h4 className='text-2xl lg:text-3xl my-8'>Connect with us</h4>
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
    <p className='text-center pt-10 text-xl'>&copy; 2023 | All rights Reserved</p>
    </SectionWrapper>
   </div>
    
  )
}

export default Footer