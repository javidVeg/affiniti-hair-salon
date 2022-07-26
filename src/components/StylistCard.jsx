import React, {useState, useEffect} from "react";
import {
  Card,
  Typography,
  Avatar,
} from "@mui/material";
import abella from "../assets/abella.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { getData } from "../profile-data-API";

export const StylistCard = () => {

        const [data, setData] = useState(null)
        const [isLoading, setLoading] = useState(false)
      
        useEffect(() => {
            setLoading(true)
            getData().then((data) => {
              setData(data);
              setLoading(false)
            });
          }, []);
          

        // useEffect(() => {
          
        //   fetch('/API/profile-data')
        //     .then((res) => res.json())
        //     .then((data) => {
        //       setData(data)
        //       setLoading(false)
        //     })
        // }, [])

        
      
        if (isLoading) return <p>Loading...</p>
        if (!data) return <p>No profile data</p>
  return (
    <div>
        {data.map((info)=> (
      <Card sx={{ maxWidth: 345, opacity: "inherit", borderRadius: 2 }}>
        <div className="grid place-items-center m-10 ">
          <Avatar alt="Stylist" src={abella} sx={{ width: 150, height: 150 }} />
          <div   className=" mt-2">
            <Typography key={info.id} variant="h6" sx={{ fontFamily: "unset" }}>
              {info.name}
            </Typography>
          </div>
          <div>
            <Typography
              variant="h4"
            >
            🧸
            </Typography>
          </div>
          <div>
            <Typography
              variant="caption"
              sx={{ fontFamily: "monospace", color: "gray" }}
            >
              Role/Specialty
            </Typography>
          </div>
          <div className="-mx-8">
            <Typography
              variant="subtitle2"
              sx={{ fontFamily: "monospace", textAlign:"center" }}
            >
              A short sentance that describes themselves.
            </Typography>
          </div>
          <div className="flex flex-row space-x-4 mt-4">
        <AiFillInstagram size="25" />
        <BsTwitter size="25"/>
        <AiFillFacebook size="25"/>
        <FaTiktok size="25"/>
        </div>
        </div>
      </Card>
      ))}
    </div>
  );
};
