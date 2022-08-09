const express = require("express");
const router = express.Router();
const axios = require("axios");

const options = {
    headers: {
        "Authorization": "Bearer Dvq4tz0RDdHFQlZPf4IYAjpcyHrQ_9ArRmRXxB4hQ2T0iMViM7FDtt-iqZclqXens-B8t5bCcpi2kP3MCfwOfPq4vJevGBScnr6scGblGrXZeSOMHE8w4zEqMrrmYnYx"
    }
}

router.get("/", async (req, res) => {
    try {
  const pokemonResponse = await axios.get(
    "https://api.yelp.com/v3/businesses/affiniti-hair-salon-whittier/reviews", options
  );
  return res.status(200).json(pokemonResponse.data);
    } catch (err) {
        console.error("Something went wrong")
        console.error(err)
    }
});

module.exports = router;
