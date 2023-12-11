import AboutHero from "@/components/LandingPage/AboutHero";
import BookRooms from "@/components/LandingPage/BookRooms";
import Hero from "@/components/LandingPage/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout customClass="min-h-screen w-full max-w-full">
      <Hero />
      <AboutHero />
      <BookRooms />
    </Layout>
  );
}
