import React from "react";
import "./App.css";
import videoBG1 from "../src/assets/production ID_4611893.mp4";
import videoBG from "../src/assets/newHero.mp4";
import AffinitiLogo from "../src/assets/pngWebp/Affiniti-Logo.webp";
import { Footer } from "./components/Footer";
import { LocationCard } from "./components/LocationCard";
import { BookNowButton } from "./components/BookNowButton";
import { About } from "./components/About";
import { StylistCard } from "./components/StylistCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Reviews } from "./components/Reviews";
import { Photos } from "./components/Photos";
import Sand from "../src/assets/pngWebp/sand.webp";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  //! @ INVIEW TRACKS WHEN COMPONENT IS ON SCREEN FOR MOTION EFFECTS

  const locationCardAnimation = () => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: -300 });
    }
  };

  locationCardAnimation();

  //! @ -------------------------------------------------------------|
  return (
    <div>
      <Navbar />
      <section id="home" className="flex flex-col max-w-full overflow-hidden">
        <section className="h-screen box-border hero-video-width ">
          <video className="primary-video" src={videoBG1} type="video/mp4" autoPlay loop muted playsinline />
          <video className="secondary-video" src={videoBG} type="video/mp4" autoPlay loop muted playsinline />
          <div className="absolute w-full h-screen top-0 flex flex-col items-center ">
            <div className="absolute -top-0 md:-top-0 lg:-top-0 right-0 w-screen h-screen bg-black bg-opacity-40 "></div>
            <div className="absolute grid bottom-0 h-screen place-items-center md:h-screen md:scale-100 md:bottom-0">
              <img src={AffinitiLogo} alt="logo" width="90%" />
            </div>
          </div>
        </section>

        <section id="about">
          <div className="flex flex-col justify-center items-center">
            <div className="grid place-content-center mb-5 mt-20">
              <About />
            </div>
            <div className="mt-10 -mb-20 grid place-content-center ">
              <Photos />
            </div>
            <section
              id="reviews"
              className=" mt-40 md:mt-10 grid place-content-center "
            >
              <div className=" mt-10 md:mb-14 md:mt-10">
                <Reviews />
              </div>
            </section>
          </div>
          <section id="stylist" className="grid place-content-center overflow-hidden">
            <div className=" mt-12 md:mt-2 ">
              <StylistCard />
            </div>
          </section>
        </section>
        <section
          id="contact"
          className=" mt-20 static grid grid-cols-1 place-items-center -mb-11"
        >
          <img src={Sand} alt="sand-image1" className="relative h-screen w-screen " />
          <motion.div
            ref={ref}
            animate={animation}
            className="absolute bg-white rounded overflow-hidden shadow-lg justify-center "
          >
            <div className="m-5 md:m-10 gap-5 flex flex-col md:flex-row items-center">
              <LocationCard />
              <BookNowButton />
            </div>
          </motion.div>
        </section>
        <footer className="mt-10">
          <Footer />
        </footer>
      </section>
    </div>
  );
}

export default App;
