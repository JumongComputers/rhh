import AboutHero from "@/components/LandingPage/AboutHero";
import BookRooms from "@/components/LandingPage/BookRooms";
import Grid from "@/components/LandingPage/Grid/Grid";
import Hero from "@/components/LandingPage/Hero";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";

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

     {/* <div className="group relative w-96">
        <img className="w-full object-cover" src="https://www.slingacademy.com/wp-content/uploads/2022/10/example.png"  alt="Sling Academy" />
        <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-white">Fiction T-Shirt Store</h1>
            <a className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#">Continue
                Shopping</a>
        </div>
    </div> */}
  


      <Grid data={data} />

      <BookRooms />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const response: APIResponse = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?max_results=16&prefix=gridex&type=upload`, {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_API_SECRET).toString("base64")}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        throw new Error("Failed to fetch data", err);
      });
    //  console.log(response, 'response data');

    return {
      props: {
        data: response.resources,
      },
    };
  } catch (error: any) {
    // console.error('Error fetching data:', error.message);
    return {
      props: {
        data: null, // Handle error as needed
      },
    };
  }
};

export default Home;
