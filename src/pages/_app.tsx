import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white font-roboto ">
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
