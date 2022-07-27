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

function App() {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        x: 0,
        transition: {
          type: "spring", duration: 1, bounce: 0.3
        }
      });
    }
    if(!inView){
      animation.start({x:'-100vw'})
    }
    console.log("use effect hook, inView=", inView);
  }, [inView]);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full"></div>
      <section className="h-screen box-border ">
        {/* <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 "></div> */}
        <video src={videoBG} autoPlay loop muted />
        <div className="absolute w-full h-screen top-0 flex flex-col items-center ">
          <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-40 "></div>
          <div className="absolute grid h-screen place-items-center">
            <img src={AffinitiLogo} alt="logo" width="80%" />
          </div>
        </div>
      </section>
      <section  className="h-screen box-border">
        <div ref={ref} className="mt-40 flex flex-col justify-center items-center">
          <motion.div
            animate={animation}
            className="grid place-content-center mb-5 mt-5"
          >
            <About />
          </motion.div>
          <div className="grid place-content-center mb-5 mt-5">
            <LocationCard />
          </div>
          <div className="mt-5 grid place-content-center">
            <BookNowButton />
          </div>
        </div>
        <div>
          <StylistCard />
        </div>
      </section>
      {/* <section>
        <footer>
          <Footer />
        </footer>
      </section> */}
    </div>
  );
}

export default App;
