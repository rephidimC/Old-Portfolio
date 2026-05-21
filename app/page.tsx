"use client";

import "../globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { usePathname } from "next/navigation";
import Home from "@/components";

function MyApp() {
  const pathname = usePathname();
  return (
    <>
      <Header />

      <div
        className={`${pathname === "/" ? "bg-gray-900 bg-fixed bg-cover h-full" : pathname === "/background" ? "bg-url('https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923434/experience_algh1n.jpg') bg-fixed bg-cover bg-center w-full md:h-full" : pathname === "/projects" ? "bg-url('https://res.cloudinary.com/dzcwsxuvc/image/upload/v1623923461/green_au1be8.jpg') bg-fixed bg-cover w-full md:h-full" : ""}`}
      >
        {/* <Head>
          <title>Victor's Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
        <div className="flex flex-col bg-black bg-opacity-50 h-full w-full">
          <Home />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
