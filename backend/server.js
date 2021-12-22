const express = require("express");
const app = express();
const cors = require("cors");
const animeRoute = require("./routes/anime.routes");

app.use(cors());

app.use("/api/anime", animeRoute);

app.listen(5500, () => console.log("Listening on Port 5500"));
