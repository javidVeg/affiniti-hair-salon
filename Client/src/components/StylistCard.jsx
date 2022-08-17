import React, { useState, useEffect } from "react";
import { Card, Typography, Avatar } from "@mui/material";
import { AiFillInstagram } from "react-icons/ai";
import { getData } from "../profile-data-API";
import { motion } from "framer-motion";
import Salon1 from "../../src/assets/salon1.jpg";

export const StylistCard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //? @ THIS GETS DATA FROM DATA SHEET
  useEffect(() => {
    setLoading(true);
    getData().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="grid place-items-center mt-4">
      <div className=" scale-125 md:scale-100 md:mb-10 overflow-hidden">
        <img src={Salon1} alt="salon-image1" />
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 mt-20 md:mt-10 ">
        {data.map((info) => (
          <motion.div
            whileHover={{ scale: 1.1, originX: 0, originY: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="m-4"
            key={info._id}
          >
            <Card
              elevation={8}
              sx={{ maxWidth: 345, height:400, opacity: "inherit", borderRadius: 2 }}
            >
              <div className="grid place-items-center m-6 ">
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
                <div>
                  <Typography variant="h4">{info.emoji}</Typography>
                </div>
                <div>
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: "monospace", color: "gray" }}
                  >
                    {info.role}
                  </Typography>
                </div>
                <div className="flex flex-row space-x-4 mt-1 mb-2">
                  <a href={info.igLink}>
                    <AiFillInstagram size="25" /> 
                  </a>
                  
                </div>
                <div className="">
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: "monospace", textAlign: "center" }}
                  >
                    {info.snippet}
                  </Typography>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
