import { Card, Typography } from "@mui/material";
import React from "react";
import AffinitiMap from "../assets/Affiniti-Map.png";
import { MdLocationOn } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";


export const LocationCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, opacity: "inherit", borderRadius: 2 }}>
        <div className="grid place-items-center pl-2 pr-2 pb-3">
          <img src={AffinitiMap} alt="Map" width="35%" className="m-5" />
          <Typography
            variant="subtitle2"
            sx={{ fontStyle: "italic", fontFamily: "monospace" }}
          >
            LOCATED IN BEAUTIFUL UPTOWN WHITTIER
          </Typography>
          <div className="flex flex-row p-2">
            <MdLocationOn size="8%" className=" mt-1 mr-1 block" />
            <a href="https://maps.apple.com/?address=12612%20Philadelphia%20St,%20Unit%20A,%20Whittier,%20CA%2090601,%20United%20States&auid=5589580471039113701&ll=33.978826,-118.041632&lsp=9902&q=Affiniti%20Hair%20Salon&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhBnCgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKUoDP5u3/EBAMUUK2XwDg13AOcjYZPfd/UBAQZUMMQBSgl3AUAQ%3D">
              12612 Philadelphia St UNIT A, Whittier, CA 90601
            </a>
          </div>
          <div className="flex flex-row p-2">
            <BsPhoneFill size="6%" className=" mt-1 mr-1 block" />
            <a href="tel:123-456-7890">123-456-7890</a>
          </div>
        </div>
      </Card>
    </div>
  );
};
