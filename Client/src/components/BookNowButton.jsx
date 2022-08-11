import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const BookNowButton = () => {
  return (
    <div>
      <Box width="160px" sx={{ textAlign: "center"}}>
        <Typography variant="h4" sx={{fontFamily: 'monospace', color:'red'}}>YOU ARE HOT!</Typography>
        <Typography variant="h4" sx={{fontFamily: 'monospace', color:'gray'}}>WE WILL MAKE YOU</Typography>
        <Typography variant="h4" sx={{fontFamily: 'monospace', color:'red'}}>HOTTER🔥</Typography>
      </Box>
      
      <Button
        variant="contained"
        href="https://www.vagaro.com/affinitihairsalon/book-now"
        size="large"
        startIcon={<CalendarMonthIcon />}
        sx={{
          color: "black",
          backgroundColor: "#ffe082",
          boxShadow: '10',
          "&:hover": { backgroundColor: "#ffe69b" },
        }}
      >
        Book Now!
      </Button>
    </div>
  );
};
