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
import Sand from "../src/assets/sand.jpg";
import { Navbar } from "./components/Navbar";

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
    console.log("use effect hook, inView=", inView);
  };

  locationCardAnimation();

  //! @ -------------------------------------------------------------|
  return (
    <div>
      <section className="">
        <Navbar/>
      </section>
      <div className="flex flex-col max-w-full overflow-hidden">
        <section className="h-screen box-border ">
          <video src={videoBG} autoPlay loop muted />
          <div className="absolute w-full h-screen top-0 flex flex-col items-center ">
            <div className="absolute top-6 left-0 w-screen h-screen bg-black bg-opacity-40 "></div>
            <div className="absolute grid scale-110 bottom-10 h-screen place-items-center md:h-screen md:scale-100 md:bottom-0">
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
          <div className="mt-20 md:mt-40">
            <StylistCard />
          </div>
        </section>
        <div className=" mt-20 static grid grid-cols-1 place-items-center -mb-11">
          <img src={Sand} className="relative h-screen w-screen " />
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
        </div>
        <footer className="mt-10">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
