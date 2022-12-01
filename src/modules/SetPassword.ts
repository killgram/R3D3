import { Request, Response } from "express";
import { setPasswordService } from "../services";

/**
 * @description set password api
 * @param {Request} req
 * @param {Response} res
 */
const setPassword = async (req: Request, res: Response) => {
  const { password } = req.body;
  await setPasswordService(password);

  res.status(200).send({
    title: `Set password to "${password}"`,
    success: true,
  });
};

export { setPassword };
