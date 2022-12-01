import jwt from "jsonwebtoken";
import { Keys } from "../configurations";

const generateAccessToken = (username: string) => {
  return jwt.sign({ username: username }, Keys.accessTokenSecret);
};

const verifyAccessToken = (token: string): void | boolean => {
  return jwt.verify(token, Keys.accessTokenSecret, (err) => {
    return !err;
  });
};

export { generateAccessToken, verifyAccessToken };
