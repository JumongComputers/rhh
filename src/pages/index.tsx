import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/LandingPage/Hero/Hero';
import AboutHero from '@/components/LandingPage/AboutHeroSection/AboutHero';
import Grid from '@/components/LandingPage/Grid/Grid';
import { GetStaticProps } from 'next';

type Resource = {
  asset_id: string;
  name: string;
  description: string;
  url: string;
  bytes: number;
  // ...other fields
};

type APIResponse = {
  resources: Resource[];
};

type HomeProps = {
  data: Resource[] | null;
};

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <Layout customClass="min-h-screen w-full max-w-full">
      <Hero />
      <AboutHero />
      <Grid data={data} />
    </Layout>
  );
};

// http://res.cloudinary.com/dyijwff8m


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const responseData: APIResponse = await response.json();
    const data = responseData.resources;

    // console.log(data);
    

    return {
      props: {
        data,
      },
    };
  } catch (error:any) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        data: null, // Handle error as needed
      },
    };
  }
};

export default Home;
