import { Request, Response, NextFunction } from "express";
import { TokenUtils } from "../utils";

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (TokenUtils.verifyAccessToken(token)) {
      next();
    } else {
      return res.status(200).send({
        title: "forbidden",
        success: false,
        accessToken: false,
      });
    }
  } else {
    return res.status(200).send({
      title: "forbidden",
      success: false,
      accessToken: false,
    });
  }
};

export { authenticateJWT };
