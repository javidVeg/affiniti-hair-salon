import { Card, CardMedia, Box, Typography } from "@mui/material";
import React from "react";
import TestImage1 from "../assets/hair/hair1.jpg";
import TestImage2 from "../assets/hair/hair2.jpg";
import TestImage3 from "../assets/hair/hair3.jpg";
import TestImage4 from "../assets/hair/hair4.jpg";
import Instagram from "../assets/instagram.png";

export const Photos = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 grid-rows-2 md:gap-20 ">
      <div className="">
        <Card
          elevation="15"
          sx={{ width: 400, height: 498, borderRadius: "15px" }}
        >
          <CardMedia
            component="img"
            sx={{ height: "100%" }}
            image={TestImage1}
            alt="testimage1"
          />
        </Card>
      </div>
      <div className="md:mt-32">
        <Card
          elevation="15"
          sx={{
            width: 400,
            height: 498,
            borderRadius: "15px",
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: "100%" }}
            image={TestImage2}
            alt="testimage2"
          />
        </Card>
      </div>
      <div className="md:-mt-32">
        <Card
          elevation="15"
          sx={{
            width: 400,
            height: 498,
            borderRadius: "15px",
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: "100%" }}
            image={TestImage3}
            alt="testimage3"
          />
        </Card>
      </div>
      <div>
        <Card
          elevation="15"
          sx={{
            width: 400,
            height: 498,
            borderRadius: "15px",
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: "100%" }}
            image={TestImage4}
            alt="testimage4"
          />
        </Card>
      </div>
    </div>
  );
};
