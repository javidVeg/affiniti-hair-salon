import { Card, CardMedia } from "@mui/material";
import React from "react";
import TestImage1 from "../assets/hairWebp/hair1.webp";
import TestImage2 from "../assets/hairWebp/hair2.webp";
import TestImage3 from "../assets/hairWebp/hair3.webp";
import TestImage4 from "../assets/hairWebp/hair4.webp";


export const Photos = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 grid-rows-2 md:gap-20 ">
      <div className="">
        <Card
          elevation={15}
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
          elevation={15}
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
          elevation={15}
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
          elevation={15}
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
