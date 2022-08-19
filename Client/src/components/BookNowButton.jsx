import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button, Divider, Typography, Box } from "@mui/material";


export const BookNowButton = () => {
  return (
    <div className="">
      <div className="">
        <Box width="160px" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"

            sx={{ fontFamily: "monospace"  }}
          >
            YOU ARE HOT!
          </Typography>
          <Divider / >
          <Typography
            variant="h5"
            sx={{ fontFamily: "monospace", color: "black" }}
          >
            WE WILL MAKE YOU
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontFamily: "monospace", color: "black" }}
          >
            HOTTER🔥
          </Typography>
        </Box>
      </div>

      <div className="">
        <Button
          variant="contained"
          href="https://www.vagaro.com/affinitihairsalon/book-now"
          size="large"
          startIcon={<CalendarMonthIcon />}
          sx={{
            width: "160px",
            height: "50px",
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
    </div>
  );
};
