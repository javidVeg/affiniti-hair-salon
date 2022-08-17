import { Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  //? @ CREATETHEME ALLOWS FOR RESPONSIVE FONT SIZES IN THEME PROVIDER
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  //! @ THIS ENABLES SCROLL ANIMATIONS
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
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
      animation.start({ x: -300 });
    }
    console.log("use effect hook, inView=", inView);
  }, [inView]);
  //! @ -----------_

  return (
    <motion.div ref={ref} animate={animation}>
      <ThemeProvider theme={theme}>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ fontFamily: "monospace", mb: 5 }}
        >
          Trust no one else with the way you look.
        </Typography>
        <div className="mt-3">
          <Divider variant="middle">
            <Typography
              variant="h5"
              textAlign="center"
              fontFamily="serif"
              color="#212121"
            >
              WELCOME TO AFFINITI
            </Typography>
          </Divider>
            <Typography
              textAlign="center"
              sx={{ fontFamily: "monospace" }}
              className="-mt-4"
            >
              Established in 2020
            </Typography>
        </div>
        <div className=" px-10 mt-4">
          <Typography textAlign="center">
            Affiniti Hair Salon started as a small suite in Whittier in 2019 but
            with much work and determination we moved to a bigger location in
            Uptown Whittier and decided to expand and open the doors to talented
            hairstylists who would share the same vision. Affiniti means the
            liking or love for something and that’s exactly what we have. We
            love doing hair, making the clients feel confident and we wanted to
            share that with our clients. Affiniti Hair Salon specializes in making the client feel more
            confident about a look that suits them. We believe that there are
            numerous of wonderful colors out there, but our speciality is to do
            a color that is right for you. We believe everyone has the perfect
            looks that suit their skin tone, eye color, career, and lifestyle.
          </Typography>
          
          
          <Typography textAlign="center" fontStyle="italic">
            - Natalie (Owner)
          </Typography>
        </div>
      </ThemeProvider>
    </motion.div>
  );
};
