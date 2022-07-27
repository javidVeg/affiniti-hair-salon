import React, { useState, useEffect } from "react";
import { Card, Typography, Avatar } from "@mui/material";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { getData } from "../profile-data-API";
import { motion } from "framer-motion";

export const StylistCard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData().then((data) => {
      setData(data);
      setLoading(false);
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

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <div className="grid place-items-center mt-4">
        <Typography variant="h2" color="black" fontFamily="monospace" fontStyle="italic">
            Meet The Affiniti Team
        </Typography>
      <div className=" grid grid-cols-4">
        {data.map((info) => (
          <div className="m-8">
            <Card sx={{ maxWidth: 345, opacity: "inherit", borderRadius: 2 }}>
              <div className="grid place-items-center m-10 ">
                <Avatar
                  alt="Stylist"
                  src={info.image}
                  sx={{ width: 150, height: 150 }}
                />
                <div className=" mt-2">
                  <Typography
                    key={info.id}
                    variant="h6"
                    sx={{ fontFamily: "unset" }}
                  >
                    {info.firstName} {info.lastName}
                  </Typography>
                </div>
                <motion.div initial={{x: -100}} animate={{x:0}}>
                  <Typography variant="h4">{info.emoji}</Typography>
                </motion.div>
                <div>
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: "monospace", color: "gray" }}
                  >
                    {info.role}
                  </Typography>
                </div>
                <div className="-mx-8">
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: "monospace", textAlign: "center" }}
                  >
                    {info.snippet}
                  </Typography>
                </div>
                <div className="flex flex-row space-x-4 mt-4">
                  <a href={info.igLink}>
                    <AiFillInstagram size="25" />
                  </a>
                  <BsTwitter size="25" />
                  <AiFillFacebook size="25" />
                  <FaTiktok size="25" />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
