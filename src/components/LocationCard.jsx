import { Card, CardMedia } from "@mui/material";
import React from "react";
import AffinitiMap from "../assets/Affiniti-Map.png";

export const LocationCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <img src={AffinitiMap} alt="Map" width="25%" />
      </Card>
    </div>
  );
};
