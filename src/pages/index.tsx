import AboutHero from "@/components/LandingPage/AboutHeroSection/AboutHero";
import Hero from "@/components/LandingPage/Hero/Hero";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout customClass="min-h-screen w-full max-w-full">
      <Hero />
      <AboutHero />
    </Layout>
  );
}
