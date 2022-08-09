const express = require("express");
const app = express();
const router = express.Router();
const yelp = require('./routes/yelpAPI')
const cors = require('cors')

const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/', yelp)

// router.get("/pokemon", yelp.getData)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
