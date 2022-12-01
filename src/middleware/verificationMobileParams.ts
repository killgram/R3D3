import { Request, Response, NextFunction } from "express";

const verificationMobileParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body;
  if (!password) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  } else {
    next();
  }
};

export { verificationMobileParams };
