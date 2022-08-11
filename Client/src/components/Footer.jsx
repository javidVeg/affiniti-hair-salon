import { Link, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import AffinitiLogo from "../assets/Affiniti-Logo-White.png";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { BsFillPinMapFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="w-full h-auto absolute left-0">
      <Box
        px={{ xs: 3, sm: 3 }}
        py={{ xs: 5, sm: 3 }}
        className=" bg-zinc-900"
      >
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} sm={4}>
              <Box
                className="grid place-items-center"
                borderBottom={1}
                color="white"
              >
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontStyle: "italic" }}
                >
                  Navigation
                </Typography>
              </Box>
              <Box className="m-3 grid place-items-center">
                <Link sx={{ color: "white" }}>Home</Link>
              </Box>
              <Box className="m-3 grid place-items-center">
                <Link sx={{ color: "white" }}>About</Link>
              </Box>
              <Box className="m-3 grid place-items-center">
                <Link sx={{ color: "white" }}>Services</Link>
              </Box>
              <Box className="m-3 grid place-items-center">
                <Link sx={{ color: "white" }}>Stylist</Link>
              </Box>
              <Box className="m-3 grid place-items-center">
                <Link
                  href="https://www.vagaro.com/affinitihairsalon/book-now"
                  sx={{ color: "white" }}
                >Make an appointment!
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="grid place-items-center">
                <img src={AffinitiLogo} alt="logo" width="100%" />
                <div className="grid place-items-center">
                  <Typography
                    variant="caption"
                    sx={{ mt: 2, color: "white", fontStyle: "italic" }}
                  >
                    Whittiers Finest Loft Salon
                  </Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Box
                  className="grid place-items-center"
                  borderBottom={1}
                  color="white"
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "white", fontStyle: "italic" }}
                  >
                    Contact Us
                  </Typography>
                </Box>
                <div className="flex flex-row p-2">
                  <BsFillTelephoneForwardFill
                    size="6%"
                    className="ml-3 mr-3 mt-1 block"
                    color="white"
                  />
                  <a href="tel:123-456-7890" className="text-white">
                    123-456-7890
                  </a>
                </div>
                <div className="flex flex-row p-2">
                  <SiMinutemailer
                    size="7%"
                    color="white"
                    className="ml-3 mr-3 mt-1 block"
                  />
                  <a href="mailto: abc@example.com" className="text-white">
                    abc@example.com
                  </a>
                </div>
                <div className="flex flex-row p-2">
                  <BsFillPinMapFill
                    color="white"
                    size="9%"
                    className="ml-3 mr-3 mt-1 block"
                  />
                  <a
                    className="text-white"
                    href="https://maps.apple.com/?address=12612%20Philadelphia%20St,%20Unit%20A,%20Whittier,%20CA%2090601,%20United%20States&auid=5589580471039113701&ll=33.978826,-118.041632&lsp=9902&q=Affiniti%20Hair%20Salon&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhBnCgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKUoDP5u3/EBAMUUK2XwDg13AOcjYZPfd/UBAQZUMMQBSgl3AUAQ%3D"
                  >
                    12612 Philadelphia St UNIT A, Whittier, CA 90601
                  </a>
                </div>

                <div className="flex flex-row p-1 pb-2">
                  <AiFillInstagram
                    color="white"
                    size="8%"
                    className="ml-3 mr-3 block"
                    href="https://www.instagram.com/affinitihairsalon/?hl=en"
                  />
                  <a
                    className="text-white"
                    href="https://www.instagram.com/affinitihairsalon/?hl=en"
                  >
                    Follow us on Instagram!
                  </a>
                </div>
              </Box>
              {/* <Box>
                <Link>Contact</Link>
              </Box>
              <Box>
                <Link>Contact</Link>
              </Box>
              <Box>
                <Link>Contact</Link>
              </Box> */}
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            sx={{
              pt: { sx: 5, sm: 10 },
              pb: { sx: 10, sm: 10 },
              color: "white",
            }}
          >
            Affiniti Hair Salon &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
