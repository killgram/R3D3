import { Request, Response, NextFunction } from "express";
import { Keys } from "../configurations";

const verificationMobileKeyPost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { key } = req.body;
  if (!key) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  } else if (key !== Keys.mobileSecretKey) {
    return res.status(200).send({
      title: "Forbidden, go away",
      success: false,
    });
  } else {
    next();
  }
};

export { verificationMobileKeyPost };
