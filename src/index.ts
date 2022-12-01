import express, { Application } from "express";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 9987;

import bodyParser from "body-parser";

import { Common, R3D3, Lunatic } from "./modules";
import {
  verificationAuthGet,
  verificationMobileKeyGet,
  verificationMobileKeyPost,
  verificationMobileParams,
  authenticateJWT,
} from "./middleware";

// configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// common
app.get("/status", Common.getWorkStatus);
app.get("/getSupportInfo", Common.getSupportInfo);

// r3d3-admin
app.get("/signIn", verificationAuthGet, R3D3.signIn);
app.get("/getLogin", verificationMobileKeyGet, R3D3.getLogin);
app.post("/setLogin", R3D3.setLogin);
app.post(
  "/setPassword",
  verificationMobileKeyPost,
  verificationMobileParams,
  R3D3.setPassword
);

// lunatic
app.get("/getLinksLunatic", authenticateJWT, Lunatic.getLinks);

// listener
app.listen(PORT, (): void => {
  console.log(`R3D3 running on port here 👉 ${PORT}`);
});
