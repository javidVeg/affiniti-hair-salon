import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  Link,
  Typography,
  Avatar,
  CircularProgress,
  Box,
  Button,
} from "@mui/material";
import { BsStarFill } from "react-icons/bs";
import { FaYelp } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Reviews = () => {
  //! @ THIS ENABLES SCROLL ANIMATIONS
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [reviewData, setReviewData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //! @ FETCHES DATA FROM SERVER API CALL
    fetch("http://localhost:3001/api/")
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((resp) => {
        setReviewData(resp);
        console.log(reviewData);
      })
      .finally(() => setIsLoading(false));
    //! @ -------------------------------------------------------------|

  }, []);
  
  //! @ INVIEW TRACKS WHEN COMPONENT IS ON SCREEN FOR MOTION EFFECTS
  const reviewAnimation = () => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: 300 });
    }
    console.log("use effect hook, inView=", inView);
  };

  reviewAnimation();
  
  
  //! @ -------------------------------------------------------------|

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div className="grid grid-cols-2 gap-10">
      {reviewData.reviews.map((data) => (
        <div className="relative">
          <Card elevation="10" sx={{ maxWidth: 450, opacity: "inherit", borderRadius: 2 }}>
            <a href={data.url}>
              <FaYelp size="25" className="absolute top-5 right-5" />
            </a>
            <div className="grid place-items-center m-5">
              <Avatar
                src={data.user.image_url}
                sx={{ width: 56, height: 56, m: 1 }}
              />
              <Typography sx={{ fontFamily: "monospace" }}>
                {data.user.name}
              </Typography>
              <div className="flex flex-row space-x-4 m-3">
                <BsStarFill size="25" color="#ffe082" />
                <BsStarFill size="25" color="#ffe082" />
                <BsStarFill size="25" color="#ffe082" />
                <BsStarFill size="25" color="#ffe082" />
                <BsStarFill size="25" color="#ffe082" />
              </div>
              <Typography variant="h6 m-5" textAlign="center">
                "{data.text}"
              </Typography>
            </div>
          </Card>
        </div>
      ))}
      <motion.div
        ref={ref}
        animate={animation}
        className="grid place-items-center m-5"
      >
        <Box
          sx={{
            maxWidth: 450,
            opacity: "inherit",
            borderRadius: 2,

            alignItems: "center",
          }}
        >
          <Typography variant="h3" sx={{ fontFamily: "inherit" }}>
            Leave us a review!
          </Typography>
          <div className="grid place-items-center m-5">
            <a href="https://www.yelp.com/biz/affiniti-hair-salon-whittier">
              <FaYelp color="red" size="130" />
            </a>
          </div>
        </Box>
      </motion.div>
    </div>
  );
};
