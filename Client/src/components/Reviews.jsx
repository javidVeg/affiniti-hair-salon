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
import { getReview } from "../review-data-api";

export const Reviews = () => {
  //! @ THIS ENABLES SCROLL ANIMATIONS
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [data, setData] = useState(null);
  const [shuffleData, setShuffleData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //? @ THIS GETS DATA FROM DATA SHEET
  useEffect(() => {
    setLoading(true);
    getReview().then((data) => {
      const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
      setData(shuffle(data));
      setLoading(false);
    });
  }, []); 
  
  console.log(data)
  // const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  // const newList = shuffle(data)
  // setShuffleData(newList);
  // console.log(shuffleData)

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  
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
      {data.slice(0, 3).map((info) => (
        <div className="relative">
          <Card elevation="10" sx={{ maxWidth: 450, opacity: "inherit", borderRadius: 2 }}>
            <a href={info.name}>
              <FaYelp size="25" className="absolute top-5 right-5" />
            </a>
            <div className="grid place-items-center m-5">
              <Avatar
                src={info.image}
                sx={{ width: 56, height: 56, m: 1 }}
              />
              <Typography sx={{ fontFamily: "monospace" }}>
                {info.name}
              </Typography>
              <div className="flex flex-row space-x-4 m-3">
                <BsStarFill size="25" color="#ffe082" />
                <BsStarFill size="25" color="#ffe082" />
                <BsStarFill size="25" color="#ffe082" />
                <BsStarFill size="25" color="#ffe082" />
                <BsStarFill size="25" color="#ffe082" />
              </div>
              <Typography variant="h6 m-5" textAlign="center">
                "{info.review}"
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
