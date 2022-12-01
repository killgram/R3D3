import express, { Application } from "express";
import cors from "cors";
import { WebSocketServer } from "ws";

const app: Application = express();
const PORT = process.env.PORT || 9987;

import bodyParser from "body-parser";

import { getWorkStatus, getSupportInfo } from "./modules";

// configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET
app.get("/status", getWorkStatus);
app.get("/getSupportInfo", getSupportInfo);

// POST

// listener
app.listen(PORT, (): void => {
  console.log(`R3D3 running on port here 👉 ${PORT}`);
});

const wss = new WebSocketServer({ port: 9000 });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
