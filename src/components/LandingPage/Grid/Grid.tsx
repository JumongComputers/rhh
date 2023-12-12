import React from 'react';
import { NextPage } from 'next';
import SectionWrapper from '@/components/SectionWrapper';

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
  if (!data) {
    return <div>Error fetching data...</div>;
  }

  return (
    <SectionWrapper>
      <div className='my-16 mx-auto '>
      <h1 className='text-center text-8xl scale-y-75'>Gallery</h1>
      <h4 className='text-center text-4xl'>Discover Rise High Hotel</h4>
     <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
       {data.map((item) => (
        <div key={item.asset_id}>
          {/* <p>ID: {item.asset_id}</p>
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p> */}
          <p><img src={item.url} alt="" /></p>
          {/* Render other data fields */}
        </div>
      ))}
     </div>
    </div>
    </SectionWrapper>
  );
};

export default Grid;
