import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();
const PORT = process.env.PORT || 9987;

import {
  Common,
  R3D3,
  Lunatic,
  Support,
  Personalize,
  Accesses,
  Resume,
} from "./modules";

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
app.get("/common/getSupportInfo", Common.getSupportInfo);
app.get("/common/getAppPersonalize", Common.getAppPersonalize);

// r3d3-admin
app.get("/r3d3/signIn", verificationAuthGet, R3D3.signIn);
app.get("/r3d3/getLogin", verificationMobileKeyGet, R3D3.getLogin);
app.post("/r3d3/setLogin", R3D3.setLogin);
app.post(
  "/r3d3/setPassword",
  verificationMobileKeyPost,
  verificationMobileParams,
  R3D3.setPassword
);

// lunatic
app.get("/lunatic/getLinksLunatic", authenticateJWT, Lunatic.getLinks);
app.post("/lunatic/addLinkLunatic", authenticateJWT, Lunatic.addLink);
app.post("/lunatic/deleteLinkLunatic", authenticateJWT, Lunatic.deleteLink);

// support
app.post("/support/addDataSupport", authenticateJWT, Support.addSupport);
app.post("/support/deleteDataSupport", authenticateJWT, Support.deleteSupport);

// personalize
app.get("/personalize/getPersonalize", Personalize.getPersonalize);
app.post(
  "/personalize/addPersonalize",
  authenticateJWT,
  Personalize.addPersonalize
);
app.post(
  "/personalize/deletePersonalize",
  authenticateJWT,
  Personalize.deletePersonalize
);
app.post(
  "/personalize/changePersonalize",
  authenticateJWT,
  Personalize.changePersonalize
);
app.get("/personalize/getSkills", Personalize.getSkills);
app.post("/personalize/addSkills", authenticateJWT, Personalize.addSkills);
app.post(
  "/personalize/updateSkills",
  authenticateJWT,
  Personalize.updateSkills
);
app.post(
  "/personalize/deleteSkills",
  authenticateJWT,
  Personalize.deleteSkills
);

// accesses
app.get(
  "/access/getAccessProjects",
  authenticateJWT,
  Accesses.getAccessProjects
);
app.post("/access/addNewProject", authenticateJWT, Accesses.addNewProject);
app.post("/access/deleteProject", authenticateJWT, Accesses.deleteProject);

// resume
app.get("/resume/getTotalCount", authenticateJWT, Resume.getTotalCount);
app.get("/resume/getUsers", authenticateJWT, Resume.getUsers);

// listener
app.listen(PORT, (): void => {
  console.log(`R3D3 running on port here 👉 ${PORT}`);
});
