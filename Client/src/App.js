import React, { useEffect } from "react";
import { Card, Box } from "@mui/material";
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
import Sand from "../src/assets/sand.jpg";

function App() {
  return (
    <div className="flex flex-col max-w-full"> //Change this max-x
      <section className="h-screen box-border ">
        <video src={videoBG} autoPlay loop muted />
        <div className="absolute w-full h-screen top-0 flex flex-col items-center ">
          <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-40 "></div>
          <div className="absolute grid h-screen place-items-center">
            <img src={AffinitiLogo} alt="logo" width="80%" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center">
          <div className="grid place-content-center mb-5 mt-20">
            <About />
          </div>
          <div className="mt-10 grid place-content-center ">
            <Photos />
          </div>
          <div className="mt-10 grid place-content-center ">
            <Reviews />
          </div>
        </div>
        <motion.div>
          <StylistCard />
        </motion.div>
      </section>
      <div className="mt-20 static h-screen w-screen grid grid-cols-1 items-center -mb-11">
          <img src={Sand} width="100%" className="relative h-screen w-screen "/>
          <div className="absolute bg-white max-w-sm rounded overflow-hidden shadow-lg">
            <div className="m-10 gap-5 flex flex-row">
              <LocationCard />
              <BookNowButton />
            </div>
          </div>
        
      </div>
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
