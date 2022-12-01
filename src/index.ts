import express, { Application } from "express";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 9987;

import bodyParser from "body-parser";

import {
  getWorkStatus,
  getSupportInfo,
  setLogin,
  signIn,
  getLogin,
} from "./modules";
import { verificationAuthGet, verificationMobileKey } from "./middleware";

// configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET
app.get("/status", getWorkStatus);
app.get("/getSupportInfo", getSupportInfo);
app.get("/signIn", verificationAuthGet, signIn);
app.get("/getLogin", verificationMobileKey, getLogin);

// POST
app.post("/setLogin", setLogin);

// listener
app.listen(PORT, (): void => {
  console.log(`R3D3 running on port here 👉 ${PORT}`);
});
