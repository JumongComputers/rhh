import React from 'react'
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';


type Data = {
    // Define the structure of your fetched data
    // Example fields: id, name, description, etc.
    bytes: number;
    name: string;
    description: string;
    url: string;
    asset_id: string;
    // ...other fields
  };
  
  type GridProps = {
    data: Data | null;
  };

  const Grid: NextPage<GridProps> = ({ data }) => {


const getServerSideProps: GetServerSideProps<GridProps> = async () => {
      try {
        const response = await fetch('https://633648249733435:c5Ks6sNCcFSQMyic1PU_-RWTit0@api.cloudinary.com/v1_1/dyijwff8m/resources/image');
    
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
    
        const data: Data = await response.json();
    
        return {
          props: {
            data,
          },
        };
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
        return {
          props: {
            data: null, // or handle error as needed
          },
        };
      }
    };



    const router = useRouter();
  
    if (!data) {
      return <div>Error fetching data...</div>;
    }
  
    // Your component rendering and usage of fetched `data` here
    return (
      <div>
        <h1>Data from API</h1>
        <p>ID: {data.asset_id}</p>
        <p>Name: {data.name}</p>
        <p>Description: {data.description}</p>
        <p><img src={`${data.url}`} alt="" /></p>
        {/* Render other data fields */}
      </div>
    );
  };
  

  
  export default Grid;
