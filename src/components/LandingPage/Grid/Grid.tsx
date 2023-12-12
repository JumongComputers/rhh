import React from 'react';
import { NextPage } from 'next';

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
    <div>
      <h1>Data from API</h1>
      {data.map((item) => (
        <div key={item.asset_id}>
          <p>ID: {item.asset_id}</p>
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
          <p><img src={item.url} alt="" /></p>
          {/* Render other data fields */}
        </div>
      ))}
    </div>
  );
};

export default Grid;
