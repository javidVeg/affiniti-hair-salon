import andy from "../src/assets/people/andy.jpg";
import cristol from "../src/assets/people/cristol.jpg";
import erika from "../src/assets/people/erika.jpg";
import momo from "../src/assets/people/momo.jpg";
import natalie from "../src/assets/people/natalie.jpg";
import vivian from "../src/assets/people/vivian.jpg";


export const getData = async () => {
  return [
    {
      _id: "5",
      image: natalie,
      firstName: "Natalie",
      emoji: "🤍",
      role: "Owner / Colorist",
      snippet: "Making hair thrive one head at a time!",
      igLink: "",
      twLink: "",
      fbLink: "",
      tikLink: ""
    },
    {
      _id: "1",
      image: andy,
      firstName: "Andy",
      emoji: "🫀",
      role: "Hair Stylist",
      snippet: " Love is in the hair",
      igLink: "https://www.instagram.com/Andyscosmo",
      twLink: null,
      fbLink: null,
      tikLink: null
    },
    {
      _id: "2",
      image: cristol,
      firstName: "Cristal",
      emoji: "🦋",
      role: "Hair Colorist",
      snippet: "Creating and challenging myself, making you feel beautiful is my goal.",
      igLink: "https://www.instagram.com/Colorbydoll",
      twLink: "",
      fbLink: "",
      tikLink: ""
    },
    {
      _id: "3",
      image: erika,
      firstName: "Erika",
      emoji: "👩🏽‍🎨",
      role: "Hair Artist",
      snippet: "I love what i do!",
      igLink: "",
      twLink: "",
      fbLink: "",
      tikLink: ""
    },
    {
      _id: "4",
      image: momo,
      firstName: "Momo",
      emoji: "🤎",
      role: "Hair Stylist",
      snippet: "Let’s transform your hair!",
      igLink: "https://www.instagram.com/_hairbymomo",
      twLink: "",
      fbLink: "",
      tikLink: ""
    },
    {
      _id: "6",
      image: vivian,
      firstName: "Vivian",
      emoji: "💖",
      role: "Hair Stylist",
      snippet: "Being genuinely kind, the world needs more of it.",
      igLink: "",
      twLink: "",
      fbLink: "",
      tikLink: ""
    },
    
  ];
};
