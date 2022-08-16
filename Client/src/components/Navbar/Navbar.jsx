import React, { useState } from "react";
import "./Navbar.css";
import { Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Sling as Hamburger } from "hamburger-react";
import { dialogClasses } from "@mui/material";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar z-10 fixed">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Reviews</a>
          <a href="">Stylist</a>
          <a href="">Contact</a>
        </div>
          <div id="hamburger" className="">
          <Hamburger onToggle={() => setShowLinks(!showLinks)} color="white"/>
          </div>
      </div>
      <div className="rightSide">
      <Button
          variant="contained"
          href="https://www.vagaro.com/affinitihairsalon/book-now"
          size="medium"
          startIcon={<CalendarMonthIcon />}
          sx={{
            mt: 1,
            color: "black",
            backgroundColor: "#ffe082",
            boxShadow: "10",
            fontSize: 14,
            "&:hover": { backgroundColor: "#ffe69b",
             },
          }}
        >
          Book Now!
        </Button>
      </div>
      {/* <div className="w-full h-16 z-10 flex items-center fixed bg-zinc-900 bg-opacity-80 shadow-md bg-clip-padding navbar-blur">
        <nav className="relative flex justify-between w-full max-w-screen-xl">
          <div className="m-3 flex justify-start">
            <div className="text-white space-x-3 ">
           
            </div>
          </div>
          <div className="flex justify-end">
            <Hamburger color="white"/>
          </div>
        </nav>
      </div> */}
    </div>
  );
};
