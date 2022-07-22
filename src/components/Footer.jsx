import { Link, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import AffinitiLogo from "../assets/Affiniti-Logo-White.png";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { GrMapLocation } from "react-icons/gr";

export const Footer = () => {
  return (
    <footer className="w-full h-auto absolute left-0">
      <Box
        px={{ xs: 3, sm: 3 }}
        py={{ xs: 5, sm: 3 }}
        className="bg-neutral-800"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} color="white">
                1
              </Box>
              <Box>
                <Link>Contact</Link>
              </Box>
              <Box>
                <Link>Contact</Link>
              </Box>
              <Box>
                <Link>Contact</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} color="white">
                2
              </Box>
              <Box>
                <Link>Contact</Link>
              </Box>
              <Box>
                <Link>Contact</Link>
              </Box>
              <Box>
                <Link>Contact</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="bg-stone-500">
                <div className="grid place-items-center">
                  <img src={AffinitiLogo} alt="logo" width="80%" />
                </div>
                <div className="flex flex-row">
                  <BsFillTelephoneForwardFill className='ml-3 mr-3 mt-1 block' />
                  <a href="tel:123-456-7890">123-456-7890</a>
                </div>
                <div className="flex flex-row">
                  <SiMinutemailer className='ml-3 mr-3 mt-1 block'/>
                  <a href = "mailto: abc@example.com">abc@example.com</a>
                  
                </div>
                <div className="flex flex-row">
                  <GrMapLocation className='ml-3 mr-3 mt-1 block'/>
                  <a href = "https://maps.apple.com/?address=12612%20Philadelphia%20St,%20Unit%20A,%20Whittier,%20CA%2090601,%20United%20States&auid=5589580471039113701&ll=33.978826,-118.041632&lsp=9902&q=Affiniti%20Hair%20Salon&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhBnCgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKUoDP5u3/EBAMUUK2XwDg13AOcjYZPfd/UBAQZUMMQBSgl3AUAQ%3D">12612 Philadelphia St UNIT A, Whittier, CA 90601</a>
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
