import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import videoBG from "../src/assets/production ID_5147455.mp4";
import AffinitiLogo from "../src/assets/Affiniti-Logo.png";
import { Footer } from "./components/Footer";
import { LocationCard } from "./components/LocationCard";
import { BookNowButton } from "./components/BookNowButton";
import { About } from "./components/About";
import { StylistCard } from "./components/StylistCard";
import { motion } from "framer-motion"


function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          onClick={() => ref.current.scrollTo(2)}
        >
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 "></div>
          <video src={videoBG} autoPlay loop muted />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 0.5 }}>
          <div className="absolute w-full h-auto top-0 mt-40 flex flex-col items-center">
            <img src={AffinitiLogo} alt="logo" width="95%" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} factor={3}>
          <div className="absolute w-full h-auto top-0 mt-40 flex flex-col items-center">
            <div className="flex-col justify-center items-center">
            <div className="grid place-content-center mb-5 mt-5">
                <About />
              </div>
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.2}} className="grid place-content-center mb-5 mt-5">
                <LocationCard />
              </motion.div>
              <div className="mt-5 grid place-content-center">
                <BookNowButton />
              </div>
            </div>
            <div>
              <StylistCard />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.4} speed={0.5} factor={2}>
          <div>
          <Footer />
          </div>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}

export default App;
