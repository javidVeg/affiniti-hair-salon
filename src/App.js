import React from "react";
import videoBG from "../src/assets/production ID_5147455.mp4";
import AffinitiLogo from "../src/assets/Affiniti-Logo.png";
// import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div >
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 "></div>
      <video src={videoBG} autoPlay loop muted />
      <div className="absolute w-full h-auto top-0 mt-40 flex flex-col items-center">
        <img src={AffinitiLogo} alt="logo" width="80%" />
        <div className='flex-col justify-center items-center'>
        
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
