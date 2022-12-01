import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();
const PORT = process.env.PORT || 9987;

import { Common, R3D3, Lunatic, Support, Personalize } from "./modules";

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
app.get("/getAppPersonalize", Common.getAppPersonalize);

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
app.post("/addLinkLunatic", authenticateJWT, Lunatic.addLink);
app.post("/deleteLinkLunatic", authenticateJWT, Lunatic.deleteLink);

// support
app.get("/getDataSupport", authenticateJWT, Support.getSupport);
app.post("/addDataSupport", authenticateJWT, Support.addSupport);
app.post("/deleteDataSupport", authenticateJWT, Support.deleteSupport);

// personalize
app.get("/getPersonalize", authenticateJWT, Personalize.getPersonalize);
app.post("/addPersonalize", authenticateJWT, Personalize.addPersonalize);
app.post("/deletePersonalize", authenticateJWT, Personalize.deletePersonalize);
app.post("/changePersonalize", authenticateJWT, Personalize.changePersonalize);
app.get("/getSkills", authenticateJWT, Personalize.getSkills);

// listener
app.listen(PORT, (): void => {
  console.log(`R3D3 running on port here 👉 ${PORT}`);
});
