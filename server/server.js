import axios from "axios";
import express, { json, urlencoded } from "express";

import apiRouter from "./routes";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";

const PORT = process.env.PORT || 3050;

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

// Security block

app.use(helmet());
app.use(hpp());
app.use(cors());
app.use("/api/", apiRouter)
app.get("", (req, res) => {
  res.send("Working");
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
