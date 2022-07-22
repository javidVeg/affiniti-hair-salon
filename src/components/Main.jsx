import React from "react";
import videoBG from "../assets/production ID_5147455.mp4";
import AffinitiLogo from "../assets/Affiniti-Logo.png";



export const Main = () => {
  return (
    
      <div >
        <div className="overlay"></div>
        <video src={videoBG} autoPlay loop muted />
        <div className="content">
          <img src={AffinitiLogo} alt="logo" width="80%" />
          
          
        </div>
      </div>
    
  );
};
