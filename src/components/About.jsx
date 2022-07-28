import { Typography } from "@mui/material";
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
      animation.start({ x: "-100vw" });
    }
    console.log("use effect hook, inView=", inView);
  }, [inView]);
  //! @ -----------

  return (
    <motion.div ref={ref} animate={animation}>
      <ThemeProvider theme={theme}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontFamily: "monospace" }}
        >
          Trust no one else with the way you look.
        </Typography>
        <div className="mt-3">
          <Typography
            variant="h5"
            textAlign="center"
            fontFamily="serif"
            color="#212121"
          >
            WELCOME TO AFFINITI
          </Typography>
        </div>
        <div className="pl-20 pr-20 mt-4">
          <Typography textAlign="center">
            Me gustan mucho las Gabriela Las Patricia, las Nicolle, las Sofía Mi
            primera novia en kinder, María Y mi primer amor se llamaba Thalía
            Tengo una colombiana Que me escribe to' los día' Y una mexicana que
            ni yo sabía Otra en San Antonio que me quiere todavía Y las de PR
            que todita' son mía' Una dominicana que es uva bombón Uva, uva
            bombón La de Barcelona que vino en avión Y dice que mi bicho está
            cabrón.
          </Typography>
          <Typography textAlign="center" fontStyle="italic">
            - Natalie (Owner)
          </Typography>
        </div>
      </ThemeProvider>
    </motion.div>
  );
};
