import React from 'react';
import { NextPage } from 'next';
import { motion } from "framer-motion"
import SectionWrapper from '@/components/SectionWrapper';
import { Camera } from "lucide-react";

type Resource = {
  asset_id: string;
  name: string;
  description: string;
  url: string;
  bytes: number;
  // ...other fields
};

type GridProps = {
  data: Resource[] | null;
};



const Grid: NextPage<GridProps> = ({ data }) => {

    const toggleImagePreview = (url: string) => {
    window.open(url, "_blank");
  };
  if (!data) {
    return <div>Error fetching data...</div>;
  }

  return (
    <SectionWrapper css='mb-24'>
      <div className='my-2 mx-auto '>
      <h1 className=' font-jost text-center  font-semibold text-9xl  text-indigo-700'>Gallery</h1>
      <h4 className=' font-jost text-center font-medium text-gray-400 uppercase text-4xl md:text-6xl my-5'>Discover Rise High Hotel</h4>
      <div className='flex flex-row items-center justify-center gap-4 mb-16'  >
        <hr className='h-2 w-16 bg-blue-800 my-5' />
          <hr className='h-2 w-16 bg-blue-800 my-5' />
      </div>
     <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
       {data.map((item) => (
        <motion.div  initial={{scale: 0}} whileInView={{ scale: 1 }} transition={{type:'tween',duration:.5, delay: .1 }} key={item.asset_id} className="group relative w-full">
            <img  src={item.url} alt="rise high hotel" className='group-hover:scale-110 duration-500' />
             <motion.div  animate={{x:0}} initial={{x:70}}
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
            {/* <h1 className="text-2xl text-white">Cosy Rooms</h1> */}
            <div className="absolute left-1/2 transform cursor-pointer -translate-x-1/2  my-24">
              <Camera size={24} color="#fff" onClick={()=>toggleImagePreview(item.url)} />
            </div>
            <a className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#">Book Now</a>
        </motion.div>
          {/* <p>ID: {item.asset_id}</p>
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p> */}
        
          {/* Render other data fields */}
        </motion.div>
      ))}
     </div>
    </div>
    </SectionWrapper>
  );
};

export default Grid;
