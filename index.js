const express = require("express");
const { getSightings } = require("./utils.js");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/sightings", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});

app.get("/sightings/:sightingIndex", async (req, res) => {
  const sightings = await getSightings();
  res.json(
    sightings.filter(
      (sighting) => sighting.REPORT_NUMBER === req.params.sightingIndex
    )
  );
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
