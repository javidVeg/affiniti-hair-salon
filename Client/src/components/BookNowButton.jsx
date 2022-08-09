import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button } from "@mui/material";

export const BookNowButton = () => {
  return (
    <Button
      variant="contained"
      href="https://www.vagaro.com/affinitihairsalon/book-now"
      size="large"
      startIcon={<CalendarMonthIcon />}
      sx={{
        color: "black",
        backgroundColor: "#ffe082",
        "&:hover": { backgroundColor: "#ffe69b" },
      }}
    >
      Book Now!
    </Button>
  );
};
