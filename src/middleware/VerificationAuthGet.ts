import { Request, Response, NextFunction } from "express";

const verificationAuthGet = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { login, password } = req.query;
  if (!login || !password) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  } else {
    next();
  }
};

export { verificationAuthGet };
