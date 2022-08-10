import React, { useEffect } from "react";
import videoBG from "../src/assets/production ID_4611893.mp4";
import AffinitiLogo from "../src/assets/Affiniti-Logo.png";
// import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { LocationCard } from "./components/LocationCard";
import { BookNowButton } from "./components/BookNowButton";
import { About } from "./components/About";
import { StylistCard } from "./components/StylistCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Reviews } from "./components/Reviews";
import { Photos } from "./components/Photos";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="h-screen box-border ">
        <video src={videoBG} autoPlay loop muted />
        <div className="absolute w-full h-screen top-0 flex flex-col items-center ">
          <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-40 "></div>
          <div className="absolute grid h-screen place-items-center">
            <img src={AffinitiLogo} alt="logo" width="80%" />
          </div>
        </div>
      </section>
      <section >
        <div className="flex flex-col justify-center items-center">
          <div className="grid place-content-center mb-5 mt-20">
            <About />
          </div>
        <div className="mt-10 grid place-content-center ">
          <Photos/>
        </div>
        <div className="mt-10 grid place-content-center ">
          <Reviews/>
        </div>
        </div>
        <motion.div>
          <StylistCard />
        </motion.div>
          <div className="grid place-content-center mb-5 mt-5">
            <LocationCard />
          </div>
          <div className="mt-5 grid place-content-center">
            <BookNowButton />
          </div>
      </section>
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
