import { Request, Response } from "express";
import { setLoginService } from "../services";

/**
 * @description set login api
 * @param {Request} req
 * @param {Response} res
 */
const setLogin = async (req: Request, res: Response) => {
  const { login } = req.body;
  await setLoginService(login);

  res.status(200).send({
    title: `Set login to "${login}"`,
    success: true,
  });
};

export { setLogin };
